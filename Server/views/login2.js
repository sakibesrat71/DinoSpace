import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import img from "./login2.jpg";
import "./auth.css";
// import userIcon from "./user.png";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { useEffect } from 'react';

const LogIn = () => {
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
                        <Form action='/login2' method="post">
                            <div data-aos="fade-up" className="fade">
                                <div className="text-center">
                                    <img className="user" src={userIcon} />
                                </div>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Control type="username" placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <div className="mb-3">
                                    <a href="#">Forgot password?</a>
                                </div>
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

export default LogIn;