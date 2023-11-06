import About from "../AboutPage/About";
import NewsLetter from "../NewsLetterPage/NewsLetter";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;