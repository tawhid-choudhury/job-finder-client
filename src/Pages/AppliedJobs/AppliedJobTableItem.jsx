import { Link } from 'react-router-dom';
import useJobById from '../../hooks/useJobById';
import { Card } from 'flowbite-react';

const AppliedJobTableItem = ({ id }) => {

    console.log(id);

    const { isPending, error, data, } = useJobById(id)
    if (isPending) return <tr className='flex justify-center items-center min-h-screen bg-gray-600'><span className="loading loading-spinner loading-lg "></span></tr>

    if (error) return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-yellow-500 via-warning to-yellow-400 animate-gradient flex items-center justify-around px-5">
            <Card className="max-w-[600px] m-auto bg-white pt-5 rounded grid lg:grid-cols-2 items-center justify-around p-9">
                <p className="text-xl  font-bold text-center">An error has occurred: <br />{error.message}</p>
                <img src="https://i.ibb.co/sVwMWV2/stitch-sad-sad-stitch.gif" alt="" />
            </Card>
        </div>
    )
    console.log(data);

    const { employerName, jobTitle, category, salarymin, salarymax, postDate, deadline } = data;
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

    return (
        <tr>
            <td>{employerName}</td>
            <td>{jobTitle}</td>
            <td>{category}</td>
            <td>{postDateString}</td>
            <td>{deadlineDateString}</td>
            <td>{salarymin}$-{salarymax}$</td>
            <td><Link to={`/job/${id}`}><button onClick={() => console.log(id)} className='btn btn-primary'>Details</button></Link></td>
        </tr>
    );
};

export default AppliedJobTableItem;