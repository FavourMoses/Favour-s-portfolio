import './project.css';
import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Pcomp = ({className, picture, head, soa1, soa2, soa3, soa4, para, git, link, direction}) => {
    return (
      <div className={className}>
      {/* style={{flexDirection: direction}}> */}
        <div>
          <img
            className="project1"
            data-aos={soa1}
            data-aos-duration={soa2}
            src={picture}
          ></img>
        </div>
        <div className="projectdiv3" data-aos={soa3} data-aos-duration={soa4}>
          <p className="projectpara">{head}</p>
          <p className='ppara'>{para}</p>
          <div className="picons">
            <a href={git}>
              <FiGithub />
            </a>
            <a href={link}>
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>
      </div>
    );
}
 
Pcomp.propTypes = {
  picture: PropTypes.string,
  head: PropTypes.string,
  soa1: PropTypes.string,
  soa2: PropTypes.string,
  soa3: PropTypes.string,
  soa4: PropTypes.string,
  para: PropTypes.string,
  git: PropTypes.node,
  link: PropTypes.string,
  className: PropTypes.string,
};
export default Pcomp;