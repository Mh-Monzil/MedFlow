import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { RiMailLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
    const contactInfo = [
        {
            icon: <SlLocationPin />,
            title: "Location",
            info: "Dhaka, Bangladesh"
        },
        {
            icon: <RiMailLine />,
            title: "Email",
            info: "medflow@gmail.com"
        },
        {
            icon: <IoCallOutline />,
            title: "Call",
            info: "+880 123456"
        },
    ]
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 mx-auto my-16">
        {
            contactInfo.map((info, idx) => {
                return <div key={idx} className="mx-auto flex flex-col items-center gap-3">
                    <span className="text-5xl text-primaryTeal">{info.icon}</span>
                    <p className="text-2xl text-gray-600 font-medium">{info.title}</p>
                    <p className="text-3xl font-bold">{info.info}</p>
                </div>
            })
        }
      </div>
    </div>
  );
};

export default Contact;
