import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import EditarProdutos from "./routes/EditarProdutos"
import Erro404 from "./routes/Erro404"
import Home from "./routes/Home"
import Produtos from "./routes/Produtos"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
