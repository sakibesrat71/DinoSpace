import { Form, Button, Container, Row, Col } from "react-bootstrap";
import img from "./login5.jpg";
import "../css/auth.css";
import userIcon from "./user.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const SignUp = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <div data-aos="fade-right" className="fade">
                        <div className="left">
                            <img className="bg" src={img} />
                        </div>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                    <div className="justify-content-md-center">
                        <Form>
                            <div data-aos="fade-up" className="fade">
                                <div className="text-center">
                                    <img className="user" src={userIcon} />
                                </div>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Enter Mobile Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Repeat Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;