import './App.css'
import Home from './pages/Home/Home'
import ErrorPage from './pages/Error/Error'
import Menu from './pages/Menu/Menu'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header/Header'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
