import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { SwiperSlide } from 'swiper/react';

const ReviewCard = ({ review }) => {
    const { _id, client_name, place, rating, comments, image_url } = review;
    return (

        <SwiperSlide>
            <div className="card card-side bg-base-100 shadow-xl flex flex-col">
                <div>
                    <FaQuoteLeft className='text-6xl text-[#737373] text-opacity-10 m-5'></FaQuoteLeft>
                    <figure><img className="rounded-full w-20" src={image_url} /></figure>

                </div>
                <div className="card-body flex items-center">
                    <h2 className="text-xl font-bold">{client_name}</h2>
                    <h4 className="text-sm text-[#32CD32]">{place}</h4>
                    <div className='flex'>
                        {[...Array(5)].map(star => {
                            return <FaStar key={star} star={star} className='text-xl'>{rating}</FaStar>
                        })}

                    </div>
                    <p className="text-base font-normal text-[#737373]">{comments}</p>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default ReviewCard;