import Logo from "./Logo";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* col-1  */}
            <div>
                <Logo />
                <p>Our family-centered approach to healthcare ensure that each member of your family receives personalized attention</p>
                <div>
                <FaLinkedin />
                <FaYoutube />
                <FaTwitter />
                <FaSquareInstagram />
                <FaFacebookSquare />
                </div>
            </div>
            
            {/* col-2  */}
            <div>
                <p>Quick Links</p>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
            </div>

            {/* col-3  */}
            <div></div>

            {/* col-4  */}
            <div></div>

        </div>
    );
};

export default Footer;