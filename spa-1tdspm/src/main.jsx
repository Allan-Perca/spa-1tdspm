import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import EditarProdutos from "./routes/EditarProdutos"
import Erro404 from "./routes/Erro404"
import Home from "./routes/Home"
import Produtos from "./routes/Produtos"

const router = createBrowserRouter([
  {path: '/', element: <App/>,
    errorElement: <Erro404/>, 
    children:[
      {path: '/', element: <Home/>},
      {path: '/produtos', element: <Produtos/>},
      {path: '/editar/produtos/:id', element: <EditarProdutos/>},
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/> 

  </React.StrictMode>,
)
