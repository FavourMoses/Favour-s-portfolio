import "./footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaArrowUpLong } from "react-icons/fa6";
const Footer = () => {
    return (
      <div className="footcontainer">
        <div className="footd1">
          <i>
            Copyright <AiOutlineCopyrightCircle /> 2023
            <span className="sp">Favour.</span> All rights reserved.
          </i>
        </div>
        <div className="footd2">
          <a href="/home">Terms & Conditions</a>
          <a href="/home">Privacy Policy</a>
        </div>
        <div className="footd3">
          <a href="/home">
            <FaArrowUpLong className="cl"/>
          </a>
        </div>
      </div>
    );
}
 
export default Footer;