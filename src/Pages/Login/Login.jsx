import { Link } from "react-router-dom";
import Logo from "../../sharedComponents/Navbar/Logo";
import StaticBanner from "../../sharedComponents/Navbar/StaticBanner";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { Input } from "@material-tailwind/react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [asterisks, setAsterisks] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        const enteredPassword = e.target.value;
        const maskedPassword = '*'.repeat(enteredPassword.length);
        setPassword(enteredPassword);
        setAsterisks(maskedPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can access the email and password values here
        console.log("Email:", email);
        console.log("Password:", password);
    };


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
                        <form className="card-body space-y-4" onSubmit={handleSubmit}>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}

                                <Input
                                    variant="standard"
                                    label="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                {/* <input name="email" type="email" placeholder="email" className="input input-bordered" required /> */}


                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                <Input
                                    variant="standard"
                                    label="Password"
                                    // type="password"
                                    value={asterisks}
                                    onChange={handlePasswordChange}
                                />

                                {/* <input name="password" type="password" placeholder="password" className="input input-bordered" required /> */}

                                {/* 
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value={"Login"} className="btn btn-primary" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
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