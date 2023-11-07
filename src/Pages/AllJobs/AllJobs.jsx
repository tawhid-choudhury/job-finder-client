import { Card } from "@material-tailwind/react";
import useAllJobs from "../../hooks/useAllJobs";
import JobInTable from "./JobInTable";
// import StaticBanner from "../../sharedComponents/StaticBanner";

const AllJobs = () => {
    const { isPending, error, data } = useAllJobs();
    console.log(data);

    if (isPending) return <progress className="progress w-56"></progress>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-success via-warning to-success animate-gradient top-0 py-36 px-5">
            <div>
                <Card className="max-w-[400px] m-auto bg-white pt-5 rounded rounded-b-none">
                    <div className="pt-3 hidden lg:block">
                        {/* <Logo></Logo> */}
                    </div>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary flex items-center justify-center ">
                        Browse All jobs
                    </h1>
                </Card>
                <Card className="max-w-[100%] m-auto bg-white rounded rounded-b-none p-5 ">
                    <div className="form-control w-full rounded">
                        <div className="flex w-full max-w-5xl mx-auto rounded">
                            <input type="text" placeholder="Search…" className="input input-bordered w-full rounded-none rounded-l " />
                            <button className="btn btn-primary rounded-none rounded-r h-9">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>

                </Card>
                <Card className="max-w-[100%] m-auto bg-white rounded rounded-t-none py-5">
                    <div className="overflow-x-auto p-4">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Employer</th>
                                    <th>Job title</th>
                                    <th>Posting date</th>
                                    <th>Deadline</th>
                                    <th>Salary Range</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length ? data.map(job => <JobInTable job={job} key={job._id}></JobInTable>) : <div className='font-bold text-5xl'>No Product Available</div>
                                }
                            </tbody>
                        </table>
                    </div>




                </Card>
            </div>
        </div >
    );
};

export default AllJobs;