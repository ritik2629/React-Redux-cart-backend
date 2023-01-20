import {createRoot} from 'react-dom/client'
import { App } from './App'
import './index.css';
import { store } from './redux/app/store';
import { Provider } from 'react-redux';
import { productFetch } from './redux/features/product/productSlice';
import { productAPI } from './redux/features/product/productApi';
import { getTotal } from './redux/features/cart/cartSlice';
const root =createRoot(document.getElementById('root'))

// console.log(store.getState())
// store.dispatch(productFetch())
// store.dispatch(getTotal())
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)