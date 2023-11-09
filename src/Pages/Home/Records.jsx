
import PropTypes from 'prop-types';




import { Card, CardHeader, Typography } from "@material-tailwind/react";


const Records = ({ applicationNo, jobNumber }) => {

    return (
        <div>
            <section className="">

                <div className="bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/3WjHCzv/61769.jpg)' }}>
                    <div className="min-h-[500px] flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold text-center my-5">
                            Our Records
                        </h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-14">

                            <Card color="blue" variant="filled" className="w-full max-w-[20rem] p-8 rounded">
                                <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none border-b border-white/10 pb-8 text-center" >
                                    <Typography variant="small" color="white" className="font-normal uppercase">
                                        Total Jobs
                                    </Typography>
                                    <Typography variant="h1" color="white" className="flex justify-center gap-1 text-7xl font-normal p-10">
                                        {jobNumber}
                                    </Typography>
                                </CardHeader>
                            </Card>


                            <Card color="blue" variant="filled" className="w-full max-w-[20rem] p-8 rounded">
                                <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none border-b border-white/10 pb-8 text-center" >
                                    <Typography variant="small" color="white" className="font-normal uppercase">
                                        Total apllications
                                    </Typography>
                                    <Typography variant="h1" color="white" className="flex justify-center gap-1 text-7xl font-normal p-10">
                                        {applicationNo}
                                    </Typography>
                                </CardHeader>
                            </Card>

                            <Card color="blue" variant="filled" className="w-full max-w-[20rem] p-8 rounded">
                                <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none border-b border-white/10 pb-8 text-center" >
                                    <Typography variant="small" color="white" className="font-normal uppercase">
                                        Catagories
                                    </Typography>
                                    <Typography variant="h1" color="white" className="flex justify-center gap-1 text-7xl font-normal p-10">
                                        4
                                    </Typography>
                                </CardHeader>
                            </Card>

                            <Card color="blue" variant="filled" className="w-full max-w-[20rem] p-8 rounded">
                                <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none border-b border-white/10 pb-8 text-center" >
                                    <Typography variant="small" color="white" className="font-normal uppercase">
                                        Users
                                    </Typography>
                                    <Typography variant="h1" color="white" className="flex justify-center gap-1 text-7xl font-normal p-10">
                                        20+
                                    </Typography>
                                </CardHeader>
                            </Card>


                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

Records.propTypes = {
    applicationNo: PropTypes.number,
    jobNumber: PropTypes.number,
};

export default Records;