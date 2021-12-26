import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from "react-bootstrap";
const Nav_info = () => {
    return (
        <div className="navbar">
            <Navbar sticky="top" bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Overview</Nav.Link>
                        <Nav.Link href="#">Photos</Nav.Link>
                        <Nav.Link href="#">Menu</Nav.Link>
                        <Nav.Link href="#">Reviews</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Nav_info;