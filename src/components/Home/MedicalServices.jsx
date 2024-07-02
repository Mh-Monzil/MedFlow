import { Link } from "react-router-dom";
import { FaEye, FaStethoscope, FaFlask } from "react-icons/fa6";
import { FaMicroscope, FaTooth } from "react-icons/fa";

const MedicalServices = () => {

const services = [
    {
        icon: <FaEye />,
        title: "Eye Care",
        des: "Comprehensive eye examinations and advanced treatments for various eye conditions.",
        path: "/"
    },
    {
        icon: <FaStethoscope />,
        title: "Medical Checkup",
        des: "Regular health checkups to monitor and maintain your overall well-being.",
        path: "/"
    },
    {
        icon: <FaTooth />,
        title: "Dental Care",
        des: "High-quality dental services including cleanings, fillings, and preventive care.",
        path: "/"
    },
    {
        icon: <FaFlask />,
        title: "Laboratory Service",
        des: "Accurate and timely lab testing for various health conditions and diseases.",
        path: "/"
    },
    {
        icon: <FaMicroscope />,
        title: "Patient Centered",
        des: "Focused on providing personalized care tailored to each patient's unique needs.",
        path: "/"
    }
]

    return (
        <div className=" bg-teal-200/30 mt-12 md:mt-28">
            <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                <p className="uppercase text-primaryTeal font-semibold">Medical Services</p>
                <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold ">We&#39;re providing best services</h2>
                </div>

                {/* mapped services  */}
                {
                    services.map((service, idx) => {
                        return <div key={idx} className="border-2 border-gray-700 h-32">
                            <span>{service.icon}</span>
                            <h4>{service.title}</h4>
                            <p>{service.des}</p>
                            <Link to={'/'}>Read More...</Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default MedicalServices;