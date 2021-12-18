import { Form, Button, Container, Row, Col} from "react-bootstrap";
import img from "./login2.jpg";
import "../css/auth.css";
import userIcon from "./user.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const LogIn = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <Container>
            <Row>
                <Col>
                <div data-aos="fade-right" className="fade">
                <div className="left">
                    <img className="bg" src={img} />
                </div>
            </div>
                </Col>
                <Col>
                <div className="right">
                <Form>
                    <div data-aos="fade-up" className="fade">
                        <div className="text-center">
                            <img className="user" src={userIcon} />
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
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