import bg from "./user.jpg";
import user from "./user.png";
import "../userType.css";
import restaurantImage from "./restaurant.png";
const UserSignIn = () => {
    return ( 
        <div className="user">
            <img className="bgImg" src="bgImg"/>
            <a href="/LogInAsRestaurant">
            <img className="icon" src={restaurantImage}/>
            </a>
            <a href="/LogIn">
            <img className="icon" src={user}/>
            </a>
        </div>
     );
}
 
export default UserSignIn;