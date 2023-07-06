import { useState } from 'react'
import Button from './Button'
import {Modal} from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hideable: true},
    { field: 'name', headerName: "Car Name", flex: 1},
    { field: 'car_model', headerName: "Car Model", flex: 1},
    { field: 'make', headerName: "Car Make", flex: 1},
    { field: 'year', headerName: "Year Made", flex: 1},
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData()
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`);
        setTimeout( () => {window.location.reload() }, 500)
        
    }

    return (
    <>
        <Modal
        id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                className='p-3 m-3 bg-amber-300 text-orange-600 rounded hover:bg-orange-400 hover:text-yellow-300 border border-orange-600 tracking-wide'
                onClick={() => handleOpen()}
                >
                    Add New Car
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 bg-amber-300 text-orange-600 rounded m-3 hover:bg-orange-400 hover:text-yellow-300 border border-orange-600 tracking-wide" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-amber-300 text-orange-600 rounded m-3 hover:bg-orange-400 hover:text-yellow-300 border border-orange-600 tracking-wide" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col bg-yellow-50"}
            style={{ height: 400, width: '100%'}}
            >
                <h2 className='p-3 bg-amber-300 text-orange-600 border border-orange-600 my-2 rounded tracking-wider'>My Cars</h2>
                <DataGrid rows={contactData} columns={columns} pageSizeOptions={[5]}
                checkboxSelection={true}
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                />
        </div>
    
    </>
  )
}

export default DataTable