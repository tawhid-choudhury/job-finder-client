import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import AddAJob from '../Pages/AddAJob/AddAJob';
import AllJobs from '../Pages/AllJobs/AllJobs';
import Jobdetails from '../Pages/JobDetails/Jobdetails';
import MyJobs from '../Pages/MyJobs/MyJobs';
import PrivateRoute from './PrivateRoute';
import UpdateJob from '../Pages/UpdateJob/UpdateJob';
import AppliedJobs from '../Pages/AppliedJobs/AppliedJobs';
import Blogs from '../Pages/Blogs/Blogs';
import Profile from '../Pages/Profile/Profile';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

// "/alljobs
// "/appliedjobs
// "/addajob
// "/myjobs
// "/blogs

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            },
            {
                path: "/addajob",
                element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
            },
            {
                path: "/myjobs",
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs />
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
                element: <PrivateRoute><Jobdetails></Jobdetails></PrivateRoute>
            },
            {
                path: "/updatejob/:id",
                element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },

        ]
    },
]);


export default router;