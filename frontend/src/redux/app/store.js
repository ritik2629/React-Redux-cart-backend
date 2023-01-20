import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import cartReducer from '../features/cart/cartSlice';
import { productAPI } from '../features/product/productApi';
import productReducer from '../features/product/productSlice';

export const store=configureStore({
    reducer:{
        products:productReducer,
        [productAPI.reducerPath]:productAPI.reducer,
        cart:cartReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(productAPI.middleware,logger)
})