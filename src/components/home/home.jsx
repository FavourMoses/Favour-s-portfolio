import Nav1 from "../nav1/nav1";
import "./home.css";
import down from "../../assets/down.png";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import moses from "../../assets/moses.jpg";
// import Navbar from "../nav1/navbar";
// import { Link } from 'react-router-dom';
// import moses from '../../assets/moses.jpg';
const Homecomp = () => {
  return (
    <div>
      {/* <section> */}
        <div className="homediv1">
          <div className="homediv1">
            {/* <img src={moses}></img> */}
            {/* <h2>hhhh</h2> */}
            {/* </div> */}
            <div className="parent1">
              <Nav1 />
              {/* <Navbar/> */}
              <br />
              <hr id="homehr"></hr>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="homediv2"
              >
                <div className="divhi">
                  <h2 className="hi">Hi, I&apos;m Favour</h2>
                  <br />
                  <p className="hiPara">
                    I&apos;m a Frontend Developer passionate about building
                    exceptional digital <br />
                    experiences. I love writing code that solves problems on the
                    internet for different <br />
                    niches and industries.
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1F_p89J81ZeU9ElyLDT1KIMx5fxLH0XbI/edit?usp=sharing&ouid=111044098439149082131&rtpof=true&sd=true"
                    target="_blank"
                  >
                    <button className="homebtn">Resume</button>
                  </a>
                </div>
                <div>
                  <img id="image" src={moses}></img>
                </div>
              </div>
            </div>
          </div>

          <div
            className="fixed"
            // data-aos="fade-down"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
          >
            <div className="homeside">
              <img id="down" src={down}></img>
              <br />
              <div className="homeicons">
                <a href="https://github.com/favourMoses">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/favour-moses-7b6958283">
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://profile.indeed.com/?hl=en
                  _NG&co=NG&from=gnav-homepage&_ga=2.47604007.1284354842.1711020312-569132361.1711020312"
                >
                  <SiIndeed />
                </a>
                  {/* <a
                    href="#"
                    onClick={() =>
                      window.open("mailto:mosesfavour65@gmail.com")
                    }
                  >
                  email
                  </a> */}
                  <a href="mailto:?subject=mosesfavour65@gmail.com">
                    <AiOutlineMail />
                  </a>
                
              </div>
            </div>
          </div>
        </div>
      {/* </section> */}
      <marquee id="homemar">
        **Business website....... **Innovative Frontend Developer.......
        **Website Applications.......**Business website....... **Innovative
        Frontend Developer....... **Website Applications.......
      </marquee>
    </div>
  );
};

export default Homecomp;
