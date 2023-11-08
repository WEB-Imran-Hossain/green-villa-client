import { FaEnvelopeOpenText } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const NewsLetter = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-around p-16 lg:p-36' style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className='flex flex-col lg:flex-row items-center gap-8 text-white text-center lg:text-left '>
                <div data-aos="fade-down" className='text-5xl'>
                    <FaEnvelopeOpenText></FaEnvelopeOpenText>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-5xl font-bold'>Your Journey Starts Here!</h2>
                    <p className='text-base font-normal'>Sign up and we`'ll send the best deals to you</p>
                </div>
            </div>
            <div data-aos="fade-down" className="form-control mt-5 lg:mt-0">
                <label className="input-group">
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered lg:w-80 lg:h-16" />
                    <button className="btn text-white bg-[#FF3811] border-[#FF3811]  hover:border-[#FF3811]hover:text-[#FF3811] text-lg font-semibold normal-case hover:bg-transparent lg:h-16 lg:w-32">
                        <input type="submit" value="Subscribe" />
                    </button>
                </label>
            </div>
        </div>
    );
};

export default NewsLetter;