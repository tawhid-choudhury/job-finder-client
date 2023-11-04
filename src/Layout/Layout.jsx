import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";


const Layout = () => {
    return (
        <div className="relative">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;