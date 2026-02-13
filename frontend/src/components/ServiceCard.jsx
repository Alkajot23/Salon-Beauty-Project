import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
const ServiceCard = ({ service }) => {
  const { navigate } = useContext(AppContext);
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
      style={{ backgroundImage: `url(${assets.service_bg})` }}
      className="w-[350px] h-[400px] bg-center bg-cover rounded-md relative px-4"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-60 rounded-md"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full px-6">
        <div className="text-secondary text-6xl">{service.icon}</div>
        <h1 className="text-2xl font-bold text-white">{service.name}</h1>
        <p className="text-white text-center">{service.desc}</p>
        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
          className="bg-secondary text-white px-12 py-3 hover:bg-black hover:border hover:border-white rounded cursor-pointer"
        >
          Umów się
        </motion.button>
      </div>
    </motion.div>
  );
};
export default ServiceCard;
