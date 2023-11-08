import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import useAllJobs from "../../hooks/useAllJobs";
// import JobInTable from "../AllJobs/JobInTable";
import HomeCard from "./HomeCard";


const Tabs = ({ data, filteredJobs, setFilteredJobs }) => {
    const [tabActive, setTabActive] = useState(1)

    const [searchQuery, setSearchQuery] = useState('');
    // const data = filteredJobs;
    // const [filteredJobs, setFilteredJobs] = useState(data);

    useEffect(() => {
        const updatedFilteredJobs = data?.filter((applied) =>
            applied.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredJobs(updatedFilteredJobs);
    }, [searchQuery, data]);


    console.log(filteredJobs);
    const handleTabChange = (n, cate) => {
        setTabActive(n)
        setSearchQuery(cate)
    }
    return (
        <div className="py-10 custom-main-spacing">
            <div className="tabs justify-center">
                <a onClick={() => handleTabChange(1, "")} className={`tab lg:tab-lg tab-bordered ${tabActive === 1 ? "tab-active" : ""}`}>All</a>
                <a onClick={() => handleTabChange(2, "onsite")} className={`tab lg:tab-lg tab-bordered ${tabActive === 2 ? "tab-active" : ""}`}>On site</a>
                <a onClick={() => handleTabChange(3, "remote")} className={`tab lg:tab-lg tab-bordered ${tabActive === 3 ? "tab-active" : ""}`}>Remote</a>
                <a onClick={() => handleTabChange(4, "hybrid")} className={`tab lg:tab-lg tab-bordered ${tabActive === 4 ? "tab-active" : ""}`}>Hybrid</a>
                <a onClick={() => handleTabChange(5, "parttime")} className={`tab lg:tab-lg tab-bordered ${tabActive === 5 ? "tab-active" : ""}`}>Part time</a>
            </div>
            <div className="flex flex-wrap gap-5 my-10 items-center justify-center px-2">
                {filteredJobs?.length ? (
                    filteredJobs.map((job) => (
                        <HomeCard job={job} key={job._id}></HomeCard>
                    ))
                ) : (
                    <div>
                        <h1 className="text-center text-3xl">No Data Found</h1>
                    </div>
                )}
            </div>
        </div>
    );
};
Tabs.propTypes = {
    filteredJobs: PropTypes.object,
    data: PropTypes.object,
    setFilteredJobs: PropTypes.func
};
export default Tabs;