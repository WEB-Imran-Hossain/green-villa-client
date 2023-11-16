import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const PostReview = () => {
    const { user } = useContext(AuthContext);
    console.log("review check", user);
    const bookingData = useLoaderData();
    console.log("booking form data post review page", bookingData);


    const handleReview = event => {
        event.preventDefault();
        const comments = event.target.comments.value;
        const rating = event.target.rating.value;
        const review_time = event.target.review_time.value;
        const reviewDetails = { roomId: bookingData.roomId, comments, rating, review_time, image_url: user.photoURL, client_name: user.displayName }
        console.log(comments, rating, review_time);

        axios
            .post("https://green-villa-server.vercel.app/reviews", reviewDetails, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res.data);
                //   setBookingInsertedId(res.data.insertedId);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Successful",
                        text: "Review Sucessfully",
                    });
                }
            });
    }
    return (
        <div className="mt-32 mb-32 bg-base-200 space-y-5 p-10 rounded-lg md:max-w-[70vw] mx-auto">
            <h2 className="text-2xl">Leave a Reply</h2>
            <p className="text-base font-normal text-[#737373]">Your email address will not be published. Required fields are marked <span className="text-[#FF3811]">*</span></p>
            <form onSubmit={handleReview} className="space-y-3">
                <div>
                    <textarea name="comments" placeholder="Comments" required id="" cols="30" rows="8" className="w-full p-5"></textarea>
                </div>

                <div className="flex flex-col lg:flex-row gap-3">
                    <div className="lg:w-1/2">
                        <input type="number" name="rating" placeholder="Out of 5" required id="" className="w-full p-5" />
                    </div>
                    <div className="lg:w-1/2">
                        <input type="datetime-local" name="review_time" placeholder="Time and Date" required id="" className="w-full p-5" value="2023-11-16T14:31"
                            min="2023-11-01T00:00" max="2030-12-31T00:00" />
                    </div>

                </div>
                <div className="text-base font-normal text-[#737373] flex items-center gap-2 link link-hover">
                    <input type="checkbox" name="" id="" required />Save my name and email in browser for the next time I comment.
                </div>
                <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case ">
                    <input type="submit" value="Submit Comment" />
                </button>
            </form>
        </div>
    );
};

export default PostReview;