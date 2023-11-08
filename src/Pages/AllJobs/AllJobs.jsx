import { Card } from "@material-tailwind/react";
import useAllJobs from "../../hooks/useAllJobs";
import JobInTable from "./JobInTable";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import StaticBanner from "../../sharedComponents/StaticBanner";

const AllJobs = () => {
    const { isPending, error, data } = useAllJobs();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(data);

    useEffect(() => {
        const updatedFilteredJobs = data?.filter((job) =>
            job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredJobs(updatedFilteredJobs);
    }, [searchQuery, data]);
    if (isPending) return <div className='flex justify-center items-center min-h-screen bg-gray-600'><span className="loading loading-spinner loading-lg "></span></div>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-success via-warning to-success animate-gradient top-0 py-36 px-5">
            <Helmet>
                <title>Job Finder | All Jobs</title>
            </Helmet>
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
                            <input
                                type="text"
                                placeholder="Search by Job Title"
                                className="input input-bordered w-full rounded-none rounded-l"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
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
                                    <th>Category</th>
                                    <th>Posting date</th>
                                    <th>Deadline</th>
                                    <th>Salary Range</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredJobs?.length ? (
                                    filteredJobs.map((job) => (
                                        <JobInTable job={job} key={job._id}></JobInTable>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No matching jobs found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>




                </Card>
            </div>
        </div >
    );
};

export default AllJobs;