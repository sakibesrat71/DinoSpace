import dine from './images/dine6.jpg';
import Navbar from './navbar';
import Footer from './Footer.js';
import Searchbar from './search';
import Restaurant from '../restaurant/restaurants';
import '../css/index.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="home">
            
            <div data-aos="fade-right" className="fade">
            <Navbar />
            </div>
            <div data-aos="fade-up" className="fade">
            <img src={dine} />
            <p className='moto'>NEVER WAIT TO EAT AGAIN</p>
            <Searchbar />
            </div>
            
            <div data-aos="fade-up" className="fade">
                <Restaurant />
            </div>
            <div data-aos="fade-up" className="fade">
                <Footer />
            </div>

        </div>
    );
}

export default Home;