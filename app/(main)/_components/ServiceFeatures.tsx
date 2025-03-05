import { FaBroom, FaWifi, FaShuttleVan } from "react-icons/fa";

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaBroom size={40} className="text-yellow-700" />,
      title: "Room Cleaning",
      description:
        "Enjoy a spotless and well-maintained space with our professional cleaning services, ensuring a fresh and comfortable stay.",
    },
    {
      icon: <FaWifi size={40} className="text-yellow-700" />,
      title: "Room Wifi",
      description:
        "Stay connected with high-speed Wi-Fi available in every room, providing seamless internet access for work and entertainment.",
    },
    {
      icon: <FaShuttleVan size={40} className="text-yellow-700" />,
      title: "Pickup & Drop",
      description:
        "Convenient airport and city transfers for a hassle-free travel experience, ensuring you reach your destination safely and on time.",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-10 py-10 md:py-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-3"
        >
          <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm max-w-xs">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
