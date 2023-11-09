import About from "../AboutPage/About";
import MapLocation from "../MapLocationPage/MapLocation";
import NewsLetter from "../NewsLetterPage/NewsLetter";
import Rooms from "../RoomsPage/Rooms";
import SpecialOffer from "../SpecialOfferPage/SpecialOffer";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Rooms></Rooms>
            <NewsLetter></NewsLetter>
            <SpecialOffer></SpecialOffer>
            <MapLocation></MapLocation>
        </div>
    );
};

export default Home;