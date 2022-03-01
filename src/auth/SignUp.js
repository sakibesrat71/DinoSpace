import { Form, Button, Container, Row, Col } from "react-bootstrap";
import img from "./login4.jpg";
// import {}
import "../css/auth.css";
import userIcon from "./user.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";


const SignUp = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            setLoading(true)

            const { data } = await axios.post('/api/users/registration', {
                name,
                phone,
                email,
                password,
                confirmPassword
            }, config);

            console.log(data);
            localStorage.setItem('userInfo',JSON.stringify(data));
            setLoading(false);
        } catch (error) {
            setError(error.response.data.message);
        }
    };
   
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
                        <Form onSubmit={submitHandler}>
                            <div data-aos="fade-up" className="fade">
                                <div className="text-center">
                                    <img className="user" src={userIcon} />
                                </div>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" name="name" placeholder="Enter Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Enter Mobile Number" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" name="pass" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Repeat Password" name="rpass" id="rpass" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <br/>
                                <p className="emnei">Or sign up using</p>
                                {/* <i class="bi bi-facebook"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>

                            </div>
                        </Form>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;