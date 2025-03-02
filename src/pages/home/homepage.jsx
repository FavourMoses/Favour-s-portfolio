import About from "../../components/About/aboutme";
import { ContactUs } from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Homecomp from "../../components/home/home";
import Project from "../../components/project/project";
import Skills from "../../components/skills/skills";
import "./homepage.css";
const Home = () => {
  return (
    <>
      
      <Homecomp/>
      <Project/>
      <About/>
      <Skills/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default Home;
