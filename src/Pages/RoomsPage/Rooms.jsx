import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/rooms')
          .then(res => res.json())
          .then(data => setRooms(data))
  }, [])

  return (
    <div className="mt-32 max-w-[90vw] mx-auto">
      <div className="p-4 mt-40 lg:mt-0">
        <div className="space-y-5 mb-10">
          <h4 className="text-xl font-bold text-[#32CD32]">LUXURY EXPERIENCE</h4>
          <h5 className=" text-4xl md:text-5xl font-bold text-[#151515]">Rooms & Suites
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
          }
        </div>
        <div className="text-center mt-12">
          <button className="btn bg-transparent hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case ">View All Rooms</button>
        </div>
      </div>

    </div>
  );
};

export default Rooms;