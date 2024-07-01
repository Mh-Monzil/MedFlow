import { Link } from "react-router-dom";


const MedicalServices = () => {

const services = [
    {
        icon: "eye",
        title: "eye care",
        des: "text",
        path: "/"
    },
    {
        icon: "checkup",
        title: "medical checkup",
        des: "text",
        path: "/"
    },
    {
        icon: "dental",
        title: "dental care",
        des: "text",
        path: "/"
    },
    {
        icon: "lab service",
        title: "laboratory service",
        des: "text",
        path: "/"
    },
    {
        icon: "patient",
        title: "patient centered",
        des: "text",
        path: "/"
    },
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