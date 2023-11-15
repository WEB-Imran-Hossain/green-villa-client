const PostReview = () => {

    const handleReview = event => {
        event.preventDefault();
        const comments = event.target.comments.value;
        const name = event.target.name.value;
        const email = event.target.email.value;

        console.log(comments, name, email);
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
                        <input type="text" name="name" placeholder="Name" required id="" className="w-full p-5" />
                    </div>
                    <div className="lg:w-1/2">
                        <input type="email" name="email" placeholder="Email" required id="" className="w-full p-5" />
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