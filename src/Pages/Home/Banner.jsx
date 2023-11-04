import { Carousel } from "flowbite-react";

const Banner = () => {
    return (
        <div className="h-[50vh] lg:h-[75vh] -z-10 rounded-none">
            <Carousel leftControl=" " rightControl=" " indicators={false} slideInterval={5000} className="rounded-none">
                {/* <div className="flex h-full items-center justify-center bg-black rounded-none">
                    <img src="https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg" alt="" className="w-auto h-auto rounded-none" />
                </div>
                <div className="flex h-full items-center justify-center bg-black rounded-none">
                    <img src="https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg" alt="" className="w-fit rounded-none" />
                </div>
                <div className="flex h-full items-center justify-center bg-black rounded-none">
                    <img src="https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg" alt="" className="w-fit rounded-none" />
                </div> */}
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                </div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                </div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                </div>

            </Carousel>
            <div className="absolute w-full h-full bg-black bg-opacity-60 top-0">
                <div className="flex  items-center justify-center h-full text-white">
                    <h1 className=" text-lg sm:text-2xl md:text-3xl lg:text-6xl text-center">We are the best job provider in the country!</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;