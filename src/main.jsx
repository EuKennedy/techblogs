import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './router/Login.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
},
{
  path: "login",
  element: <Login />,
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
