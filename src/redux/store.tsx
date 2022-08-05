import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/CartSlide'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

