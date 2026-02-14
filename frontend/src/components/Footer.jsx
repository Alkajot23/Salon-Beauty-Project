import { assets } from "../assets/assets.js";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-10">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-16 border-b border-white/10 pb-12">

        {/* LOGO + MOTTO */}
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" />
            </svg>

            <img src={assets.logo} alt="logo" className="w-28" />

            <div className="text-xs tracking-widest uppercase opacity-80 font-thin">
              It is a high time to take care of your beauty
            </div>
          </div>

          <p className="mt-6 text-sm opacity-70 leading-relaxed font-thin">
            SALON PIĘKNOŚCI — premium beauty experience designed for modern women.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-6 text-sm tracking-wide">
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="/pricing" className="hover:text-primary transition uppercase tracking-widest font-thin">
                CENY
              </a>
            </li>
            <li>
              <a href="/salons" className="hover:text-primary transition uppercase tracking-widest font-thin">
                SALONY
              </a>
            </li>
          </ul>
        </div>

{/* LEGAL */}
<div className="flex flex-col gap-6 text-sm tracking-wide">
  <ul className="space-y-2 font-tight">

    <li>
      <a
        href="#"
        className="
          uppercase tracking-widest font-thin text-gray-400
          transition-all duration-300 ease-out
          hover:text-gray-200 hover:translate-x-1
        "
      >
        POLITYKA PRYWATNOŚCI
      </a>
    </li>

    <li>
      <a
        href="#"
        className="
          uppercase tracking-widest font-thin text-gray-400
          transition-all duration-300 ease-out
          hover:text-gray-200 hover:translate-x-1
        "
      >
        REGULAMIN SKLEPU INTERNETOWEGO
      </a>
    </li>

    <li>
      <a
        href="#"
        className="
          uppercase tracking-widest font-thin text-gray-400
          transition-all duration-300 ease-out
          hover:text-gray-200 hover:translate-x-1
        "
      >
        VOUCHERY UPOMINKOWE
      </a>
    </li>

    <li>
      <a
        href="#"
        className="
          uppercase tracking-widest font-thin text-gray-400
          transition-all duration-300 ease-out
          hover:text-gray-200 hover:translate-x-1
        "
      >
        BLOG
      </a>
    </li>

  </ul>
</div>

{/* CONTACT */}
<div className="flex flex-col gap-6 text-sm tracking-wide">
  <ul className="space-y-4 font-tight">

    {/* DZIAŁ JAKOŚCI */}
    <li>
      <p
        className="
          uppercase tracking-widest font-thin text-gray-400
          transition-all duration-300 ease-out
          hover:text-gray-200 
        "
      >
        DZIAŁ JAKOŚCI
      </p>

      <span className="block font-normal text-base text-white normal-case hover:text-primary transition">
        @alicja
      </span>
    </li>

    {/* MARKETING */}
    <li>
      <p
        className="
          uppercase tracking-widest font-thin text-gray-400
          transition-all duration-300 ease-out
          hover:text-gray-200
        "
      >
        MARKETING
      </p>

      <span className="block font-normal text-base text-white normal-case hover:text-primary transition">
        @slawek
      </span>
    </li>

  </ul>
</div>

      </div>

      {/* BOTTOM SECTION */}
<div className="grid grid-cols-3 items-center mt-10 text-xs opacity-70 w-full">

  {/* LEWA STRONA */}
  <p className="justify-self-start uppercase tracking-widest font-thin">
    © 2026 LOGO | WSZELKIE PRAWA ZASTRZEŻONE
  </p>

  {/* ŚRODEK — PRZYCISK */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="justify-self-center uppercase tracking-widest hover:text-primary transition font-thin"
  >
    POWRÓT DO GÓRY STRONY
  </button>

  {/* PRAWA STRONA */}
  <p className="justify-self-end opacity-50 uppercase tracking-widest font-thin">
    WEBDESIGNED BY ALICJAJANEK
  </p>

</div>

    </footer>
  );
}