import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Loaders
import { loader as loaderEdit } from './pages/Edit';
import { loader as loaderContacto } from './pages/Contacto';
//Components
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
//Pages
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';

import './index.css'
import Contacto from './pages/Contacto';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement : <ErrorPage />
      },
      {
        path: 'agregar',
        element: <Add />,
        errorElement : <ErrorPage />
      },
      {
        path: 'contacto/:id',
        loader: loaderContacto,
        element: <Contacto />,
        errorElement : <ErrorPage />
      },
      {
        path: 'editar/:id',
        loader: loaderEdit,
        element: <Edit />,
        errorElement : <ErrorPage />
      },
    ],
    errorElement : <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
