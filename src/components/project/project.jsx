import "./project.css";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.png";
// import { FiGithub } from "react-icons/fi";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Pcomp from "./pcomp";
const Project = () => {
  return (
    <div className="projectContainer">
      <h1 id="phead">My Projects</h1>

      <Pcomp
        className={`projectdiv1`}
        picture={project1}
        head="Visa Blog"
        soa1="flip-left"
        soa2="1500"
        soa3="flip-left"
        soa4="1500"
        para="Visa Blog is an archive of international site for travels which
              covers both
              countries and lounge for everyone. It was built using React, Html
              and CSS."
        git="https://github.com/FavourMoses/components-in-react"
        link="https://favy-components-in-react.netlify.app/"
      />
      <br />
      <br />
      <Pcomp
        className={`projectdiv1 direction`}
        // direction="row-reverse"
        picture={project2}
        head="IntelBox Form"
        soa1="flip-left"
        soa2="1500"
        soa3="flip-left"
        soa4="1500"
        para="This requisition form serves as a crucial tool for facilitating
          seamless procurement processes within our organization. By utilizing this
          form, teams can efficiently request the necessary resources and supplies
          It was built using React, Html and CSS."
        git="https://github.com/FavourMoses/components-in-react"
        link="https://favy-components-in-react.netlify.app/"
      />
      <br />
      <br />

      <Pcomp
        className={`projectdiv1`}
        picture={project3}
        head="Processed Food"
        soa1="flip-left"
        soa2="1500"
        soa3="flip-left"
        soa4="1500"
        para="processed foods often provide convenience, making it easier for 
        individuals with busy lifestyles to access and prepare meals quickly.
          It was built using React, Html and CSS."
        git="https://github.com/FavourMoses/components-in-react"
        link="https://favy-components-in-react.netlify.app/"
      />
    </div>
  );
};

export default Project;
