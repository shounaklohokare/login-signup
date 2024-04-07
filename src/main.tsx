import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Error from './components/Error';
import Signup from './components/Signup';


import 'react-toastify/dist/ReactToastify.css'
import SuccessfulSignUp from './components/SuccessfulSignUp';
import SuccessfulLogin from './components/SuccessfulLogin';

const App = () => {

  return  <Outlet/>
          

}

const router = createBrowserRouter([{
    path: "",
    element: <App/>,
    children : [
        {
            path: "",
            element: <Login/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/success",
          element: <SuccessfulSignUp/>
        },
        {
          path: "/successful_login",
          element: <SuccessfulLogin/>
        }
    ],
    errorElement: <Error/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

export default App;