import { Form, Button, Container, Row, Col } from "react-bootstrap";
import img from "./login2.jpg";
import Navbar from "../FrontPage/navbar.js"
import dinoLogo from './dinoLogo.png';
import "../css/profile.css";
import "../css/auth.css";
import userIcon from "./dino.jpg";
import img3 from "./bg5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading"
import { useHistory } from "react-router-dom";
const LogIn = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const history = useHistory();

    const submitHandler = async (e) => {

        e.preventDefault();
        try {
            const config = {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    "Content-type": "application/json"
                },
                withCredentials: true,
            }

            setLoading(true)

            const { data } = await axios.post('api/users/login', {
                email,
                password
            }, config);

            console.log(data);
            localStorage.setItem('token', data.token);
            setLoading(false);
            alert('Login Successful');
            window.location.href = '/';

        } catch (error) {
            setLoading(false)
            setError(error.response.data.message);
            alert("Invalid Email Or Passowrd");
        }
    };




    // const userAuthenticated = () => {
    //     headers: {
    //         "x-access-token": localStorage.getItem("token")
    //     }
    // }
    return (

        <div className="background">
            {/* <Navbar2 /> */}
            <img className="bg" src={img3} />
            <a href="/" className='navlogo'>
                <div data-aos="fade-right" className="fade">
                    <img className="dinologo" src={dinoLogo} />
                </div>
            </a>

            <div className="links2">
                <a href="/SignUp">Sign Up</a>
                <a href="/LogIn">Sign In</a>
                <a href="/Profile">Profile</a> n
            </div>



            <div className="profile">
                <div data-aos="zoom-in-up" className="fade">

                    <div className="justify-content-md-center">
                        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                        {loading && <Loading />}
                        <Form onSubmit={submitHandler}>
                            <div data-aos="fade-up" className="fade">
                                <div className="text-center">
                                    <img className="user" src={userIcon} />
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" name="pass" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group> */}
                                <div className="mb-3">
                                    <a href="#"><p className="hudai">Forgot password?</p></a>
                                </div>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <br />
                                <p className="emnei">Or sign in using</p>
                                {/* <i class="bi bi-facebook"></i> */}
                                <a href="http://localhost:3000/auth/facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>

        //     <Container>
        //         <Row>
        //             <Navbar/>
        //         </Row>
        //         <Row>
        //             <Col md={6} sm={12}>
        //                 <div data-aos="fade-right" className="fade">
        //                     <div className="left">
        //                         <img className="bg" src={img} />
        //                     </div>
        //                 </div>
        //             </Col>
        //             <Col md={6} sm={12}>


        //             </Col>
        //         </Row>
        //     </Container>
    );
}

export default LogIn;