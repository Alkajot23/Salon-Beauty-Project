import { assets } from "../assets/assets.js";
import { GiComb, GiRazor } from "react-icons/gi";
import { RiScissors2Line } from "react-icons/ri";

const WhatWeDo = () => {
  const whatWeDoData = [
    {
 
      name: "Strzyżenie / Stylizacje / Fryzury",
      img: assets.hair3,
    },
            {
     
      name: "Koloryzacja",
      img: assets.hair4,
    },
            {
     
      name: "Pielęgnacja włosów",
      img: assets.hair2,
    },
    {
    
      name: "Zabiegi pielęgnacyjne",
      img: assets.face2,
    },
    {
    
      name: "Manicure / Pedicure",
      img: assets.manicure2,
    },
    {
     
      name: "Makijaż / Brwi / Rzęsy",
      img: assets.eyebrow3,
    },

  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
<h1 className="text-center uppercase text-3xl md:text-4xl font-bold mx-auto">
  Usługi które wykonujemy
</h1>

<div className="hidden md:block mt-2 w-50 h-1 bg-primary mx-auto"></div>
      <div className="flex items-center gap-6 h-[400px] w-full max-w-7xl mt-10 mx-auto">
        {whatWeDoData.map((item, index) => (
          <div
            key={index}
            className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={item.img}
              alt={item.name}
            />

            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h1 className="text-3xl">{item.name}</h1>
              <p className="text-sm whitespace-pre-line">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhatWeDo;