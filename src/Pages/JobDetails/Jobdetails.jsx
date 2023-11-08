import { useParams } from "react-router-dom";
import StaticBanner from "../../sharedComponents/StaticBanner";
import useJobById from "../../hooks/useJobById";
import { Card } from "@material-tailwind/react";

import { GiMoneyStack } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import Swal from 'sweetalert2'
import axiosJobFinder from "../../api/axiosJobFinder";
const Jobdetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    console.log(id);
    const { isPending, error, data, refetch } = useJobById(id)
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

    const { bannerImgUrl, employerName, totalApplicant, employerEmail, jobTitle, category, salarymin, salarymax, postDate, deadline, shortDes } = data;
    const postDateObj = new Date(postDate);
    const deadlineObj = new Date(deadline);
    const postDay = postDateObj.getDate();
    const postMonth = postDateObj.getMonth() + 1;
    const postYear = postDateObj.getFullYear();

    const deadlineDay = deadlineObj.getDate();
    const deadlineMonth = deadlineObj.getMonth() + 1;
    const deadlineYear = deadlineObj.getFullYear();
    console.log(data);
    const postDateString = `${postDay}-${postMonth}-${postYear}`;
    const deadlineDateString = `${deadlineDay}-${deadlineMonth}-${deadlineYear}`;


    const handleApply = async () => {
        const applicant = user.displayName;
        const applicantEmail = user.email;
        const deadlineTimestamp = deadlineObj.getTime();
        // const currentDate = new Date();
        if (applicantEmail === employerEmail) {
            swal("Error", "You cannot apply to your own job", "error");
            return;
        }
        if (Date.now() > deadlineTimestamp) {
            swal("Error", "The deadline is over", "error");
            return;
        }

        const { value: resumeUrl } = await Swal.fire({
            title: `
            <div>
            <h3>Your Name: ${applicant}</h1>
            <h3>Your Email: ${applicantEmail}</h1>
            <h1>Enter your resume Link</h1>
            </div>
            `,
            input: "text",
            inputLabel: "Your resume Link",
            inputPlaceholder: "Enter Your resume link"
        });

        const jobId = id;
        const newApply = { applicant, applicantEmail, jobId, resumeUrl, category }

        console.log(newApply);

        axiosJobFinder.post("/appliedjobs", newApply)
            .then(data => {
                console.log(data.data)
                if (data.data.result.insertedId) {
                    swal("Complete!", "added a new job!", "success");
                    refetch();
                }
            }).catch(err => {
                console.log(err);
                swal("Error!", `${err.message}`, "error");
            })
    }

    return (
        <div className="relative">
            <Helmet>
                <title>Job Finder | {jobTitle}</title>
            </Helmet>
            <StaticBanner imgUrl={bannerImgUrl} heading={jobTitle} height="400px"></StaticBanner>
            <div className="min-w-full w-full h-full  top-0  px-5">
                <div>
                    <Card className="max-w-[1200px] mx-auto p-5 space-y-5 md:grid grid-cols-3 mb-10 shadow-lg">
                        <div className="m-auto">
                            <div className="avatar">
                                <div className="w-1/2 lg:w-3/4 rounded-full m-auto">
                                    <img src={data?.logoUrl} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 space-y-5">
                            <h1 className="text-heading-custom">{jobTitle}</h1>
                            <div className="divider"></div>
                            <h2 className="font-bold flex gap-4 items-center"><span className="text-2xl"><GiMoneyStack></GiMoneyStack></span> {salarymin}$ - {salarymax}$ </h2>
                            <div className="divider"></div>
                            <h2 className="font-bold flex gap-4 items-center"><span className="">Type:</span> {category} </h2>
                            <div className="divider"></div>
                            <h2 className="font-bold flex gap-4 items-center"><span className="">Posted by:</span> {employerName} </h2>
                            <div className="divider"></div>
                            <h2 className="font-bold flex gap-4 items-center"><span className="">Posted on:</span> {postDateString} </h2>
                            <div className="divider"></div>
                            <h2 className="font-bold flex gap-4 items-center"><span className="">Deadline:</span> {deadlineDateString} </h2>
                            <div className="divider"></div>
                            <h2 className="font-bold flex gap-4 items-center"><span className="">Applicants:</span> {totalApplicant} </h2>
                            <div className="divider"></div>
                            <div>
                                <button onClick={handleApply} className="btn btn-primary"> Apply Now</button>
                            </div>
                        </div>

                    </Card>
                    <div className="custom-main-spacing my-10">
                        <h3 className="text-2xl font-bold">About this job: </h3>
                        <p>{shortDes}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Jobdetails;