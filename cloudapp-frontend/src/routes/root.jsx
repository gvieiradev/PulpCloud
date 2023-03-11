import Landing from '../components/Landing'
import Register from '../components/Register'
import Login from '../components/Login'
import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from '../error-page'

const router = createBrowserRouter([
    {
      path: '/', element:<Landing/>, errorElement:<ErrorPage/>
    },
    {
      path: '/register', element:<Register/>, errorElement:<ErrorPage/>
    },
    {
      path: '/login', element:<Login/>, errorElement:<ErrorPage/>
    },
]);

export default router;