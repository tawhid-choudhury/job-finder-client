

const Team = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 via-accent to-error animate-gradient py-10 px-5">
            <h1 className="text-4xl font-bold text-center mt-36">
                Meet the Team
            </h1>
            <div className="max-w-[90%] m-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                <div className="text-center flex flex-col items-center">
                    <div>
                        <div className="avatar">
                            <div className="w-64 mask mask-hexagon">
                                <img src="https://i.ibb.co/5xh6vZp/person2.jpg" />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl">Sarah Adams, CEO</h1>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div>
                        <div className="avatar">
                            <div className="w-64 mask mask-hexagon">
                                <img src="https://i.ibb.co/PwvC9Df/person1.jpg" />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl">Emily Brown, Co-Owner</h1>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div>
                        <div className="avatar">
                            <div className="w-64 mask mask-hexagon">
                                <img src="https://i.ibb.co/xLgMpL7/person3.jpg" />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl">Michael Williams, Bussiness partner</h1>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div>
                        <div className="avatar">
                            <div className="w-64 mask mask-hexagon">
                                <img src="https://i.ibb.co/0yP1YvD/person4.jpg" />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl">Jane Smith, Bussiness partner</h1>
                </div>
            </div>
        </div>
    );
};

export default Team;