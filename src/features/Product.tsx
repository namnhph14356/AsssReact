import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll, getProducCate, getProductId } from "../api/product";

export const getAllProduct:any = createAsyncThunk(
    "product/getAllProduct",
    async (user:any ) => {
        try {   
            const {data} = await getAll(user);
            return data
        } catch (error:any) {
            return error
        }
    }
) 
export const getProductIdCateDetail:any = createAsyncThunk(
    "product/getProductIdCateDetail",
    async (id:any ) => {
        try {   
            const {data} = await getProducCate(id);
            return data
        } catch (error:any) {
            return error
        }
    }
) 
const productSlice = createSlice({
    name:"product",
    initialState:{
        value:[],
        
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getProductIdCateDetail.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(getAllProduct.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        })
      
        
    }
})


export default productSlice