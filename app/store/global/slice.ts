import { createSlice } from "@reduxjs/toolkit"

export const globalSlice = createSlice({
    name: 'global',
    initialState: 'hola',
    reducers: {}
})

export default globalSlice.reducer