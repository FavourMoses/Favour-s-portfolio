import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/homepage";
import Landing from "./pages/landing/landingpage";
import Projectpage from "./pages/Projectpage/projectpage";
import Aboutpage from "./pages/aboutpage/aboutpage";
import Skillspage from "./pages/skillspage/skillspage";
import Contactpage from "./pages/contacts/contactpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project" element={<Projectpage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/skill" element={<Skillspage />} />
      <Route path="/contact" element={<Contactpage/>} />
    </Routes>
  );
}

export default App;
