import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";



const Navbar = () => {
    return (
        <div className="bg-base-300 absolute w-full bg-opacity-0 text-white z-20">
            <div className="navbar custom-main-spacing">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-60 rounded-box w-52">
                            <li><NavLink className="hover:text-primary">Item 1</NavLink></li>
                            <li><NavLink className="hover:text-primary">Item 3</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>

                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink className="hover:text-primary">Item 1</NavLink></li>
                            <li><NavLink className="hover:text-primary">Item 3</NavLink></li>
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
                        <li><NavLink className="btn btn-primary">Login</NavLink></li>
                        <h3 className="mx-3">or</h3>
                        <li><NavLink className="hover:text-primary">Register</NavLink></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;