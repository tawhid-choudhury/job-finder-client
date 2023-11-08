import { useParams } from "react-router-dom";
import StaticBanner from "../../sharedComponents/StaticBanner";
import useJobById from "../../hooks/useJobById";
import { Card } from "@material-tailwind/react";

import { GiMoneyStack } from "react-icons/gi";
const Jobdetails = () => {
    const { id } = useParams();
    console.log(id);
    const { isPending, error, data } = useJobById(id)
    console.log(data);
    if (isPending) return <div className='flex justify-center items-center min-h-screen bg-gray-600'><span className="loading loading-spinner loading-lg "></span></div>

    if (error) return 'An error has occurred: ' + error.message

    const { bannerImgUrl, employerName, totalApplicant, jobTitle, category, salarymin, salarymax, postDate, deadline, shortDes } = data;
    const postDateObj = new Date(postDate);
    const deadlineObj = new Date(deadline);
    const postDay = postDateObj.getDate();
    const postMonth = postDateObj.getMonth() + 1;
    const postYear = postDateObj.getFullYear();

    const deadlineDay = deadlineObj.getDate();
    const deadlineMonth = deadlineObj.getMonth() + 1;
    const deadlineYear = deadlineObj.getFullYear();
    console.log(typeof postDateObj);
    const postDateString = `${postDay}-${postMonth}-${postYear}`;
    const deadlineDateString = `${deadlineDay}-${deadlineMonth}-${deadlineYear}`;

    return (
        <div className="relative">
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
                                <button className="btn btn-primary"> Apply Now</button>
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