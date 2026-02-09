import { useContext, useState } from "react";
import { AppContext } from '../context/AppContext'
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
    const {user,setUser}=useContext(AppContext)
    const location=useLocation()
    const [showMenu, setShowMenu]=useState(false)
    const [mobileOpen, setMobileOpen]=useState(false)

    const isActive=(path)=>location.pathname ===path

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm px-4 sm:px-8 md:px-16 lg:px-32 flex items-center justify-between py-4 transition-all duration-300">
  <div>
    <Link to="/">
          <img src={assets.logo} alt="logo" className="w-28" />    </Link>
  </div>
          <ul className="hidden md:flex items-center space-x-12 uppercase">
          <Link
            to="/"
            className={`${
              isActive("/") ? "text-primary" : "text-white"
            } hover:text-primary duration-300 transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`${
              isActive("/services") ? "text-primary" : "text-white"
            } hover:text-primary duration-300 transition-colors`}
          >
            Usługi
          </Link>
          <Link
            to="/products"
            className={`${
              isActive("/products") ? "text-primary" : "text-white"
            } hover:text-primary duration-300 transition-colors`}
          >
            Salony
          </Link>
          <Link
            to="/contact"
            className={`${
              isActive("/contact") ? "text-primary" : "text-white"
            } hover:text-primary duration-300 transition-colors`}
          >
            Kontakt
          </Link>

        </ul>
    {/* Right Section */}
    <div className="flex items-center gap-4 relative">
        {/* Cart */}
        <Link to="/cart" className="relative">
          <BsCart2 className="text-white w-6 h-6 sm:w-7 sm:h-7" />
          <span
            className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold
                 w-5 h-5 flex items-center justify-center rounded-full"
          >
       
          </span>
        </Link>
    </div>
  </nav>
  )
}

export default Navbar