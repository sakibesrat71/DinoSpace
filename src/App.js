import './index.css';
import dine from './dine2.jpg';
import Navbar from './navbar'
import Restaurant from './restaurants';
import {Form, FormControl, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
        <img src={dine} />
        <p className='moto'>NEVER WAIT TO EAT AGAIN</p>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>   
      <Restaurant/>
    </div>
        
  );
}

export default App;
