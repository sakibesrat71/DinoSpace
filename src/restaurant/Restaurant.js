import { Col, Container, Row, Card, Button, Carousel, Form } from "react-bootstrap";
import Navbar from "../FrontPage/navbar"
import Nav_info from "./Nav"
import '../css/restaurant.css';
import dine from './images/dine.jpg'
import dine4 from './images/dine4.jpg'
import dine3 from './images/dine3.jpg'
import Star from '../components/StarRating'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Restaurant = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="restaurant">
            <div data-aos="fade-right" className="fade">
            <Navbar />
            <div className="img"><img className="res-img" src={dine3} /></div>
            </div>
            
            <Container>
                <Row>
                    <Col className="Navigation" md={6} sm={12}>
                        <Nav_info />
                        <div className="overview" id="overview">
                            <h1>Overview</h1>
                            <br />
                            <h5>Sao21 is a chinese cuisine restaurant in uttara. The environment here is customer friendly.</h5>
                        </div>
                        <div className="interior" id="interior">
                            <h1>Interior</h1>
                            <br />
                            <Carousel>
                <Carousel.Item><img className="restaurant-interior" src={dine} /></Carousel.Item> <Carousel.Item><img className="restaurant-interior" src={dine3} /></Carousel.Item> <Carousel.Item><img className="restaurant-interior" src={dine4} /></Carousel.Item>
                </Carousel>
                        </div>
                        <div className="menu" id="menu">
                            <h1>Menu</h1>
                            <br />
                            <a href="#">click here to see the menu</a>
                        </div>
                        <div className="review" id="review">

                            <h1>Reviews</h1>
                            <br></br>
                            <h5>Give Rating</h5>
                            <Star />
                        </div>
                    </Col>

                    <Col className="Reservation" md={6} sm={12}>
                        <Card className="position-sticky" >
                            <Card.Title>Reservation</Card.Title>
                            <Card.Body>

                                <Card.Text>
                                    Fill up the form for reservation.
                                </Card.Text>
                                <Form.Group className="mb-3">
                                <Form.Control type="date" name='date_of_birth' />

                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="Enter total diners" />
                                    
                                </Form.Group>

                                <Form.Group className="mb-3">
                                <Form.Control type="time"  />
                                    
                                </Form.Group>
                                <Button variant="primary">Reserve</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Restaurant;