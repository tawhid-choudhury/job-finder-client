import { Link } from "react-router-dom";
import Logo from "../../sharedComponents/Navbar/Logo";
import StaticBanner from "../../sharedComponents/Navbar/StaticBanner";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { Input } from "@material-tailwind/react";
import { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    // const [credentialsOk, setCredentialsOk] = useState(true);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhotoUrlChange = (e) => {
        setPhotoUrl(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name, photoUrl);
    };
    return (
        <div>
            <Helmet>
                <title>Job Finder | Sign Up</title>
            </Helmet>
            <StaticBanner height={"100vh"}></StaticBanner>
            <div className="flex items-center justify-center min-w-full min-h-screen absolute top-0">
                <div className="w-[25vw]">
                    <div className="w-full shadow-2xl bg-base-100 rounded-md">
                        <div className="pt-7">
                            <Logo></Logo>
                        </div>
                        <h1 className="text-3xl text-primary flex items-center justify-center pt-[30px] ">
                            Create a new Account
                        </h1>
                        <form className="card-body space-y-4" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <Input
                                    variant="standard"
                                    label="Name"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="form-control">
                                <Input
                                    variant="standard"
                                    label="Email"
                                    // color={credentialsOk ? "gray" : "red"}
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="form-control">
                                {/* <Input
                                    variant="standard"
                                    label="Password"
                                    value={asterisks}
                                    onChange={handlePasswordChange}
                                    // color={credentialsOk ? "gray" : "red"}
                                    onCut={handlePreventCopyPaste}
                                    onCopy={handlePreventCopyPaste}
                                    onPaste={handlePreventCopyPaste}
                                /> */}
                                {/* <input type="password" name="password" placeholder="Password" id="password" className="input input-bordered rounded-none border-t-0 border-x-0 p-0 border-b-blue-gray-200 text-sm text-blue-gray-500
                                focus:border-t-0 focused:border-x-0 
                                " /> */}

                                <div className="relative z-0 w-full  group">
                                    <input onChange={handlePasswordChange} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-blue-gray-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black focus:border-b-2 peer" placeholder=" " required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                </div>

                            </div>
                            <div className="form-control">
                                <Input
                                    variant="standard"
                                    label="Photo url"
                                    value={photoUrl}
                                    onChange={handlePhotoUrlChange}
                                />


                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value={"Sign Up"} className="btn btn-primary" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-full">
                                    <button className="btn btn-primary btn-outline btn-block flex"><span className="text-2xl"><FcGoogle></FcGoogle></span><span className="flex-1">Sign Up with google</span></button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <Link to={"/login"}><span className="text-white hover:underline">Login instead</span></Link>
                </div>
            </div>

        </div>
    );
};

export default SignUp;