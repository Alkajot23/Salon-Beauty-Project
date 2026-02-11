import { useContext} from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import { assets } from "../assets/assets";
const AboutUs = () => {

  const [expanded, setExpanded] = useState(false);
  const { navigate } = useContext(AppContext);
  return (
    <div className=" w-full mx-auto py-12">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-5 ">

<div className="md:col-span-2 flex">
  <img
    src={assets.onas}
    alt="about1"
    className="w-full max-h-[600px] object-cover"
  />
</div>

  <div className="flex flex-col items-center justify-center">
    <h1 className="text-center md:text-start uppercase text-3xl md:text-4xl font-bold">
      O nas
    </h1>
    <div className="hidden md:block mt-2 w-16 h-1 bg-primary"></div>

    <div className="mt-8 flex flex-col gap-6 px-2">
<div
  className={`relative transition-all duration-500 ${
    expanded
      ? "h-[300px] overflow-y-auto"
      : "max-h-[160px] overflow-hidden"
  }`}
>
    <p className="text-slate-700 leading-relaxed">
      Witamy w miejscu, w którym piękno spotyka się z profesjonalizmem, a relaks staje się codziennym rytuałem. Nasz salon powstał z myślą o osobach, które cenią wysoką jakość usług, indywidualne podejście i atmosferę sprzyjającą pełnemu odprężeniu.
      <br /><br />
      Tworzymy przestrzeń, w której możesz zadbać o siebie kompleksowo – od pielęgnacji włosów, przez stylizację paznokci, po zabiegi kosmetologiczne i makijaż. Nasi specjaliści pracują w oparciu o sprawdzone techniki, nowoczesne metody i produkty renomowanych marek, aby każdy efekt był nie tylko piękny, ale i trwały.
      <br /><br />
      Stawiamy na rozwój i nieustannie podążamy za trendami. Regularnie szkolimy się w kraju i za granicą, dzięki czemu możemy oferować najnowsze procedury, innowacyjne terapie oraz stylizacje zgodne z aktualną modą. Nasz zespół to doświadczeni profesjonaliści, którzy potrafią sprostać nawet najbardziej wymagającym oczekiwaniom.
      <br /><br />
      Dbamy o to, aby każda wizyta była wyjątkowa – niezależnie od tego, czy wybierasz szybki zabieg, czy kompleksową metamorfozę. Wygodna lokalizacja, pięknie zaprojektowane wnętrza i przyjazna atmosfera sprawiają, że chętnie do nas wracasz.
      <br /><br />
      Jesteśmy tu po to, aby podkreślić Twoje naturalne piękno, zadbać o Twój komfort i sprawić, że poczujesz się pewnie i wyjątkowo.
    </p>

        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>

<span
  onClick={() => setExpanded(!expanded)}
  className="self-center text-xs uppercase tracking-wider font-semibold text-primary cursor-pointer hover:opacity-70 transition"

>
  {expanded ? "" : "dowiedz się więcej"}
</span>
    </div>

    {/* <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      onClick={() => navigate("/contact")}
      className="flex items-center justify-center gap-2 cursor-pointer px-10 py-3 mt-8 border border-primary bg-white text-black hover:bg-primary hover:text-white hover:border-none"
    >
      Contact Us <MoveRight />
    </motion.button> */}
  </div>

</div>
    </div>
  );
};
export default AboutUs;
