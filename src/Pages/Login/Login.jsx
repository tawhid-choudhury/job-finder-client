import { Link } from "react-router-dom";
import Logo from "../../sharedComponents/Navbar/Logo";
import StaticBanner from "../../sharedComponents/Navbar/StaticBanner";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Login = () => {
    return (
        <div className="relative">
            <Helmet>
                <title>Job Finder | Login</title>
            </Helmet>
            <StaticBanner height={"100vh"}></StaticBanner>
            <div className="flex items-center justify-center min-w-full min-h-screen absolute top-0">
                <div className="w-[25vw]">
                    <div className="w-full shadow-2xl bg-base-100 rounded-md">
                        <div className="pt-7">
                            <Logo></Logo>
                        </div>
                        <h1 className="text-3xl text-primary flex items-center justify-center pt-[30px] ">
                            Login to your account
                        </h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value={"Login"} className="btn btn-primary" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="my-4">or</p>
                                <div className="w-full">
                                    <button className="btn btn-primary btn-outline btn-block flex"><span className="text-2xl"><FcGoogle></FcGoogle></span><span className="flex-1">Login with google</span></button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <Link to={"/signup"}><span className="text-white hover:underline">Sign up instead</span></Link>
                </div>
            </div>

        </div>
    );
};

export default Login;