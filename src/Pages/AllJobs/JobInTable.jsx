import PropTypes from 'prop-types';

const JobInTable = ({ job }) => {
    const { employerName, jobTitle, salarymin, salarymax, postDate, deadline } = job;
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



    // const postDay = postDate?.getDate();
    // const postMonth = postDate?.getMonth() + 1;
    // const postYear = postDate?.getFullYear();
    return (
        <tr>
            <td>{employerName}</td>
            <td>{jobTitle}</td>
            <td>{postDateString}</td>
            <td>{deadlineDateString}</td>
            <td>{salarymin}$-{salarymax}$</td>
            <td><button className='btn btn-primary'>Details</button></td>
        </tr>
    );
};

JobInTable.propTypes = {
    job: PropTypes.object,
};

export default JobInTable;