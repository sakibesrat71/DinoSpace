import { Col, Container, Row, Card, Button, Carousel, Form } from "react-bootstrap";
import axios from "axios";
import Navbar from "../FrontPage/navbar"
import Nav_info from "./Nav"
import '../css/restaurant.css';
import dine from './images/dine.jpg'
import dine4 from './images/dine4.jpg'
import dine3 from './images/dine3.jpg'
import Star from '../components/StarRating'
import { useEffect, useState, Link } from 'react';
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading"

import Aos from "aos";
import "aos/dist/aos.css";

import { useRouteMatch } from "react-router-dom";

const Restaurant = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    //     let navigate = useNavigate(); 
    //   const routeChange = () =>{ 
    //     let path = `/reservation`; 
    //     navigate(path);
    //   }
    const [error, setError] = useState(false);
    const [date, setDate] = useState("");
    const [diner, setDiner] = useState("");
    const [time, setTime] = useState("");


    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    "Content-type": "application/json"
                }
            }
            const token = localStorage.getItem('token')
            console.log(token);
            // setLoading(true)
            const { data } = await axios.post('/api/users/reservation', {
                date,
                diner,
                time,
                token
            });


            // const { data } = await axios.post('api/users/reservation', {
            //     date,
            //     diner,
            //     time,
            // }, config);

            console.log(data);
            // setLoading(false);
        } catch (error) {
            // setError(error.response.data.message);
            alert(error)
            console.log(error)    
        }
    };

    return (
        <div className="restaurant">
            {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {loading && <Loading />} */}
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
                        <Card className="Reservation" >
                            <Card.Title>Reservation</Card.Title>
                            <Card.Body>

                                <Card.Text>
                                    Fill up the form for reservation.
                                </Card.Text>
                                <Form onSubmit={submitHandler}>
                                <Form.Group className="mb-3">
                                    <Form.Control type="date" className='date' value={date} onChange={(e) => setDate(e.target.value)} />

                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="number" placeholder="Enter total diners" className="diner" value={diner} onChange={(e) => setDiner(e.target.value)} />

                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control type="time" className="time" value={time} onChange={(e) => setTime(e.target.value)} />

                                </Form.Group>
                                <Button value="Reserve" variant="primary" type="submit">
                                     Reserve
                                </Button>

                                {/* <form action="http://localhost:9000/api/users/reservation">
                                    <input type="submit" value="Go to Reservation" />
                                </form> */}
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Restaurant;


// onClick={async () => {
                                //     const user = JSON.parse(localStorage.getItem("userInfo"));
                                //     console.log(user);
                                //     const config = {
                                //         headers: { authorization: `Bearer ${user.token}` }
                                //     };

                                //     const bodyParameters = {
                                //         ...user,
                                //     };

                                //     const a = await axios.get(
                                //         { url: '/api/users/reservation', data: bodyParameters },
                                //         config
                                //     );
                                //     console.log(a);
                                // }