import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Toaster } from 'sonner'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
