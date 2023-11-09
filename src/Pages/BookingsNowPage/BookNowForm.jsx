import { useLoaderData } from "react-router-dom";

const BookNowForm = () => {
    const bookingData = useLoaderData();
    console.log("Booking Now Form",bookingData);
    return (
        <div>
            this is book now page
        </div>
    );
};

export default BookNowForm;