import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
   <div class="flex min-h-screen items-center justify-center bg-gray-50 p-4 pt-10 transition-colors duration-300 dark:bg-gray-900">
  <div class="flex w-full transform flex-col overflow-hidden bg-white shadow-xl transition-transform duration-300 md:flex-row dark:bg-gray-800">
     <div class="w-full p-8 sm:p-10 md:w-1/2 lg:p-12">
      <div class="mb-6 flex items-center">
        <svg class="mr-3 h-10 w-10 text-purple-600 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        <h1 class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-3xl font-bold text-transparent dark:from-purple-400 dark:to-blue-300">Skontaktuj się z Nami</h1>
      </div>

<p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
  Chętnie odpowiemy na Twoje pytania.<br />
  Zarezerwuj wizytę już dziś!
</p>

      <form class="space-y-5">
        <div>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
            <input type="text" placeholder="Imię" class="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-purple-400" />
          </div>
        </div>
        <div>
  <div class="relative">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 5a2 2 0 012-2h1.28a2 2 0 011.94 1.47l.52 1.73a2 2 0 01-.45 1.9l-.7.7a16 16 0 006.36 6.36l.7-.7a2 2 0 011.9-.45l1.73.52A2 2 0 0119 17.72V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V7a2 2 0 012-2z" />
      </svg>
    </div>
    <input
      type="tel"
      placeholder="+48 000 000 000"
      class="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-purple-400"
    />
  </div>
</div>

        <div>

          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input type="email" placeholder="Email" class="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-purple-400" />
          </div>
        </div>

        <div>

          <select class="w-full appearance-none rounded-lg border border-gray-300 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:1.5rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-purple-400">
              <option value="">Wybierz usługę</option>
              <option value="haircut">Strzyżenie i stylizacja</option>
              <option value="coloring">Koloryzacja</option>
              <option value="facial">Zabieg na twarz</option>
              <option value="manicure">Manicure i pedicure</option>
              <option value="makeup">Makijaż okolicznościowy</option>
              <option value="spa">Zabieg SPA</option>
              <option value="other">Inne</option>
          </select>
        </div>

        <div>

          <div class="relative">
            <div class="absolute top-3 left-3">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
              </svg>
            </div>
            <textarea rows="4" placeholder="Opisz, czym jesteś zainteresowana..." class="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-purple-400"></textarea>
          </div>
        </div>

        <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-purple-700 hover:to-blue-600 hover:shadow-lg">
          Umów się
        </button>
      </form>
    </div>

    <div class="flex w-full flex-col justify-center bg-gradient-to-br from-purple-500 to-blue-600 p-8 text-white sm:p-10 md:w-1/2 lg:p-12">
    

      <div class="space-y-6">
        <div class="flex items-start">
          <div class="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Odwiedź Nas</h3>
            <p class="opacity-90">ul. Biernata 43<br />Lublin, 20-465</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Zadzwoń do Nas</h3>
            <p class="opacity-90">+48 000 000 000<br />Pon - Sob, 9:00 - 20:00</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Napisz do Nas</h3>
            <p class="opacity-90">kontakt@salonbeauty.pl</p>
          </div>
        </div>

        <div class="flex items-start">
  <div class="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-12a.75.75 0 00-1.5 0v4.25c0 .414.336.75.75.75h3a.75.75 0 000-1.5H10.75V6z" clip-rule="evenodd" />
    </svg>
  </div>
  <div>
    <h3 class="text-lg font-semibold">Godziny Pracy</h3>
    <p class="opacity-90">
      Pon–Pt: 9:00–19:00<br />
      Sobota: 9:00–14:00
    </p>
  </div>
</div>

      </div>
              {/* Map Placeholder */}
{/* MAPA FULL WIDTH */}
<div className="w-full mt-10">
  <h3 class="text-lg font-semibold">Znajdź Nas na Mapie</h3>

  <div className="w-full h-64 rounded-xl overflow-hidden">
    <div className="bg-gradient-to-br from-pink-200 to-purple-200 w-full h-full flex items-center justify-center">
      <div className="text-center">
        <MapPin size={48} className="text-purple-600 mx-auto mb-2" />
        <p className="text-gray-700 font-medium">Widok mapy</p>
        <p className="text-gray-600 text-sm">Lokalizacja salonu</p>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</div>
  );
};

export default Contact;