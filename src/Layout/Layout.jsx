import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";


const Layout = () => {
    return (
        <div className="relative">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;