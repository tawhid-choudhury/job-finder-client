import { Card } from "@material-tailwind/react";
// import useEmailFilterForMyJobs from "../../hooks/useEmailFilterForMyJobs";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyJob from "./MyJob";
import axiosJobFinder from "../../api/axiosJobFinder";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";


const MyJobs = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([]);
    // const { isPending, error, data, refetch } = useEmailFilterForMyJobs(user.email);

    // if (isPending) return <div className='flex justify-center items-center min-h-screen bg-gray-600'><span className="loading loading-spinner loading-lg "></span></div>

    // if (error) return (
    //     <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-yellow-500 via-warning to-yellow-400 animate-gradient flex items-center justify-around px-5">
    //         <Card className="max-w-[600px] m-auto bg-white pt-5 rounded grid lg:grid-cols-2 items-center justify-around p-9">
    //             <p className="text-xl  font-bold text-center">An error has occurred: <br />{error.message}</p>
    //             <img src="https://i.ibb.co/sVwMWV2/stitch-sad-sad-stitch.gif" alt="" />
    //         </Card>
    //     </div>
    // )
    useEffect(() => {
        axiosJobFinder.get(`/alljobspersonal?employerEmail=${user.email}`, { withCredentials: true })
            .then(res => {
                setData(res.data)
            })
    }, [user.email])

    const handledelete = (id) => {
        axiosJobFinder.delete(`/alljobs/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount === 1) {
                    // refetch();
                    swal("Deleted", "", "success");
                }
            }).catch(err => {
                console.log(err);
                swal("Error", `${err.message}`, "error");
            })
    }

    console.log(data);
    return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-l from-blue-900 via-red-500 to-blue-900 animate-gradient top-0 py-36 px-5">
            <Helmet>
                <title>Job Finder | My Jobs</title>
            </Helmet>
            <div>
                <Card className="max-w-[400px] m-auto bg-white pt-5 rounded rounded-b-none">
                    <div className="pt-3 hidden lg:block">
                        {/* <Logo></Logo> */}
                    </div>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary flex items-center justify-center ">
                        My Jobs
                    </h1>
                </Card>
                <Card className="max-w-[100%] m-auto bg-white rounded  py-5">
                    <div className="overflow-x-auto p-4">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Job title</th>
                                    <th>Category</th>
                                    <th>Posting date</th>
                                    <th>Deadline</th>
                                    <th>Salary Range</th>
                                    <th>Details</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.length ? (
                                    data.map((job) => (
                                        <MyJob job={job} key={job._id} handledelete={handledelete}></MyJob>
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

export default MyJobs;