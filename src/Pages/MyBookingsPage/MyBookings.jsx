const MyBookings = (rooms, handleBookingConfirm, handleDelete  ) => {
    const { _id, roomCategory, description, roomSize, availability, specialOffers, pricePerNight, imageLg, maxPerson, status } = rooms
    return (
        <div>
            {/* row 1 */}
            <tr className="flex items-center justify-around space-x-28">
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                imageLg && <img src={imageLg} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                </td>
                <td>{imageLg}</td>
                <td>{roomCategory}</td>
                <td>{roomSize}</td>
                <th>
                    {
                        status === 'confirm' ? <span> confirmed</span> :
                            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                    }
                </th>
            </tr>
        </div>
    );
};

export default MyBookings;