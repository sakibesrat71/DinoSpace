import '../css/index.css';
import { Card, CardGroup, Button } from 'react-bootstrap';
import dine from './images/dine.jpg'
import dine3 from './images/dine3.jpg'
import dine4 from './images/dine4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const restaurant = () => {
    return (
        <div className="restaurant">
            <h4>Popular restaurants around your area</h4>
            <Carousel>
                <Carousel.Item>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={dine} />
                            <Card.Body>
                                <Card.Title>Chillox</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                {/* <Button onClick={()=> {this.props.history.replace('../restaurant/navbar.js')}} variant="primary">View Details</Button> */}
                                <Link to="/Restaurant">View Details</Link>

                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={dine3} />
                            <Card.Body>
                                <Card.Title>SAO 21</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link to="/Restaurant">View Details</Link>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={dine4} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link to="/Restaurant">View Details</Link>

                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={dine} />
                            <Card.Body>
                                <Card.Title>Amari</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link to="/Restaurant">View Details</Link>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={dine3} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link to="/Restaurant">View Details</Link>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={dine4} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link to="/Restaurant">View Details</Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={dine} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link to="/Restaurant">View Details</Link>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={dine3} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link to="/Restaurant">View Details</Link>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={dine4} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link to="/Restaurant">View Details</Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default restaurant;