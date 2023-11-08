import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import AddAJob from '../Pages/AddAJob/AddAJob';
import AllJobs from '../Pages/AllJobs/AllJobs';
import Jobdetails from '../Pages/JobDetails/Jobdetails';
import MyJobs from '../Pages/MyJobs/MyJobs';

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
                element: <AllJobs></AllJobs>
            },
            {
                path: "/appliedjobs",
                element: <h1>appliedjobs</h1>
            },
            {
                path: "/addajob",
                element: <AddAJob></AddAJob>
            },
            {
                path: "/myjobs",
                element: <MyJobs></MyJobs>
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
                element: <SignUp></SignUp>
            },
            {
                path: "/job/:id",
                element: <Jobdetails></Jobdetails>
            },

        ]
    },
]);


export default router;