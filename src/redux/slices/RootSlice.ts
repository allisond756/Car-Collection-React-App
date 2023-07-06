import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Name',
        car_model: 'Car Model',
        make: 'Make',
        year: 'Year',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseCarModel: (state, action) => { state.car_model = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseYear: (state, action) => { state.year = action.payload }
    }
})

export const reducer = rootSlice.reducer
export const { chooseName, chooseCarModel, chooseMake, chooseYear } = rootSlice.actions