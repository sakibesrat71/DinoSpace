import dine from './images/dine2.jpg';
import Navbar from './navbar'
import Searchbar from './search';
import Restaurant from './restaurants';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="home">
            <Navbar />
            <img src={dine} />
            <p className='moto'>NEVER WAIT TO EAT AGAIN</p>
            <Searchbar />
            <div data-aos="fade-up" className="fade">
                <Restaurant />
            </div>
        </div>
    );
}

export default Home;