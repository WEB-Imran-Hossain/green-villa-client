
const SpecialOffer = () => {

  return (
    <div className=" max-w-[90vw] mx-auto space-y-4 space-y-4 mt-32">
      <h4 className="text-xl font-bold text-[#32CD32]">OFFERS</h4>
      <h5 className=" text-4xl md:text-5xl font-bold text-[#151515]">
        Green Villa Special Offers
      </h5>
      <p className="py-4 text-base font-normal text-[#737373]">
        One of the best offers for unique holidays is{" "}
        <strong>Green Villa</strong> hotel planning.{" "}
        <strong>Green Villa</strong> tailored to your specific desires take into
        account your interests, budget, and preferred destinations, ensuring
        that every aspect of your trip is personalized.
      </p>
      <div className="">
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-none hover:bg-gradient-to-r from-[#32CD32] to-[rgba(21, 21, 21, 0.8)] flex flex-col lg:flex-row">
          <figure>
            <img src="https://i.ibb.co/MPSLVdB/hero-home-2.jpg" />
          </figure>
          <div className="card-body shadow-xl ">
            <div className="hover:text-white">
              <h5 className=" text-4xl md:text-5xl font-bold text-[#151515]">
                Stay 3 Nights - <strong className="text-[#32CD32]">Save 20%</strong>
              </h5>
              <p className="py-4 text-base font-normal text-[#737373]">
                Immerse yourself in the allure of an extended stay, where 3 nights unlock a savings and heightened enjoyment. Picture yourself unwinding in the heart of ciry area, surrounded by the unique blend of modern convenience and timeless elegance that defines our hotel. With this special offer, you not only secure a luxurious retreat but also enjoy a substantial 20% discount on your entire stay.
              </p>
              
              <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case ">
                Book Now
              </button>
           
            </div>
          </div>
          
        </div>
        <div className="card card-side bg-base-100 shadow-xl flex-row-reverse rounded-none hover:bg-gradient-to-l from-[#32CD32] to-[rgba(21, 21, 21, 0.8)] flex flex-col lg:flex-row-reverse">
          <figure>
            <img src="https://i.ibb.co/TL6rXyD/local-amenities-1-1.jpg" />
          </figure>
          <div className="card-body">
            <div>
              <h5 className=" text-4xl md:text-5xl font-bold text-[#151515]">
                Typical Food
              </h5>
              <p className="py-4 text-base font-normal text-[#737373]">
                Start your day with a traditional breakfast that captures the essence of our region.Indulge in fluffy<br /> pancakes drizzled with locally sourced honey, or savor a savory breakfast wrap<br /> filled with farm-fresh eggs, cheese, and a medley of aromatic spices. Wash it down with a cup of freshly brewed coffee or a refreshing herbal tea, setting the perfect tone for a day of exploration.
              </p>
              
              <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case ">
                Book Now
              </button>
           
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl rounded-none hover:bg-gradient-to-r from-[#32CD32] to-[rgba(21, 21, 21, 0.8)] flex flex-col lg:flex-row">
          <figure>
            <img src="https://i.ibb.co/dcgG2Xf/bg-contact.jpg" />
          </figure>
          <div className="card-body">
            <div>
              <h5 className=" text-4xl md:text-5xl font-bold text-[#151515]">
                Horse Ride
              </h5>
              <p className="py-4 text-base font-normal text-[#737373]">
                The Horse Ride Package includes a curated riding experience tailored to your preferences.Choose from<br /> a leisurely ride for beginners, allowing you to connect with the gentle rhythm of your equine companion, <br />or opt for a more adventurous trail for those seeking an adrenaline boost. As you meander through lush <br />landscapes and scenic paths, you'll have the opportunity to witness the beauty of [Landmarks/Scenic Spots], creating lasting memories against the backdrop of nature's splendor.
              </p>
              <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case ">
                Book Now
              </button>
            </div>
          </div>
          <div className="card-actions justify-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
