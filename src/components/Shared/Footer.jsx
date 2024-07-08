import Logo from "./Logo";
import { FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocationPin, MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="">
      {/* col-1  */}
      <div>
        <Logo />
        <p>
          Our family-centered approach to healthcare ensure that each member of
          your family receives personalized attention
        </p>
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
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </div>

      {/* col-3  */}
      <div>
        <p>Contact Details</p>
        <p>
          <MdLocationPin />
          Dhaka, Bangladesh
        </p>
        <p>
          <RiMailSendFill />
          medflow@gmail.com
        </p>
        <p>
          <FaPhoneAlt />
          1234567890
        </p>
        <p>
          <MdOutlineAccessTimeFilled />
          8 AM - 10 PM, Monday - Saturday
        </p>
      </div>

      {/* col-4  */}
      <div>
        <p>Subscribe To Our Newsletter</p>
        <p>Stay informed and never miss out on the latest news, health tips.</p>
        <div>
            <input type="email" />
            <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
