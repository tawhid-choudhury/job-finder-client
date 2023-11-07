// import StaticBanner from "../../sharedComponents/StaticBanner";

import { useContext, useState } from "react";
import Logo from "../../sharedComponents/Logo";
import { AuthContext } from "../../providers/AuthProvider";


const AddAJob = () => {
    const { user } = useContext(AuthContext);
    const [salarymin, setMin] = useState("200000");
    const [salarymax, setmax] = useState("800000");
    return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-warning via-secondary to-warning animate-gradient top-0 pt-44">
            <div className="bg-white flex flex-col justify-center items-center max-w-[1600px] m-auto py-20 rounded-md">
                {/* onSubmit={handleAdd} */}
                <form className="w-full max-w-7xl" >
                    <div className="pt-3 hidden lg:block">
                        <Logo></Logo>
                    </div>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary flex items-center justify-center ">
                        Add a new job
                    </h1>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Banner image URL</span>
                        </label>
                        {/* onChange={handleImage} */}
                        <input type="text" name="bannerImgUrl" placeholder="Banner imageURL" className="input input-bordered w-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                        <div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Logged In User Name:</span>
                                </label>
                                <input type="text" placeholder="employerName" name="employerName" className="input input-bordered w-full" defaultValue={user?.displayName} />
                            </div>

                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Job Title:</span>
                                </label>
                                <input type="text" placeholder="Job Title" name="jobTitle" className="input input-bordered w-full" />
                            </div>


                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <select name="category" className="select select-bordered rounded h-full min-h-9 w-full" defaultValue={""}>
                                    <option disabled value="">
                                        Select from below
                                    </option>
                                    <option value="onsite">On site</option>
                                    <option value="remote">Remote</option>
                                    <option value="parttime">Part-time</option>
                                    <option value="hybrid">Hybrid</option>
                                </select>
                            </div>
                        </div>

                        <div>

                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Salary Range</span>
                                </label>
                                <p className="text-sm py-2">{salarymin}$ - {salarymax}$</p>
                                <input onChange={(e) => { setMin(e.target.value) }} name="salarymin" type="range" min="10000" max="1000000" defaultValue={salarymin} className="range range-xs" />
                                <input onChange={(e) => { setmax(e.target.value) }} name="salarymin" type="range" min="10000" max="1000000" defaultValue={salarymax} className="range range-xs" />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" placeholder="Short Description" name="shortDes" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Add" className="btn btn-block btn-primary my-7 " />

                </form>


            </div>

        </div >
    );
};

export default AddAJob;