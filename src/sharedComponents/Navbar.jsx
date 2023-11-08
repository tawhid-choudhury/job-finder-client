import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import { Tooltip } from "@material-tailwind/react";



const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(swal("Complete!", "logged out!", "success"))
    }
    return (
        <div className="bg-base-300 absolute w-full bg-opacity-0 text-base-100 z-20 navbar-sty">
            <div className="navbar custom-main-spacing">
                <div className="navbar-start w-3/4 ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-lg lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] w-[40px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* Website logo, Website name, Home, All Jobs, Applied Jobs, Add A Job, My Jobs(Jobs that a user has created through Add A Job page), Blogs, and User Profile.  */}

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-60 rounded-box w-52">
                            <li className="navItem"><NavLink to="/">Home</NavLink></li>
                            <li className="navItem"><NavLink to="/alljobs">All Jobs</NavLink></li>
                            <li className={`navItem ${!user && "hidden"}`}><NavLink to="/appliedjobs">Applied Jobs</NavLink></li>
                            <li className={`navItem ${!user && "hidden"}`}><NavLink to="/addajob">Add a Job</NavLink></li>
                            <li className={`navItem ${!user && "hidden"}`}><NavLink to="/myjobs">My Jobs</NavLink></li>
                            <li className="navItem"><NavLink to="/blogs" >Blogs</NavLink></li>
                            {/* <li><NavLink to="/profile" className="navItem">Home</NavLink></li> */}
                        </ul>
                    </div>
                    <div className="mr-6">
                        <Logo></Logo>
                    </div>

                    <div className="hidden lg:flex">
                        <ul className=" menu-horizontal gap-3 ">
                            <li className="navItem"><NavLink to="/">Home</NavLink></li>
                            <li className="navItem"><NavLink to="/alljobs">All Jobs</NavLink></li>
                            <li className={`navItem ${!user && "hidden"}`}><NavLink to="/appliedjobs">Applied Jobs</NavLink></li>
                            <li className={`navItem ${!user && "hidden"}`}><NavLink to="/addajob">Add a Job</NavLink></li>
                            <li className={`navItem ${!user && "hidden"}`}><NavLink to="/myjobs">My Jobs</NavLink></li>
                            <li className="navItem"><NavLink to="/blogs" >Blogs</NavLink></li>
                            {/* <li><NavLink to="/profile" className="hover:text-primary">Item 1</NavLink></li> */}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="lg:hidden">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="text-[40px]">{user ? <div className={`avatar ${!user && "hidden"}`}>
                                <div className="w-[40px] border-base-100 border-2 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                                : <FaCircleUser></FaCircleUser>}</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black bg-opacity-60 rounded-box w-52">
                                <li className={`${user && "hidden"}`}><NavLink to='/login'>Login</NavLink></li>
                                <li className={`${user && "hidden"}`}><NavLink to='/signup'>Sign Up</NavLink></li>
                                <li className={`${!user && "hidden"}`} ><button onClick={handleLogout}>Logout</button></li>
                                <li className={`${!user && "hidden"}`}><NavLink to='/profile'>Profile</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden lg:flex gap-5 items-center">
                        <Tooltip content={user?.displayName} placement="bottom">
                            <div className={`avatar ${!user && "hidden"}`}>
                                <div className="w-11 border-base-100 border-2 rounded-full text-xs bg-black">
                                    <img src={user?.photoURL} alt="broken" />
                                </div>
                            </div>
                        </Tooltip>
                        <button onClick={handleLogout} className={`btn btn-primary btn-outline ${!user && "hidden"}`}>Log Out</button>
                        <button><NavLink to='/profile' className={`hover:text-primary ${!user && "hidden"}`}>Profile</NavLink></button>

                        <button><NavLink to='/login' className={`btn btn-primary ${user && "hidden"}`}>Login</NavLink></button>
                        <h3 className={`${user && "hidden"}`}>or</h3>
                        <button><NavLink to='/signup' className={`hover:text-primary ${user && "hidden"}`}>Sign Up</NavLink></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;