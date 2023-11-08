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
            <NewsLetter></NewsLetter>
            <Rooms></Rooms>
            <MapLocation></MapLocation>
        </div>
    );
};

export default Home;