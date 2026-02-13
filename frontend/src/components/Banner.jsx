import { assets } from "../assets/assets";
import { MoveRight } from "lucide-react";
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${assets.banner2})` }}
      className="bg-cover bg-center h-[500px]"
    >
<div className="max-w-md w-full mx-auto flex flex-col items-center justify-center gap-3">
<h1 className="text-white text-2xl md:text-5xl font-bold text-center pt-25 whitespace-nowrap">
  Oferta promocyjna
</h1>

  <h5 className="mt-4 text-primary text-3xl font-bold text-center">
    -15% dla nowych klientów
  </h5>

  <p className="text-center text-white mt-3">
    Skorzystaj z wyjątkowej zniżki na pierwszą rezerwację w naszym salonie.
    To idealna okazja, aby poznać nasze usługi i doświadczyć jakości,
    z której jesteśmy znani.
  </p>
<button
  className="
    flex items-center justify-center
    px-10 py-3
    border border-primary
    text-white
    bg-transparent
    transition-all duration-500
    hover:bg-secondary hover:text-black
  "
>
  Zarezerwuj <MoveRight />
</button>
</div>
    </div>
  );
};
export default Banner;
