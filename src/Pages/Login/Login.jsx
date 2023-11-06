import { Link, useNavigate } from "react-router-dom";
import Logo from "../../sharedComponents/Logo";
// import StaticBanner from "../../sharedComponents/StaticBanner";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import useEmailSignUp from "../../hooks/useEmailSignUp";
import useAuthFunctions from "../../hooks/useAuthFunctions";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";

const Login = () => {

    const [email, emailOk, handleEmailChange] = useEmailSignUp();
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("")
    const [handleGoogle] = useAuthFunctions(setErrorText);
    const { loginEmailPass } = useContext(AuthContext)
    const nav = useNavigate();


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailOk) {
            setErrorText("Enter valid Email")
            return;
        }
        console.log(email, password);
        loginEmailPass(email, password)
            .then((uc) => {
                console.log(uc);
                swal("Complete!", "Logged in!", "success");
                nav(location?.state ? location.state : "/")
            }).catch((err) => {
                if (err.code === "auth/invalid-login-credentials") {
                    swal("Error!", "Invalid login credentials", "error");
                    setErrorText("Invalid login credentials");
                } else {
                    swal("Error:", err);
                    setErrorText("Error:", err);
                    console.log(err);
                }
            })
    };
    return (
        <div>
            <Helmet>
                <title>Job Finder | Login</title>
            </Helmet>
            {/* <StaticBanner></StaticBanner> */}
            <div className="flex flex-col gap-5 items-center justify-center min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-blue-500 via-success to-primary animate-gradient top-0 px-2">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 my-20 rounded-md">
                    <form className="card-body space-y-4" onSubmit={handleSubmit}>
                        <div className="pt-3 hidden lg:block">
                            <Logo></Logo>
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary flex items-center justify-center ">
                            Log into your account
                        </h1>


                        <div className="form-control">
                            <Input
                                variant="standard"
                                label="Email"
                                value={email}
                                onChange={handleEmailChange}
                                color={emailOk ? "gray" : "red"}
                                required
                            />
                            {emailOk ? "" :
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="mt-2 flex items-center gap-1 font-normal text-xs text-red-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-px h-4 w-4"
                                    >
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"
                                        />
                                    </svg>
                                    Not a valid email address.
                                </Typography>
                            }

                        </div>
                        <div className="form-control">
                            <div className="relative z-0 w-full  group">
                                <input
                                    onChange={handlePasswordChange}
                                    type="password"
                                    name="password"
                                    id="floating_password"
                                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-blue-gray-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-b-2 peer`}
                                    placeholder=" "
                                    required />

                                <label
                                    htmlFor="floating_password"
                                    className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>
                                    Password<span className="text-red-500 ml-[1px]">*</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <input type="submit" value={"Login"} className="btn btn-primary" />
                        </div>
                    </form>
                    <div className="card-body pt-0">
                        {!errorText ? "" :
                            <Typography
                                variant="small"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal text-xs text-red-500"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-px h-4 w-4"
                                >
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"
                                    />
                                </svg>
                                {errorText}
                            </Typography>
                        }
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-full">
                                <button onClick={handleGoogle} className="btn btn-primary btn-outline btn-block flex"><span className="text-2xl"><FcGoogle></FcGoogle></span><span className="flex-1">Login with google</span></button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="text-center text-sm">Don&apos;t have an account? <Link to={"/signup"}><span className=" text-primary underline hover:text-secondary">Sign up now</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;