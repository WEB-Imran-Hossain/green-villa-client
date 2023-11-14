import { FaQuoteLeft, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const ReviewCard = ({ review }) => {
    const { _id, client_name, place, rating, comments, image_url } = review;
    return (
            <div className="card card-side bg-base-100 shadow-xl flex flex-col">
                <div>
                    <FaQuoteLeft className='text-6xl text-[#737373] text-opacity-10 m-5'></FaQuoteLeft>
                    <figure><img className="rounded-full w-20" src={image_url} /></figure>

                </div>
                <div className="card-body flex items-center">
                    <h2 className="text-xl font-bold">{client_name}</h2>
                    <h4 className="text-sm text-[#32CD32]">{place}</h4>
                    <Rating className="text-2xl text-orange-500"
                    placeholderRating={review?.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                  />
                    <p className="text-base font-normal text-[#737373]">{comments}</p>
                </div>
            </div>
    );
};

export default ReviewCard;