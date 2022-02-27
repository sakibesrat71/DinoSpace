import bg from "./user.jpg";
import user from "./user.png";
import "../userType.css";
import restaurantImage from "./restaurant.png";
const UserSignUp = () => {
    return ( 
        <div className="userSignUp">
            <img className="bgImg" src="bgImg"/>
            <a href="/SignUpAsRestaurant">
            <img className="icon" src={restaurantImage}/>
            </a>
            <a href="/SignUp">
            <img className="icon" src={user}/>
            </a>
        </div>
     );
}
 
export default UserSignUp;