import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Logo from "../../sharedComponents/Logo";
import { Input } from "@material-tailwind/react";

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Helmet>
                <title>Job Finder | Sign Up</title>
            </Helmet>
            {/* <StaticBanner></StaticBanner> */}
            <div className=" flex flex-col gap-5 items-center justify-center min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-blue-500 via-success to-primary animate-gradient top-0 px-2">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 my-20 rounded-md">
                    <form className="card-body space-y-4 pb-0" >
                        <div className="pt-3 hidden lg:block">
                            <Logo></Logo>
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary flex items-center justify-center ">
                            Create a new account
                        </h1>
                        <div className={`flex flex-col text-sm justify-center items-center mt-2 `}>
                            <div className={`flex flex-col items-center justify-center avatar `}>
                                <div className={`w-20 rounded-full `}>
                                    <img src={user.photoUrl} />
                                </div>
                            </div>
                            <div className={`flex flex-col items-center justify-center mt-2`}>
                            </div>
                        </div>
                        <div className="form-control">
                            <Input
                                variant="standard"
                                label="Name"
                                value={user.displayName}
                            />
                        </div>
                        <div className="form-control">
                            <Input
                                variant="standard"
                                label="Email"
                                value={user.email}
                            />

                        </div>


                        <div className="form-control">
                            <Input
                                variant="standard"
                                label="Photo url"
                                value={user.photoURL}

                            />

                        </div>

                    </form>
                    <div className="card-body pt-0">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;