import Nav1 from '../nav1/nav1';
import './home.css';
import down from '../../assets/down.png';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
// import bgc_portfolio from '../../assets/bgc_portfolio.png';
const Homecomp = () => {
    return (
      <div>
        <section>
          <div className="homediv1">
            {/* <div className="homediv1">
          <img src={bgc_portfolio}></img>
          <h2>hhhh</h2>
        </div>
        <div className="parent1"> */}
            <Nav1 />
            <br />
            <hr id="homehr"></hr>
            <div className="homediv2">
              <h2>Hi, I&apos;m Favour</h2>
              <br />
              <p>
                I&apos;m a Frontend Developer passionate about building
                exceptional digital <br />
                experiences. I love writing code that solves problems on the
                internet for different <br />
                niches and industries.
              </p>
              <button className="homebtn">Resume</button>
            </div>
            {/* </div> */}

            <div className='homeside'>
              <img id="down" src={down}></img>
              <br />
              <div className='homeicons'>
                <FiGithub />
                <FaLinkedinIn />
                <SiIndeed />
                <AiOutlineMail />
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
 
export default Homecomp;