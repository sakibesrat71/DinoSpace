import dinoLogo from './images/dinoLogo.png';

const navbar = () => {
    return (

        <div className="navbar">
            <img class="dinologo" src={dinoLogo} />
            <h1>DinoSpace</h1>
            <div className="links">
                <a href="/SignUp">Sign Up</a>
                <a href="/LogIn">Sign In</a>
                <a href="/">Contact Us</a>
            </div>
        </div>
    );
}

export default navbar;
