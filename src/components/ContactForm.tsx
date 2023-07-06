import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseCarModel, chooseMake, chooseYear } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[]
  onClose: () => void;
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`);
      setTimeout ( () => {window.location.reload ()}, 500);
      event.target.reset();
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseCarModel(data.car_model));
      dispatch(chooseMake(data.make));
      dispatch(chooseYear(data.year));

      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 500)
      event.target.reset();

      props.onClose();
    }
    
  }
 
  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='name'>Car Name</label>
          <Input {...register('name')} name='name' placeholder='Name' />
        </div>
        <div>
          <label htmlFor='car_model'>Car Model</label>
          <Input {...register('car_model')} name='car_model' placeholder='Car Model' />
        </div>
        <div>
          <label htmlFor='make'>Car Make</label>
          <Input {...register('make')} name='make' placeholder='Car Make' />
        </div>
        <div>
          <label htmlFor='year'>Car Year</label>
          <Input {...register('year')} name='year' placeholder='Car Year' />
        </div>
        <div className="flex p-1">
          <Button 
            className='flex justify-center ms-auto w-full mt-3 bg-amber-300 text-orange-600 p-2 rounded hover:bg-orange-400 hover:text-yellow-300 border border-orange-600'
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm