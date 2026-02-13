import { useContext, useState } from "react";
import { useRef, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { haircutsData, hairExtensionsData,coloringData,manicureData, hairCareData,pedicureData,nailExtensionsData,nailsExtrasData} from "../assets/assets";
import { motion } from "motion/react";
import { FaCut, FaRegSmileBeam, FaSpa, FaTint, FaLeaf } from "react-icons/fa";

const hairServices = [
  "Strzyżenie / Stylizacje / Fryzury",
  "Koloryzacja",
  "Pielęgnacja włosów",
];

const hairLengths = [
  "5 - 15 cm",
  "15 - 25 cm (nad ramionami, kwadrat, bob)",
  "25 - 35 cm (poniżej barków/powyżej łopatek)",
  "35 - 50 cm (poniżej łopatek/do pasa)",
  "50 - 65 cm (poniżej talii/do dolnej części pleców)"
];

const Pricing = () => {
  const { navigate } = useContext(AppContext);
const [selectedService, setSelectedService] = useState("Strzyżenie / Stylizacje / Fryzury");
  const [selectedLength, setSelectedLength] = useState("5 - 15 cm");
  const [openService, setOpenService] = useState(false);
  const [openLength, setOpenLength] = useState(false);
  const serviceRef = useRef(null);
const lengthRef = useRef(null);
const [selectedBookings, setSelectedBookings] = useState([]);
useEffect(() => {
  const handleClickOutside = (e) => {
    if (serviceRef.current && !serviceRef.current.contains(e.target)) {
      setOpenService(false);
    }
    if (lengthRef.current && !lengthRef.current.contains(e.target)) {
      setOpenLength(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
  const dropdownServices = [
    { name: "Strzyżenie / Stylizacje / Fryzury", img: assets.hair3 },
    { name: "Koloryzacja", img: assets.hair4 },
    { name: "Pielęgnacja włosów", img: assets.hair2 },
    { name: "Zabiegi pielęgnacyjne", img: assets.face2 },
    { name: "Manicure / Pedicure", img: assets.manicure2 },
    { name: "Makijaż / Brwi / Rzęsy", img: assets.eyebrow3 },
  ];
const servicesMap = {
  "Strzyżenie / Stylizacje / Fryzury": [
    { title: "Strzyżenie / Stylizacje / Fryzury", items: haircutsData },
    { title: "Przedłużanie włosów", items: hairExtensionsData }
  ],

  "Koloryzacja": [
    { title: "Koloryzacja", items: coloringData }
  ],

  "Pielęgnacja włosów": [
    { title: "Pielęgnacja włosów", items: hairCareData }
  ],

  "Manicure / Pedicure": [{
    title: "Manicure",
    items: manicureData
  },
  {
    title: "Pedicure",
    items: pedicureData
  },
  {
    title: "Przedłużanie paznokci",
    items: nailExtensionsData
  },
  {
    title: "Dodatki",
    items: nailsExtrasData
  }
],

  "Zabiegi pielęgnacyjne": [],
  "Makijaż / Brwi / Rzęsy": []
};

const currentPricingData = servicesMap[selectedService] || [];
const addBooking = (item) => {
  setSelectedBookings((prev) => [
    ...prev,
    { ...item, _id: crypto.randomUUID() }
  ]);

}; const removeBooking = (index) => {
  setSelectedBookings((prev) => prev.filter((_, i) => i !== index));
};
return (
  <div className="flex min-h-screen items-start justify-center bg-[#f5f5f5] p-6 pt-18 transition-colors duration-300 dark:bg-[#111]">

    {/* GŁÓWNY PANEL */}
    <div className="flex w-full max-w-7xl transform flex-col bg-white shadow-xl md:flex-row relative dark:bg-[#1a1a1a] border border-[#e8e8e8] dark:border-[#333]">

      {/* LEWA KOLUMNA — DROPDOWNY + CENY */}
      <div className="w-full p-10 md:w-2/3 flex flex-col gap-10">

        {/* TYTUŁ */}
        <h1 className="text-primary font-bold text-5xl text-left">
          Ceny Usług
        </h1>

        {/* DROPDOWNY */}
<div className="w-full p-6 bg-white dark:bg-primary shadow border border-gray-200 dark:border-primary">
  <div className="flex flex-col md:flex-row gap-6">

{/* CUSTOM DROPDOWN 1 */}
<div ref={serviceRef} className="relative z-[999] w-full">

  {/* BUTTON OTWIERAJĄCY */}
  <div
    onClick={() => setOpenService((prev) => !prev)}
    className="w-full cursor-pointer border-b-2 border-gray-300 dark:border-white/60 
    bg-transparent text-gray-900 dark:text-white py-3 px-2 flex justify-between items-center"
  >
    <span>{selectedService}</span>
    <FaCut className="text-gray-500 dark:text-white" />
  </div>

  {/* LISTA OPCJI */}
  {openService && (
<ul className="absolute left-0 right-0 mt-1 bg-white dark:bg-primary border border-gray-300 
dark:border-white/40 shadow-lg z-[9999] overflow-visible animate-fadeIn">
      {dropdownServices.map((service, index) => (
        <li
          key={index}
          onClick={() => {
            setSelectedService(service.name);
            setOpenService(false);
          }}
          className="px-4 py-3 cursor-pointer text-gray-900 dark:text-white 
          hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
        >
          {service.name}
        </li>
      ))}
    </ul>
  )}
</div>

{/* DROPDOWN 2 */}
{hairServices.includes(selectedService) && (
  <div ref={lengthRef} className="relative z-[999] w-full">

    {/* BUTTON OTWIERAJĄCY */}
    <div
      onClick={() => setOpenLength((prev) => !prev)}
      className="w-full cursor-pointer border-b-2 border-gray-300 dark:border-white/60 
      bg-transparent text-gray-900 dark:text-white py-3 px-2 flex justify-between items-center"
    >
      <span>{selectedLength}</span>
      <FaTint className="text-gray-500 dark:text-white" />
    </div>

    {/* LISTA OPCJI */}
    {openLength && (
      <ul className="absolute left-0 right-0 mt-1 bg-white dark:bg-primary border border-gray-300 
      dark:border-white/40 shadow-lg z-[9999] overflow-visible animate-fadeIn">
        {hairLengths.map((length, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedLength(length);
              setOpenLength(false);
            }}
            className="px-4 py-3 cursor-pointer text-gray-900 dark:text-white 
            hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
          >
            {length}
          </li>
        ))}
      </ul>
    )}
  </div>
)}
    
  </div>
</div>

{/* SEKCJA CEN */}
<div
  className="relative w-full bg-cover bg-center flex items-center justify-center text-center px-6 shadow border border-gray-200 dark:border-gray-700"
  style={{ backgroundImage: `url(${assets.pricing1})` }}
>
  <div className="absolute inset-0 bg-black/80"></div>
  <div className="relative z-10 text-white w-full py-4">
    <div className="space-y-10">

      {currentPricingData.map((category, catIndex) => (
        <div key={catIndex}>

          {/* NAGŁÓWEK PODKATEGORII */}
          <h3 className="text-3xl font-bold text-left mb-4">
            {category.title}
          </h3>

          {/* LISTA USŁUG */}
          {category.items.map((item, index) => (
            <div key={index}>
              <div className="flex items-start justify-between gap-2 w-full p-2">
                <h4 className="text-xl font-semibold text-start">
                  {item.name}
                </h4>

                <div className="flex items-center gap-3">
                  <p className="text-lg">{item.price} zł</p>
                  <button
                    onClick={() => addBooking(item)}
                    className="text-white text-2xl font-bold hover:text-primary transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <hr className="w-full border-gray-600" />
            </div>
          ))}

        </div>
      ))}

    </div>
  </div>
</div> </div>
{/* PRAWA KOLUMNA — FORMULARZ UMÓW SIĘ */}

<div
  className="
    w-full 
    md:w-1/3 
    md:sticky md:top-19 md:h-[calc(100vh-80px)]
    overflow-y-auto 
    bg-[#f0f0f0] p-10 border-l
  "
>

  <h2 className="text-3xl font-bold mb-6 text-[#111] text-center tracking-wide">
    Umów się
  </h2>

  <form className="space-y-1">

    {/* Imię */}
<div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg
      className="h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  </div>

  {/* pionowa cienka kreska */}
  <div className="absolute inset-y-0 left-10 w-px bg-gray-300"></div>

  <input
    type="text"
    placeholder="Imię"
    className="w-full bg-white text-[#111] pl-14 pr-4 py-2 
    border-none outline-none 
    focus:ring-0 focus:outline-none"
  />
</div>

    {/* Telefon */}
    <div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg
      className="h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h1.28a2 2 0 011.94 1.47l.52 1.73a2 2 0 01-.45 1.9l-.7.7a16 16 0 006.36 6.36l.7-.7a2 2 0 011.9-.45l1.73.52A2 2 0 0119 17.72V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V7a2 2 0 012-2z"
      />
    </svg>
  </div>

  <div className="absolute inset-y-0 left-10 w-px bg-gray-300"></div>

  <input
    type="tel"
    placeholder="+48 000 000 000"
    className="w-full bg-white text-[#111] pl-14 pr-4 py-2 
    border-none outline-none 
    focus:ring-0 focus:outline-none"
  />
</div>
    {/* Email */}
    <div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg
      className="h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  </div>

  <div className="absolute inset-y-0 left-10 w-px bg-gray-300"></div>

  <input
    type="email"
    placeholder="Email"
    className="w-full bg-white text-[#111] pl-14 pr-4 py-2 
    border-none outline-none 
    focus:ring-0 focus:outline-none"
  />
</div>
<div className="h-6"></div>

{/* Wybrane usługi */}
{selectedBookings.length > 0 && (
  <div className="mb-4 space-y-1">
    {selectedBookings.map((item, index) => (
      <div
        key={item._id}
        className="relative bg-white py-2 pl-10 pr-4 flex items-center"
      >
        {/* Ikona rozwijania */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Kreska za ikoną */}
        <div className="absolute inset-y-0 left-8 w-px bg-gray-300"></div>

{/* Treść responsywna */}
<div className="flex items-center w-full ml-3 min-w-0">

  {/* Nazwa — elastyczna i responsywna */}
<span
  className="
    text-[#111] font-medium
    flex-1 min-w-0
    whitespace-normal break-normal
  "
>
  {item.name}
</span>

  {/* Kreska między nazwą a ceną */}
  <div className="h-5 w-px bg-gray-300 mx-3 flex-none"></div>

  {/* Cena */}
  <span className="text-[#111] font-medium flex-none whitespace-nowrap">
    {item.price} zł
  </span>

  {/* Kreska między ceną a X */}
  <div className="h-5 w-px bg-gray-300 mx-3 flex-none"></div>

  {/* X */}
  <button
    onClick={() => removeBooking(index)}
    className="text-[#111] text-xl font-bold hover:text-primary transition flex-none"
  >
    ×
  </button>
</div>
      </div>
    ))}
  </div>
)}

    {/* Checkbox */}
    <label className="flex items-start gap-3 text-sm text-[#333]">
      <input type="checkbox" className="mt-1 h-4 w-4 border-gray-400 text-primary" />
      <span>
        Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką prywatności
      </span>
    </label>

    {/* Przycisk */}
    <button
      type="submit"
      className="w-full bg-primary text-white py-3 font-semibold tracking-wide shadow-md 
      transition-all duration-300 hover:bg-black"
    >
      {selectedBookings.length > 0
        ? `Umów się ${selectedBookings.reduce((sum, item) => sum + item.price, 0)} zł`
        : "Umów się"}
    </button>

  </form>
</div>

    </div>
  </div>
);
};
export default Pricing;
