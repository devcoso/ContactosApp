import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Add from './pages/Add';

import './index.css'

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
    ],
    errorElement : <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
