import { Carousel } from "flowbite-react";

const Banner = () => {
    return (
        <div className="h-[75vh] -z-10 rounded-none bg-black">
            <div className="hidden lg:block">
                <Carousel leftControl=" " rightControl=" " indicators={false} slideInterval={7000} className="rounded-none">
                    <div className="relative hero min-h-[75vh] bg-no-repeat bg-cover bg-center animate-gradient-banner-home " style={{ backgroundImage: 'url(https://i.ibb.co/DKxMjDv/startup-593341-1920.jpg)' }}>
                        <div className="absolute w-full h-full bg-black bg-opacity-60 top-0">
                            <div className="flex flex-col items-center justify-center h-full text-white">
                                <h1 className=" text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">We are the best job provider in the country!</h1>
                                <p className="pt-2 text-sm lg:text-base text-center">Discover your dream career by identifying your passions and skills. Pursue the job that truly resonates with your heart&apos;s desires.</p>

                            </div>
                        </div>
                    </div>
                    <div className="relative hero min-h-[75vh] animate-gradient-banner-home" style={{ backgroundImage: 'url(https://i.ibb.co/zs785ry/business-man-1572059-1920.jpg)' }}>
                        <div className="absolute w-full h-full bg-black bg-opacity-60 top-0">
                            <div className="flex flex-col items-center justify-center h-full text-white">
                                <h1 className=" text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">Join our team of satisfied employees at Job Finder SYL!</h1>
                                <p className="pt-2">Find the job that your heart desires</p>

                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
            <div className="h-[75vh] -z-10 rounded-none bg-black block lg:hidden">
                <Carousel leftControl=" " rightControl=" " indicators={false} slideInterval={7000} className="rounded-none">
                    <div className="relative hero min-h-[75vh] bg-no-repeat bg-cover bg-center animate-gradient-banner-home2 " style={{ backgroundImage: 'url(https://i.ibb.co/DKxMjDv/startup-593341-1920.jpg)' }}>
                        <div className="absolute w-full h-full bg-black bg-opacity-60 top-0">
                            <div className="flex flex-col items-center justify-center h-full text-white">
                                <h1 className=" text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">We are the best job provider in the country!</h1>
                                <p className="pt-2 text-sm lg:text-base text-center">Discover your dream career by identifying your passions and skills. Pursue the job that truly resonates with your heart&apos;s desires.</p>

                            </div>
                        </div>
                    </div>
                    <div className="relative hero min-h-[75vh] animate-gradient-banner-home2" style={{ backgroundImage: 'url(https://i.ibb.co/zs785ry/business-man-1572059-1920.jpg)' }}>
                        <div className="absolute w-full h-full bg-black bg-opacity-60 top-0">
                            <div className="flex flex-col items-center justify-center h-full text-white">
                                <h1 className=" text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">We are the best job provider in the country!</h1>
                                <p className="pt-2">Find the job that your heart desires</p>

                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    );
};

export default Banner;