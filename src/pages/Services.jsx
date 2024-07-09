import { IoIosCheckmarkCircle } from "react-icons/io";

const Services = () => {
  const cardInfo = [
    {
      title: "Cardiology Electrophysiology",
      description:
        "Expert consultations with board-certified cardiologists to assess heart health, discuss symptoms, and develop personalized treatment.",
      services: [
        "Cardiac Electrophysiology",
        "Cardiac Catheterization",
        "Arrhythmia Management",
      ],
    },
    {
      title: "Cardiology Electrophysiology",
      description:
        "Expert consultations with board-certified cardiologists to assess heart health, discuss symptoms, and develop personalized treatment.",
      services: [
        "Cardiac Electrophysiology",
        "Cardiac Catheterization",
        "Arrhythmia Management",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="text-center">
        <p className="font-semibold text-primaryTeal ">Our Services</p>
        <h3 className="text-3xl md:text-4xl font-bold py-2 capitalize max-w-[500px] mx-auto">
          providing medical care for the sickest in our community
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {cardInfo.map((info, idx) => {
          return (
            <div
              key={idx}
              className="max-w-96 mx-auto shadow-sm shadow-gray-300 hover:shadow-primaryTeal p-4 rounded-sm transition-all duration-300 ease-in-out"
            >
              <h4 className="text-lg font-bold">{info.title}</h4>
              <p className="text-gray-600 py-2.5">{info.description}</p>
              <div className="space-y-2">
                {info.services.map((service, idx) => (
                  <p key={idx} className="flex items-center gap-2">
                    <IoIosCheckmarkCircle className="text-primaryTeal text-xl" />
                    <span>{service}</span>
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
