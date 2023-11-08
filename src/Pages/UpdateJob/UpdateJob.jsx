import { useParams } from "react-router-dom";
import useJobById from "../../hooks/useJobById";
import { Helmet } from "react-helmet-async";
import { Datepicker } from "flowbite-react";
import swal from "sweetalert";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Logo from "../../sharedComponents/Logo";
import axiosJobFinder from "../../api/axiosJobFinder";
import { Card } from "@material-tailwind/react";

const UpdateJob = () => {


    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [salarymin, setMin] = useState("200000");
    const [salarymax, setmax] = useState("800000");
    // eslint-disable-next-line no-unused-vars
    const [postDate, setpostDate] = useState(new Date());
    const [deadline, setDeadline] = useState(new Date());



    console.log(id);
    const { isPending, error, data } = useJobById(id)
    console.log(data);


    if (isPending) return <div className='flex justify-center items-center min-h-screen bg-gray-600'><span className="loading loading-spinner loading-lg "></span></div>

    if (error) return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-yellow-500 via-warning to-yellow-400 animate-gradient flex items-center justify-around px-5">
            <Card className="max-w-[600px] m-auto bg-white pt-5 rounded grid lg:grid-cols-2 items-center justify-around p-9">
                <p className="text-xl  font-bold text-center">An error has occurred: <br />{error.message}</p>
                <img src="https://i.ibb.co/sVwMWV2/stitch-sad-sad-stitch.gif" alt="" />
            </Card>
        </div>
    )

    const { bannerImgUrl, employerName, totalApplicant, jobTitle, category, shortDes, logoUrl } = data;
    const postDateObj = new Date(data.postDate);
    const deadlineObj = new Date(data.deadline);


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
        // const employerEmail = user.email;
        // const totalApplicant = { data.totalApplicant };


        console.log('bannerImgUrl:', bannerImgUrl);
        console.log('logoUrl:', logoUrl);
        console.log('employerName:', employerName);
        console.log('jobTitle:', jobTitle);
        console.log('category:', category);
        console.log('salarymin:', salarymin);
        console.log('salarymax:', salarymax);
        console.log('postDate:', postDateObj);
        console.log('deadline:', deadline);
        console.log('shortDes:', shortDes);
        // console.log('totalApplicant:', totalApplicant);
        console.log("id: ", id);

        const newJob = { bannerImgUrl, logoUrl, employerName, jobTitle, category, salarymin, salarymax, deadline, shortDes }

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
        axiosJobFinder.patch(`/updatejob/${id}`, newJob)
            .then(data => {
                console.log(data.data)
                if (data.data.modifiedCount) {
                    swal("Complete!", "Updated a your job!", "success");
                }
            }).catch(err => {
                console.log(err);
                swal("Error!", `${err.message}`, "error");
            })

    }



    return (
        <div>
            <Helmet>
                <title>Job Finder | Update {jobTitle}</title>
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
                        <input defaultValue={bannerImgUrl} type="text" name="bannerImgUrl" placeholder="Banner imageURL" className="input input-bordered w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Logo image URL</span>
                        </label>
                        {/* onChange={handleImage} */}
                        <input defaultValue={logoUrl} type="text" name="logoUrl" placeholder="Logo imageURL(OPTIONAL)" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-7">
                            <div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text">Employer Name:</span>
                                    </label>
                                    <input type="text" placeholder="employerName" name="employerName" className="input input-bordered w-full" defaultValue={employerName} />
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text">Job Title:</span>
                                    </label>
                                    <input defaultValue={jobTitle} type="text" placeholder="Job Title" name="jobTitle" className="input input-bordered w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-7 items-center">
                            <div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text">Job Category</span>
                                    </label>
                                    <select name="category" className="select select-bordered rounded h-full min-h-9 w-full" defaultValue={category}>
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
                                        <input onChange={(e) => { setMin(e.target.value) }} name="salarymin" type="range" min="10000" max="1000000" defaultValue={data.salarymin} className="range range-xs range-primary" />
                                        <input onChange={(e) => { setmax(e.target.value) }} name="salarymin" type="range" min="10000" max="1000000" defaultValue={data.salarymax} className="range range-xs range-primary" />
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
                                <Datepicker name="selectedDate" value={deadlineObj}
                                    minDate={postDate}
                                    onSelectedDateChanged={handleDatePickerChange} />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Posting Date</span>
                                </label>
                                <p className="border-[1px] px-3 py-2 rounded">{postDateObj.toString()}</p>
                            </div>
                        </div>
                    </div>



                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        {/* <input type="text" placeholder="Short Description" name="shortDes" className="input input-bordered w-full" /> */}
                        <textarea defaultValue={shortDes} type="text" placeholder="Short Description" name="shortDes" className="textarea textarea-bordered rounded w-full"></textarea>
                    </div>
                    <p className="font-bold mt-7">total applicants: {totalApplicant}</p>
                    <input type="submit" value="Add" className="btn btn-block btn-primary mb-7 " />

                </form>



            </div >



        </div>
    );
};


export default UpdateJob;