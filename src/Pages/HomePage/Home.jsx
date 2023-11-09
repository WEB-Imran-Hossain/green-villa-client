import About from "../AboutPage/About";
import MapLocation from "../MapLocationPage/MapLocation";
import NewsLetter from "../NewsLetterPage/NewsLetter";
import Rooms from "../RoomsPage/Rooms";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Rooms></Rooms>
            <NewsLetter></NewsLetter>
            <MapLocation></MapLocation>
        </div>
    );
};

export default Home;