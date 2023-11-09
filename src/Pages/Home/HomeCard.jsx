import PropTypes from 'prop-types';
import { Card } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const HomeCard = ({ job }) => {
    const { _id, jobTitle, salarymin, salarymax, deadline, category, logoUrl } = job;
    // const postDateObj = new Date(postDate);
    const deadlineObj = new Date(deadline);
    // const postDay = postDateObj.getDate();
    // const postMonth = postDateObj.getMonth() + 1;
    // const postYear = postDateObj.getFullYear();

    const deadlineDay = deadlineObj.getDate();
    const deadlineMonth = deadlineObj.getMonth() + 1;
    const deadlineYear = deadlineObj.getFullYear();
    // console.log(typeof postDateObj);
    // const postDateString = `${postDay}-${postMonth}-${postYear}`;
    const deadlineDateString = `${deadlineDay}-${deadlineMonth}-${deadlineYear}`;


    return (
        <div className='max-w-lg min-h-[150px]'>
            <Card className='h-full w-full rounded'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2 flex flex-col p-4'>
                        <h1 className='font-bold text-lg'>{jobTitle}</h1>
                        <h1 className='text-sm'>Salary :{salarymin}$-{salarymax}$</h1>
                        <h1 className='text-sm'>Type :{category}</h1>
                        <h1 className='text-sm'>Deadline: {deadlineDateString}</h1>
                        <h1 className='text-sm'><Link to={`/job/${_id}`}><button onClick={() => console.log(_id)} className='btn btn-primary'>Details</button></Link></h1>
                    </div>
                    <div className='w-full h-full rounded'>
                        <img src={logoUrl} alt="" className='w-full h-full rounded' />
                    </div>
                </div>
            </Card>

        </div>
    );
};
HomeCard.propTypes = {
    job: PropTypes.object,
};
export default HomeCard;