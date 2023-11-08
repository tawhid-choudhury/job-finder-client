import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyJob = ({ job, handledelete }) => {
    const { _id, jobTitle, salarymin, salarymax, postDate, deadline, category } = job;
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

        <tr>
            <td>{jobTitle}</td>
            <td>{category}</td>
            <td>{postDateString}</td>
            <td>{deadlineDateString}</td>
            <td>{salarymin}$-{salarymax}$</td>
            <td><Link to={`/updateJob/${_id}`}><button onClick={() => console.log(_id)} className='btn btn-success'>Update</button></Link></td>
            <td><Link><button onClick={() => handledelete(_id)} className='btn btn-error'>Delete</button></Link></td>
        </tr>


    );
};

MyJob.propTypes = {
    job: PropTypes.object,
    handledelete: PropTypes.func,
};

export default MyJob;