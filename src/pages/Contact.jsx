import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <div className="bg-primaryTeal/40 h-64 flex items-center justify-center">
        <div className="text-center">
          <h4 className="text-5xl font-medium">Contact Us</h4>
          <p className="flex items-center justify-center gap-2 mt-3 text-lg">
            <Link to="/">Home </Link>
            <IoIosArrowForward />
            <span> Contact Us</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
