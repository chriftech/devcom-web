import Root from './Root';
import About from './components/About';
import Contact from './components/Contact';
import Guide from './components/Guide';
import Login from './components/Login'
import PasswordReset from './components/PasswordReset';
import Pricing from './components/Pricing';
// import Pricing from './components/Pricing';
import Signup from './components/Signup'
import {createBrowserRouter} from 'react-router-dom'
import BaseLayout from './components/layout/Base';

const authRoutes = [
    {path: '/login', element: <BaseLayout component={<Login />} /> },
    {path: '/signup', element: <BaseLayout component={<Signup />} />},
    {path: '/password-reset', element: <BaseLayout component={<PasswordReset />} />},
]
const subscriptionRoutes = [
    {path: '/plans', element: <BaseLayout component={<Pricing />} />},
    {path: '/success', element: <BaseLayout component={<Pricing />} />},
    {path: '/checkout', element: <BaseLayout component={<Pricing />} />},
]
const routes = [
    {path: '/', element: <BaseLayout component={<Root />} />},
    {path: '/contact-us', element: <BaseLayout component={<Contact />} />},
    {path: '/about-us', element: <BaseLayout component={<About />} />},
    {path: '/guide', element: <BaseLayout component={<Guide />} />},
    ...authRoutes,
    ...subscriptionRoutes,
]
    
export const router = createBrowserRouter(routes)
