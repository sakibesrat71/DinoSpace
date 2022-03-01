import { Card } from "react-bootstrap";
import Search from '../FrontPage/search.js';
import "../css/result.css";
import interiorImg from "./images/login.jpg";

const SearchResult = () => {
    return (
        <div className="search">
        <Card className="result">
            <Card.Img className="interior" variant="top" src={interiorImg} />
            <Card.Body>
                <Card.Title>Chillox</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                {/* <Link to="/Restaurant">View Details</Link> */}

            </Card.Body>
        </Card>
        </div>
    );
}

export default SearchResult;