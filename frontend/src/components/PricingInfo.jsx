import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { haircutsData } from "../assets/assets";
const PricingInfo = () => {
  const { navigate } = useContext(AppContext);

  return (
    <div className="py-12 flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Pricing Section */}
      <div
        className="relative w-full md:w-[40%]  bg-cover bg-center flex items-center justify-center text-center px-6 "
        style={{ backgroundImage: `url(${assets.pricing1})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Content Layer */}
        <div className="relative z-10 text-white w-full py-4">
          <h2 className="text-4xl font-bold mb-4">Nasze uczciwe ceny</h2>
          <div>
            {haircutsData.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex items-start justify-between gap-2  w-full p-2"
                >
                  <div className="flex flex-col  gap-2">
                    <h3 className="text-xl font-semibold text-start">
                      {item.name}
                    </h3>
                    <p className="text-sm text-start">{item.desc}</p>
                  </div>
                  <div>
                    <p className="text-lg">${item.price}</p>
                  </div>
                </div>
                <hr className="w-full  text-primary " />
              </>
            ))}
          </div>
        </div>
      </div>
      <div
        className="relative w-full md:w-[40%]  bg-cover bg-center flex items-center justify-center text-center px-6 "
        style={{ backgroundImage: `url(${assets.pricing2})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

      </div>
    </div>
  );
};
export default PricingInfo;
