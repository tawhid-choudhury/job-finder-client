import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

// "/alljobs
// "/appliedjobs
// "/addajob
// "/myjobs
// "/blogs

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/alljobs",
                element: <h1>alljobs</h1>
            },
            {
                path: "/appliedjobs",
                element: <h1>appliedjobs</h1>
            },
            {
                path: "/addajob",
                element: <h1>addajob</h1>
            },
            {
                path: "/myjobs",
                element: <h1>myjobs</h1>
            },
            {
                path: "/blogs",
                element: <h1>blogs</h1>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <h1>signup</h1>
            },

        ]
    },
]);


export default router;