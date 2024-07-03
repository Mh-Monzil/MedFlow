import { Link } from "react-router-dom";
import { RiFirstAidKitFill } from "react-icons/ri";
import { MdOutlineEventAvailable } from "react-icons/md";

const AppointmentBox = () => {
    return (
        <div className="bg-primaryDark">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-evenly">
            <RiFirstAidKitFill />
            <div>
                <h2>Open For Appointments</h2>
                <p>We are delighted to announce that out doors are open, and we are now accepting appointments to serve you better.</p>
            </div>
            <Link>
                <span>Make Appointment</span>
                <MdOutlineEventAvailable />
            </Link>
            </div>
        </div>
    );
};

export default AppointmentBox;