import { Form, Button, Container, Row, Col } from "react-bootstrap";
import img from "./login4.jpg";
import "../css/auth.css";
import userIcon from "./user.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useState } from "react";

const SignUp = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    const[user, setUser] = useState({
        name:"",email:"",phone:"",pass:"",rpass:""
    });

    let name, value;

    const handleInputs = (e) =>{
        console.log(e);
        name= e.target.name;
        value= e.target.value;

        setUser({...user, [name]:value});
    }
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
                                    <Form.Control type="text" name="name" placeholder="Enter Name" id="name" value={user.name} onChange={handleInputs}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Enter Mobile Number" name="phone" id="phone" value={user.phone} onChange={handleInputs}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" name="email" id="email" value={user.email} onChange={handleInputs} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" name="pass" id="pass" value={user.pass} onChange={handleInputs} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Repeat Password" name="rpass" id="rpass" value={user.rpass} onChange={handleInputs} />
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