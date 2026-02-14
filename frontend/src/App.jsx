import {Routes, Route,useLocation} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";

import { Toaster } from "react-hot-toast";
import AdminLayout from "./pages/admin/AdminLayout";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import AdminLogin from "./pages/admin/AdminLogin";
import AddService from "./pages/admin/AddService";
import AllServices from "./pages/admin/AllServices";

const App = () => {
  const { admin } = useContext(AppContext);
  const adminPath = useLocation().pathname.includes("admin");  
  return (
    <div>
      <Toaster />
      {!adminPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/admin" element={admin ? <AdminLayout /> : <AdminLogin />}>
        <Route path="add-service" element={admin ? <AddService /> : <AdminLogin />} />
        <Route path="services" element={admin ? <AllServices /> : <AdminLogin />} />
        </Route>
      </Routes>
      {!adminPath && <Footer />}
      </div>
  )
}
export default App