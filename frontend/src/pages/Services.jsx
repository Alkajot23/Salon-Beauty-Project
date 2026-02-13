
import { assets } from "../assets/assets.js";
import { FaCut, FaRegSmileBeam, FaSpa, FaTint, FaLeaf } from "react-icons/fa";
import { GiComb  } from "react-icons/gi";
import ServiceCard from "../components/ServiceCard.jsx";
import { motion } from "motion/react";

const Services = () => {

const servicesData = [
  {
    name: "Strzyżenie / Stylizacje / Fryzury",
    img: assets.hair3,
    icon: <FaCut />,
    desc: "Profesjonalne strzyżenie i stylizacja dopasowana do kształtu twarzy oraz indywidualnego stylu.",
    price: "125",
  },
  {
    name: "Koloryzacja",
    img: assets.hair4,
    icon: <FaTint />,
    desc: "Indywidualnie dobrana koloryzacja z użyciem wysokiej jakości produktów pielęgnujących.",
    price: "225",
  },
  {
    name: "Pielęgnacja włosów",
    img: assets.hair2,
    icon: <GiComb />,
    desc: "Regenerujące zabiegi pielęgnacyjne przywracające włosom blask, miękkość i zdrowy wygląd.",
    price: "150",
  },
  {
    name: "Zabiegi pielęgnacyjne",
    img: assets.face2,
    icon: <FaLeaf />,
    desc: "Profesjonalne zabiegi na twarz i ciało, które odświeżają, nawilżają i poprawiają kondycję skóry.",
    price: "180",
  },
  {
    name: "Manicure / Pedicure",
    img: assets.manicure2,
    icon: <FaSpa />,
    desc: "Stylowy manicure i pedicure z dbałością o każdy detal oraz zdrowie płytki paznokcia.",
    price: "120",
  },
  {
    name: "Makijaż / Brwi / Rzęsy",
    img: assets.eyebrow3,
    icon: <FaRegSmileBeam />,
    desc: "Profesjonalny makijaż oraz stylizacja brwi i rzęs podkreślająca naturalne piękno.",
    price: "160",
  },
];
  return (
    <div className="py-20 max-w-7xl mx-auto">

      {/* --- KARTY USŁUG --- */}
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;