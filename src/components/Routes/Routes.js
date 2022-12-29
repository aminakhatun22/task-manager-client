import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddTask from '../AddTask/AddTask';
import CompletedTask from '../CompletedTask/CompletedTask';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import MyTask from '../MyTask/MyTask';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedtask',
                element: <CompletedTask></CompletedTask>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }




        ],
    }
])

export default router;