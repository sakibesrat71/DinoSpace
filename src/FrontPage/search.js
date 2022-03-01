import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';
import {Form, FormControl, Button} from 'react-bootstrap';


const Searchbar = (props) => {

  const [restaurentDetails,setRestaurentDetails] = useState([])

   //  const {state,dispatch} = useContext(UserContext)


     const fetchUsers = async (query)=>{
       const queryObj = {
           query:query
          };
       try{
         console.log(query);
        const response = await axios.post('post/search', queryObj);
        setRestaurentDetails(response.data);
        console.log(response);
      }catch(error){
        console.log(error);
      }

     }
    return (
      <div className="form">
        <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>fetchUsers(e.target.value)}
        />
        {/* <Button variant="outline-success">Search</Button> */}
        <ul>
          {
            restaurentDetails.map(restaurent=>(
              <li key={restaurent._id}>
              {props.restaurent.name}
              <Link to={`/restaurant/${restaurent._id}`}>View Details</Link>
              </li>
            ))
          }
          </ul>
      </Form> 
      </div>
        
      );
}
 
export default Searchbar;