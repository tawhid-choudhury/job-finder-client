import { Card } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
// import useAppliedJobsById from "../../hooks/useAppliedJobsById";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AppliedJobTableItem from "./AppliedJobTableItem";
import axiosJobFinder from "../../api/axiosJobFinder";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext)
    // const { isPending, error, data } = useAppliedJobsById(user.email);
    const [data, setData] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(data);
    useEffect(() => {
        axiosJobFinder.get(`/allapplied?applicantEmail=${user.email}`, { withCredentials: true })
            .then(res => {
                setData(res.data)
            })
    }, [user.email])

    useEffect(() => {
        const updatedFilteredJobs = data?.filter((applied) =>
            applied.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredJobs(updatedFilteredJobs);
    }, [searchQuery, data]);




    // if (isPending) return <div className='flex justify-center items-center min-h-screen bg-gray-600'><span className="loading loading-spinner loading-lg "></span></div>

    // if (error) return (
    //     <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-yellow-500 via-warning to-yellow-400 animate-gradient flex items-center justify-around px-5">
    //         <Card className="max-w-[600px] m-auto bg-white pt-5 rounded grid lg:grid-cols-2 items-center justify-around p-9">
    //             <p className="text-xl  font-bold text-center">An error has occurred: <br />{error.message}</p>
    //             <img src="https://i.ibb.co/sVwMWV2/stitch-sad-sad-stitch.gif" alt="" />
    //         </Card>
    //     </div>
    // )

    // console.log(data);
    data.map(ap => console.log(ap.jobId))
    return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-error via-accent to-error animate-gradient top-0 py-36 px-5">
            <Helmet>
                <title>Job Finder | Applied Jobs</title>
            </Helmet>
            <div>
                <Card className="max-w-[400px] m-auto bg-white pt-5 rounded rounded-b-none">
                    <div className="pt-3 hidden lg:block">
                        {/* <Logo></Logo> */}
                    </div>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary flex items-center justify-center ">
                        Your Applied
                    </h1>
                </Card>
                <Card className="max-w-[100%] m-auto bg-white rounded rounded-b-none p-5 ">
                    <div className="form-control w-full rounded">
                        <div className="flex w-full max-w-5xl mx-auto rounded">
                            {/* <input
                                type="text"
                                placeholder="Search by Job Category"
                                className="input input-bordered w-full rounded-none rounded-l"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            /> */}
                            <select
                                className="select select-bordered rounded h-full min-h-9 w-full"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}

                            >
                                <option disabled value="">
                                    Select from below
                                </option>
                                <option value="">All</option>
                                <option value="onsite">On site</option>
                                <option value="remote">Remote</option>
                                <option value="parttime">Part-time</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
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
                                    filteredJobs.map((ap) => (
                                        <AppliedJobTableItem key={ap._id} id={ap.jobId}></AppliedJobTableItem>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No matching jobs found</td>
                                    </tr>
                                )}

                                {/* {
                                    data.map(ap => <AppliedJobTableItem key={ap._id} id={ap.jobId}></AppliedJobTableItem>)
                                } */}
                            </tbody>
                        </table>
                    </div>




                </Card>
            </div>
        </div >
    );
};

export default AppliedJobs;