import { FaMicroscope, FaRegHospital, FaUserMd } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";


const cards = [
    {
      icon: <FaMicroscope />,
      title: "Modern Laboratory",
      des: "Our laboratory is equipped with the latest diagnostic equipment and automation systems ensuring precise.",
    },
    {
      icon: <FaUserMd />,
      title: "Experienced  Doctors",
      des: "We take pride in our team of experienced who are at the forefront of  delivering exceptional.",
    },
  
   
    {
      icon: <MdMedicalServices />,
      title: "Trusted Treatment",
      des: "Receive reliable and compassionate medical care anytime, day or night.",
    },
    
  ];
const TopServices = () => {


    return (
        <div>
            <div className="px-4 md:px-6 text-center">
            <h2 className='uppercase font-bold mb-4 text-primaryDark'>Top Services</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
          We Are a Progressive Medical Clinic
        </h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 md:px-6">
    {cards.map((card, idx) => {
        return <div key={idx} className="relative group p-6 border overflow-hidden rounded-md">
          <span className="w-full h-0 absolute right-0 bottom-0 bg-primaryTeal/30 -z-10 group-hover:w-full group-hover:h-full  transition-all duration-700"></span>
            <span className=" text-5xl text-primaryTeal">{card.icon}</span>
            <h4 className="text-xl font-medium pt-2 pb-1">{card.title}</h4>
            <p className="text-gray-600">{card.des}</p>
            
        </div>
    })}
  </div>;
        </div>
    );
};

export default TopServices;