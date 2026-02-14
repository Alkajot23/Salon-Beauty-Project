import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "motion/react";
import { FaCut, FaRegSmileBeam, FaSpa, FaTint, FaLeaf } from "react-icons/fa";
import { GiComb  } from "react-icons/gi";
const AllServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      icon: <FaCut />,
      name: "Strzyżenie / Stylizacje / Fryzury",
      desc: "Profesjonalne strzyżenie i stylizacja dopasowana do kształtu twarzy oraz indywidualnego stylu.",
      price: "125",
    },
    {
      id: 2,
      icon: <FaTint />,
      name: "Koloryzacja",
      desc: "Indywidualnie dobrana koloryzacja z użyciem wysokiej jakości produktów pielęgnujących.",
      price: "225",
    },
    {
      id: 3,
      icon: <GiComb />,
      name: "Pielęgnacja włosów",
      desc: "Regenerujące zabiegi pielęgnacyjne przywracające włosom blask, miękkość i zdrowy wygląd.",
      price: "150",
    },
    {
      id: 4,
      icon: <FaLeaf />,
      name: "Zabiegi pielęgnacyjne",
      desc: "Profesjonalne zabiegi na twarz i ciało, które odświeżają, nawilżają i poprawiają kondycję skóry.",
      price: "180",
    },
    {
      id: 5,
      icon: <FaSpa />,
      name: "Manicure / Pedicure",
      desc: "Stylowy manicure i pedicure z dbałością o każdy detal oraz zdrowie płytki paznokcia.",
      price: "120",
    },
    {
      id: 6,
      icon: <FaRegSmileBeam />,
      name: "Makijaż / Brwi / Rzęsy",
      desc: "Profesjonalny makijaż oraz stylizacja brwi i rzęs podkreślająca naturalne piękno.",
      price: "160",
    },
  ]);
  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
    toast.success("service deleted successfully");
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">All Services</h1>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 font-semibold">
            Dodaj usługę
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Usługa
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Cena
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Opis
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Akcja
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <motion.tr
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
          
                        {service.icon}
                        <span className="font-semibold text-gray-800">
                          {service.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-800 font-semibold">
                      {service.price} zł
                    </td>

                    <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">
                      {service.desc}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleDelete(service.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold text-sm"
                        >
                          Usuń
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default AllServices;
