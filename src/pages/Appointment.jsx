import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div>
      <div className="bg-primaryTeal/40 h-64 flex items-center justify-center">
        <div className="text-center">
          <h4 className="text-5xl font-medium">Make Appointment</h4>
          <p className="flex items-center justify-center gap-2 mt-3 text-lg">
            <Link to="/">Home </Link>
            <IoIosArrowForward />
            <span>Appointment</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
