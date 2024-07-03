import { Link } from "react-router-dom";


const AppointmentBox = () => {
    return (
        <div>
            <p>icon</p>
            <div>
                <h2>Open For Appointments</h2>
                <p>We are delighted to announce that out doors are open, and we are now accepting appointments to serve you better.</p>
            </div>
            <Link>
                <span>Make Appointment</span>
                <span>icon</span>
            </Link>
        </div>
    );
};

export default AppointmentBox;