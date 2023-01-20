import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState ={
    items:[],
    status:null
}

export const productFetch=createAsyncThunk('products/producfetch',async()=>{
        const response=await axios.get('http://localhost:5000/products')
        return response?.data
})
const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(productFetch.pending,(state,action)=>{
            state.status='pending'
        })
        builder.addCase(productFetch.fulfilled,(state,action)=>{
            state.items=action.payload,
            state.status='success'
        })
        builder.addCase(productFetch.rejected,(state,action)=>{
            state.status='error occured'
        })
    }
})

export const {} = productSlice.actions
export default productSlice.reducer