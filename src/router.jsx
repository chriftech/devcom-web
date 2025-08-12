import App from './App';
import Login from './components/Login'
import Signup from './components/Signup'
import {createBrowserRouter} from 'react-router-dom'

const routes = [
    {path: '/', element: <App />},
    {path: '/signin', element: <Login />},
    {path: '/signup', element: <Signup />},
    {path: '/dashboard', element: <App />},
]

export const router = createBrowserRouter(routes)
