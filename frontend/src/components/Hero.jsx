import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { assets } from "../assets/assets.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
const Hero = () => {
  const { navigate } = useContext(AppContext);
  const slides = [
    {
      image: assets.hair,
      title: "Miejsce, Gdzie Włosy Zyskują Nowy Charakter",
      subtitle:
        "Doświadcz profesjonalnej pielęgnacji włosów i precyzyjnych cięć, które podkreślą Twój styl.",
      buttonText: "Zobacz usługi",
      link: "/products",
    },
    {
      image: assets.manicure,
      title: "Miejsce, Gdzie Styl Spotyka Perfekcję",
      subtitle:
        "Profesjonalny manicure, modne stylizacje i najwyższej jakości produkty, dzięki którym Twoje dłonie zawsze prezentują się doskonale.",
      buttonText: "Zobacz usługi",
      link: "/services",
    },
        {
      image: assets.face,
      title: "Miejsce, Gdzie Naturalne Piękno Rozkwita",
      subtitle:
        "Zadbaj o zdrową, promienną cerę dzięki profesjonalnym zabiegom, kosmetykom premium i indywidualnemu podejściu do Twoich potrzeb.",
      buttonText: "Zobacz usługi",
      link: "/services",
    },
  ];
  return (
    <div className=" w-full h-[90vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-center bg-cover relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center text-white px-4 sm:px-8 max-w-3xl"
              >
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 uppercase leading-relaxed">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl mb-6">{slide.subtitle}</p>
                <motion.button
                  onClick={() => navigate(`${slide.link}`)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" bg-primary px-10 py-3 rounded-md text-white font-semibold hover:bg-primary/80 transition-all cursor-pointer"
                >
                  {slide.buttonText}
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Hero;