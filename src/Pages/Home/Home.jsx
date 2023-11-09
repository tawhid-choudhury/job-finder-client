import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Tabs from "./Tabs";
import useAllJobs from "../../hooks/useAllJobs";
import { useEffect, useState } from "react";
import { Card } from "@material-tailwind/react";
// import Team from "./Team";
import Contact from "./Contact";
import Records from "./Records";
// import { Tab } from "@material-tailwind/react";

const Home = () => {
    const { isPending, error, data } = useAllJobs();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(data);
    const [applicationNo, setApplicationNo] = useState(0);
    const calculateTotalApplicants = () => {
        let totalApplicants = 0;
        data?.map(job => {
            totalApplicants += job.totalApplicant;
        });

        setApplicationNo(totalApplicants);
    };

    useEffect(() => {
        calculateTotalApplicants();
    }, [data]);

    useEffect(() => {
        const updatedFilteredJobs = data?.filter((job) =>
            job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredJobs(updatedFilteredJobs);
    }, [searchQuery, data]);
    if (isPending) return <div className='flex justify-center items-center min-h-screen bg-gray-600'><span className="loading loading-spinner loading-lg "></span></div>

    if (error) return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-blue-800 via-accent to-blue-800 animate-gradient flex items-center justify-around px-5">
            <Card className="max-w-[600px] m-auto bg-white pt-5 rounded grid lg:grid-cols-2 items-center justify-around p-9">
                <p className="text-xl  font-bold text-center">An error has occurred: <br />{error.message}</p>
                <img src="https://i.ibb.co/sVwMWV2/stitch-sad-sad-stitch.gif" alt="" />
            </Card>
        </div>
    )
    return (
        <div>
            <Helmet>
                <title>Job Finder | Home</title>
            </Helmet>
            <div className="relative">
                <Banner />
                <div className="absolute flex justify-center custom-main-spacing w-full bottom-20 left-0 right-0">

                    <input
                        type="text"
                        placeholder="Search by Job Title"
                        className="input input-bordered rounded-none rounded-l w-1/2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <Tabs data={data} filteredJobs={filteredJobs} setFilteredJobs={setFilteredJobs}></Tabs>
            <Records applicationNo={applicationNo} jobNumber={data.length}></Records>
            <Contact></Contact>
        </div>
    );
};

export default Home;