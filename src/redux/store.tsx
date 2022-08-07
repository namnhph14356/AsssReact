import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/CartSlide'
import productSlice from '../features/Product'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        product: productSlice.reducer 

    }
})

