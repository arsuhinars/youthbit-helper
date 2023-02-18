import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import StartPage from './routes/StartPage';
import ViewPage, { loader as view_loader } from './routes/ViewPage';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />
  },
  {
    path: '/view/:viewNumber',
    element: <ViewPage />,
    loader: view_loader
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='mx-auto min-h-screen block'>
      <RouterProvider router={router}/>
    </main>
  </React.StrictMode>,
)
