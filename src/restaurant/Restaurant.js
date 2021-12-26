import { Col, Container, Row } from "react-bootstrap";
import Nav_info from "./Nav"
import Navbar from "../FrontPage/navbar"
import '../css/restaurant.css';
import dine3 from './images/dine3.jpg'


const Restaurant = () => {
    return (
        <div className="restaurant">
            <Navbar />
            <img className="res-img" src={dine3} />
            <div className="nav">
                <Nav_info />
            </div>
            <div className="Overview">

            </div>
            <div className="interior">

            </div>
            <div className="menu">

            </div>
            <div className="review">

            </div>

        </div>
    );
}

export default Restaurant;