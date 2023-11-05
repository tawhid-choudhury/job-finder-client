import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import Logo from "./Logo";



const Navbar = () => {
    return (
        <div className="bg-base-300 absolute w-full bg-opacity-0 text-gray-300 z-20">
            <div className="navbar custom-main-spacing">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* Website logo, Website name, Home, All Jobs, Applied Jobs, Add A Job, My Jobs(Jobs that a user has created through Add A Job page), Blogs, and User Profile.  */}

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-60 rounded-box w-52">
                            <li><NavLink to="/" className="navItem">Home</NavLink></li>
                            <li><NavLink to="/alljobs" className="navItem">All Jobs</NavLink></li>
                            <li><NavLink to="/appliedjobs" className="navItem">Applied Jobs</NavLink></li>
                            <li><NavLink to="/addajob" className="navItem">Add A Job</NavLink></li>
                            <li><NavLink to="/myjobs" className="navItem">My Jobs</NavLink></li>
                            <li><NavLink to="/blogs" className="navItem">Blogs</NavLink></li>
                            {/* <li><NavLink to="/profile" className="navItem">Home</NavLink></li> */}
                        </ul>
                    </div>
                    <div>
                        <Logo></Logo>
                    </div>

                    <div className="hidden lg:flex">
                        <ul className=" menu-horizontal gap-6 px-5">
                            <li><NavLink to="/" className="navItem">Home</NavLink></li>
                            <li><NavLink to="/alljobs" className="navItem">All Jobs</NavLink></li>
                            <li><NavLink to="/appliedjobs" className="navItem">Applied Jobs</NavLink></li>
                            <li><NavLink to="/addajob" className="navItem">Add A Job</NavLink></li>
                            <li><NavLink to="/myjobs" className="navItem">My Jobs</NavLink></li>
                            <li><NavLink to="/blogs" className="navItem">Blogs</NavLink></li>
                            {/* <li><NavLink to="/profile" className="hover:text-primary">Item 1</NavLink></li> */}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="md:hidden">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="text-[27px]"><FaCircleUser></FaCircleUser></label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black bg-opacity-60 rounded-box w-52">
                                <li><NavLink>Login</NavLink></li>
                                <li><NavLink>Register</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        <button><NavLink to='/login' className="btn btn-primary">Login</NavLink></button>
                        <h3 className="mx-3">or</h3>
                        <button><NavLink to='/signup' className="hover:text-primary">Sign Up</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;