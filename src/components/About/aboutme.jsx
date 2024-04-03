import './about.css'
import carton from '../../assets/carton.png';
import { BiSolidBullseye } from "react-icons/bi";
import { IoBagCheck } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
const About = () => {
    return (
      <div>
        <h1 className="abouthead">About me</h1>
        <div className="aboutdiv1" data-aos="fade-up">
          <img className="cart" data-aos="flip-left" data-aos-duration= "2000"src={carton}></img>
          <div>
            <p className="abouttext">
              My name is Favour, and I specialize in crafting dynamic digital
              experiences for the web. Residing in Abuja, Nigeria, I am a self
              taught Frontend developer with a background in mathematics. I find
              great satisfaction in leveraging code to breathe life into ideas
              online. My primary objective revolves around creating engaging and
              accessible digital interfaces. My journey into web development
              commenced in 2019, driven by an innate curiosity about the digital
              landscape. Since then, I have honed my skills and embarked on
              numerous projects spanning various technologies.
            </p>
            <div className="aboutedu">
              <p>
                <RiGraduationCapFill className="abouticon" />
                Education
              </p>
              <p>
                <IoBagCheck className="abouticon2" />
                Work
              </p>
            </div>
            <div className="divp">
              <div className="aboutline">
                <BiSolidBullseye className='eye'/>
                <p className="aboutpara1">
                  Mathematics Education <br />
                  Delta State University
                </p>
                <BiSolidBullseye className='eye' />
                <p className="aboutpara1">
                  Web Development Bootcamp <br />
                  App Brewery (Udemy)
                </p>
                <BiSolidBullseye className='eye'/>
                <p className="aboutpara1">
                  Nextjs by Example <br />
                  App Brewery (Udemy)
                </p>
                <BiSolidBullseye className='eye'/> 
                <p className="aboutparahack">Hackathon</p>
                <BiSolidBullseye className='eye'/>
                <BiSolidBullseye className='eye'/>
              </div>

              <div className="aboutline">
                <BiSolidBullseye className='eye'/>
                <p className="aboutpara1">
                  Frontend developer <br />
                  Velhect ltd <br /> <br /> April 2019 - August 2023
                </p>
                <BiSolidBullseye className='eye'/>
                <p className="aboutpara1">
                  Frontend developer <br />
                  Mogrex ltd <br /> <br /> June 2022 - present
                </p>
                <BiSolidBullseye className='eye'/>
                <BiSolidBullseye className='eye'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default About;