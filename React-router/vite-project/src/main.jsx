import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Configurar router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ContactDetails from './routes/ContactDetails.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: 'contact',
//     element: <Contact />,
//   },
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //Página de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '/contact/:id',
        element: <ContactDetails />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
