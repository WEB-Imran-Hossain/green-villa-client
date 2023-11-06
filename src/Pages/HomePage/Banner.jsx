import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Banner = () => {
    return (
        <div className="carousel h-[90vh]">
            {/* slider one */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/rwkQ58c/hero-home-1.jpg" className="w-full" />
                <div className="absolute h-full left-0 flex items-center top-0 text-white bg-gradient-to-r from-[#32CD32] to-[rgba(21, 21, 21, 0.8)]">
                    <div className='w-96 lg:w-1/2 space-y-4 pl-12 text-center md:text-left'>
                        <h4 className="text-xl font-bold text-white">Welcome!</h4>
                        <h2 className='text-5xl lg:text-7xl font-bold'>A TRULY IMMERSIVE RELAX PLACE</h2>
                        <p className='text-lg font-normal'>If relaxation is your primary goal, Green Vila numerous luxury resorts and wellness retreats that provide world-class spa treatments, yoga sessions, and meditation practices.</p>
                        <div>
                            <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:text-[#FF3811] text-lg font-semibold rounded-none normal-case ">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 md:left-5 md:right-5 lg:left-40 left-72 -bottom-3 lg:bottom-10">
                    <a href="#slide4" className="btn rounded-none mr-5 bg-[#ffffff33] hover:bg-[#32CD32] border-none text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide2" className="btn rounded-none bg-[#32CD32] hover:bg-[#ffffff33] border-none text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            {/* slider two */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/4T4npkW/slide-home-1.jpg" className="w-full" />
                <div className="absolute h-full left-0 flex items-center top-0 text-white bg-gradient-to-r from-[#32CD32] to-[rgba(21, 21, 21, 0.8)]">
                    <div className='w-96 lg:w-1/2 space-y-4 pl-12 text-center md:text-left'>
                        <h4 className="text-xl font-bold text-white">Welcome!</h4>
                        <h2 className='text-5xl lg:text-7xl font-bold'>A UNIQUE EXPERIENCE WHERE TO STAY</h2>
                        <p className='text-lg font-normal'>If relaxation is your primary goal, Green Vila numerous luxury resorts and wellness retreats that provide world-class spa treatments, yoga sessions, and meditation practices.</p>
                        <div>
                            <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:text-[#FF3811] text-lg font-semibold rounded-none normal-case ">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 md:left-5 md:right-5 lg:left-40 left-72 -bottom-3 lg:bottom-10">
                    <a href="#slide1" className="btn rounded-none mr-5 bg-[#ffffff33] hover:bg-[#32CD32] border-none text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide3" className="btn rounded-none bg-[#32CD32] hover:bg-[#ffffff33] border-none text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            {/* slider three */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/TvM9zzH/slide-home-2.jpg" className="w-full" />
                <div className="absolute h-full left-0 flex items-center top-0 text-white bg-gradient-to-r from-[#32CD32] to-[rgba(21, 21, 21, 0.8)]">
                    <div className='w-96 lg:w-1/2 space-y-4 pl-12 text-center md:text-left'>
                        <h4 className="text-xl font-bold text-white">Welcome!</h4>
                        <h2 className='text-5xl lg:text-7xl font-bold uppercase'>The experience of unique holidays</h2>
                        <p className='text-lg font-normal'>If relaxation is your primary goal, Green Vila numerous luxury resorts and wellness retreats that provide world-class spa treatments, yoga sessions, and meditation practices.</p>
                        <div>
                            <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:text-[#FF3811] text-lg font-semibold rounded-none normal-case ">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 md:left-5 md:right-5 lg:left-40 left-72 -bottom-3 lg:bottom-10">
                    <a href="#slide2" className="btn rounded-none mr-5 bg-[#ffffff33] hover:bg-[#32CD32] border-none text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide4" className="btn rounded-none bg-[#32CD32] hover:bg-[#ffffff33] border-none text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            {/* slider four */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/BPHSNxD/slide-home-3.jpg" className="w-full" />
                <div className="absolute h-full left-0 flex items-center top-0 text-white bg-gradient-to-r from-[#32CD32] to-[rgba(21, 21, 21, 0.8)]">
                    <div className='w-96 lg:w-1/2 space-y-4 pl-12 text-center md:text-left'>
                        <h4 className="text-xl font-bold text-white">Welcome!</h4>
                        <h2 className='text-5xl lg:text-7xl font-bold uppercase'>One of the best services for holidays</h2>
                        <p className='text-lg font-normal'>If relaxation is your primary goal, Green Vila numerous luxury resorts and wellness retreats that provide world-class spa treatments, yoga sessions, and meditation practices.</p>
                        <div>
                            <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:text-[#FF3811] text-lg font-semibold rounded-none normal-case ">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 md:left-5 md:right-5 lg:left-40 left-72 -bottom-3 lg:bottom-10">
                    <a href="#slide3" className="btn rounded-none mr-5 bg-[#ffffff33] hover:bg-[#32CD32] border-none text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide1" className="btn rounded-none bg-[#32CD32] hover:bg-[#ffffff33] border-none text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;