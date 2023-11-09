// import StaticBanner from "../../sharedComponents/StaticBanner";

import { useContext, useState } from "react";
import Logo from "../../sharedComponents/Logo";
// import DatePicker, { ReactDatePicker } from "react-datepicker";
import { AuthContext } from "../../providers/AuthProvider";
import { Datepicker } from "flowbite-react";
import swal from "sweetalert";
// import axiosJobFinder from "../../api/axiosJobFinder";
import { Helmet } from "react-helmet-async";
import useAxiosInstance from "../../hooks/axios/useAxiosInstance";
// import axios from "axios";



const AddAJob = () => {
    const { user } = useContext(AuthContext);
    const [salarymin, setMin] = useState("200000");
    const [salarymax, setmax] = useState("800000");
    // eslint-disable-next-line no-unused-vars
    const [postDate, setpostDate] = useState(new Date());
    const [deadline, setDeadline] = useState(new Date());
    const axiosInstance = useAxiosInstance();

    const handleDatePickerChange = (date) => {
        date.setHours(23, 59, 59, 999);
        setDeadline(date);
        console.log(typeof (date));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const bannerImgUrl = form.bannerImgUrl.value;
        const logoUrl = form.logoUrl.value;
        const employerName = form.employerName.value;
        const jobTitle = form.jobTitle.value;
        const category = form.category.value;
        const shortDes = form.shortDes.value;
        const employerEmail = user.email;
        const totalApplicant = 0;


        console.log('bannerImgUrl:', bannerImgUrl);
        console.log('logoUrl:', logoUrl);
        console.log('employerName:', employerName);
        console.log('jobTitle:', jobTitle);
        console.log('category:', category);
        console.log('salarymin:', salarymin);
        console.log('salarymax:', salarymax);
        console.log('postDate:', postDate);
        console.log('deadline:', deadline);
        console.log('shortDes:', shortDes);

        const newJob = { bannerImgUrl, logoUrl, employerName, employerEmail, totalApplicant, jobTitle, category, salarymin, salarymax, postDate, deadline, shortDes }

        if (!bannerImgUrl) {
            swal("Warning", "Please enter a banner image URL", "warning");
            return;
        }
        if (!employerName) {
            swal("Warning", "Please enter the employer's name", "warning");
            return;
        }
        if (!jobTitle) {
            swal("Warning", "Please enter a job title", "warning");
            return;
        }
        if (!category) {
            swal("Warning", "Please enter a category", "warning");
            return;
        }
        if (!shortDes) {
            swal("shortDes", "Please enter a short description", "warning");
            return;
        }
        axiosInstance.post("/addajob", newJob)
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    swal("Complete!", "added a new job!", "success");
                }
            }).catch(err => {
                console.log(err);
                swal("Error!", `${err.message}`, "error");
            })

    }

    return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-blue-gray-600 via-accent to-blue-gray-600 animate-gradient top-0 py-36 px-5">
            <Helmet>
                <title>Job Finder | Add a job</title>
            </Helmet>
            <div className="bg-white flex flex-col justify-center items-center max-w-[1600px] m-auto py-10 lg:py-20 rounded-md px-3">
                {/* */}
                <form className="w-full max-w-7xl" onSubmit={handleAdd}>
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
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Logo image URL</span>
                        </label>
                        {/* onChange={handleImage} */}
                        <input type="text" name="logoUrl" placeholder="Logo imageURL(OPTIONAL)" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-7">
                            <div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text">Logged In User Name:</span>
                                    </label>
                                    <input type="text" placeholder="employerName" name="employerName" className="input input-bordered w-full" defaultValue={user?.displayName} />
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text">Job Title:</span>
                                    </label>
                                    <input type="text" placeholder="Job Title" name="jobTitle" className="input input-bordered w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-7 items-center">
                            <div>
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
                                    <div className="border-[1px] border-gray-300 px-3 py-2 rounded">
                                        <input onChange={(e) => { setMin(e.target.value) }} name="salarymin" type="range" min="10000" max="1000000" defaultValue={salarymin} className="range range-xs range-primary" />
                                        <input onChange={(e) => { setmax(e.target.value) }} name="salarymin" type="range" min="10000" max="1000000" defaultValue={salarymax} className="range range-xs range-primary" />
                                        <p className="text-sm">{salarymin}$ - {salarymax}$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-7">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Application Deadline</span>
                                </label>
                                <Datepicker name="selectedDate" value={deadline}
                                    minDate={postDate}
                                    onSelectedDateChanged={handleDatePickerChange} />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Posting Date</span>
                                </label>
                                <p className="border-[1px] px-3 py-2 rounded">{postDate.toString()}</p>
                            </div>
                        </div>
                    </div>



                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        {/* <input type="text" placeholder="Short Description" name="shortDes" className="input input-bordered w-full" /> */}
                        <textarea type="text" placeholder="Short Description" name="shortDes" className="textarea textarea-bordered rounded w-full"></textarea>
                    </div>
                    <p className="font-bold mt-7">total applicants: 0</p>
                    <input type="submit" value="Add" className="btn btn-block btn-primary mb-7 " />

                </form>



            </div >

        </div >
    );
};

export default AddAJob;