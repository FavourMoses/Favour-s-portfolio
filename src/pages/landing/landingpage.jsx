import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";
// import "./land";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    // <h3 data-aos="fade-up" data-aos-duration="3000">
    //   Welcome to my website
    // </h3>
    <div className="container">
      <div className="content" data-aos="fade-up" data-aos-duration="3000">
        <h2>Welcome to my website</h2>
        <h2>Welcome to my website</h2>
      </div>
    </div>
  );
};

export default Landing;
