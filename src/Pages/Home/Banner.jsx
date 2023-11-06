import { Carousel } from "flowbite-react";

const Banner = () => {
    return (
        <div className="relative h-[50vh] lg:h-[75vh] -z-10 rounded-none">
            <Carousel leftControl=" " rightControl=" " indicators={false} slideInterval={5000} className="rounded-none">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                </div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                </div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                </div>

            </Carousel>
            <div className="absolute w-full h-full bg-black bg-opacity-60 top-0">
                <div className="flex flex-col items-center justify-center h-full text-white">
                    <h1 className=" text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">We are the best job provider in the country!</h1>
                    <p className="mt-11">Find the job that your heart desires</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;