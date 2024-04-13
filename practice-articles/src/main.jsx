import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './routes/index.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store} >
        <RouterProvider router={AppRouter}>

                <App />



        </RouterProvider>

        <ToastContainer />

        </Provider>

)
