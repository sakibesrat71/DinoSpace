import { Card, Button, Container, Row, Col } from "react-bootstrap";
import img from "./login5.jpg";
import img2 from "./bg.jpg";
import "../css/profile.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Profile = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div className="background">
            <img className="bg" src={img2} />
            <div className="profile">
            <div data-aos="fade-up" className="fade">
                
                    <Card className="profileCard">
                        <div className="cardImg">
                            <Card.Img class="rounded-circle" variant="top" src={img} />

                        </div>

                        <Card.Title className="name">MD. Ahnaf Akib</Card.Title>

                        <Card.Body>

                            <div className="mobile">
                                <Container>
                                    <Row>
                                        <Col className="mobile" md={5}> <Card.Text>Mobile:</Card.Text></Col>
                                        <Col className="mobile" md={5}> <Card.Text>01849665655</Card.Text></Col>
                                    </Row>
                                    <Row>
                                        <Col className="mobile" md={5}> <Card.Text>Address:</Card.Text></Col>
                                        <Col className="mobile" md={5}> <Card.Text className="address">272/3, badiuzzaman road, dhaka-cantonment, Dhaka-1206</Card.Text></Col>
                                    </Row>
                                </Container>
                            </div>
                            <br />
                            <Button className="info" variant="info">Reservation History</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default Profile;