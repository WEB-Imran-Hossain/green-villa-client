const About = () => {
    return (
        <div className="hero min-h-screen max-w-[90vw] mx-auto ">
            <div className="hero-content flex-col lg:flex-row flex-col-reverse">
                <div className="lg:w-1/2 lg:mt-0 lg:text-left w-10/12">
                    <div className="lg:w-4/5 space-y-4">
                        <h4 className="text-xl font-bold text-[#32CD32]">About</h4>
                        <h5 className=" text-4xl md:text-5xl font-bold text-[#151515]">Best services and the experience of unique holidays</h5>
                        <p className="py-4 text-base font-normal text-[#737373]">One of the best services for unique holidays is <strong>Green Villa</strong> hotel planning. <strong>Green Villa</strong> tailored to your specific desires take into account your interests, budget, and preferred destinations, ensuring that every aspect of your trip is personalized.
                        </p>
                        <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case ">Discover More</button>
                    </div>
                </div>
                <div className="relative ml-14">
                    <img src="https://i.ibb.co/M2nLPCG/home-2.jpg" className="lg:w-full rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/7vzTPqM/home-1.jpg" className="w-1/2 rounded-lg shadow-2xl absolute  lg:top-60 lg:-left-24 top-28 -left-12 bottom-0 border-8  border-white" />
                </div>
            </div>
        </div>
    );
};

export default About;