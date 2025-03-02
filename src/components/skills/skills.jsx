import Skillcomp from './skcomp';
import './skills.css';
const Skills = () => {
    return (
      <div className='al'>
        <h1 className="skillh">My Skills</h1>
        <p className="skillh2">
          My Special Skills For Your Business Development
        </p>
        <Skillcomp
          head="Frontend developer"
          para="Here, we explore the significance of frontend development in
           enhancing user experience and driving engagement"
        />

        <Skillcomp
          head="Business Branding"
          para="Ultimately, investing in your brand can yield significant returns by fostering 
          customer loyalty, driving sales, and enabling long-term growth. It's a strategic asset
           that requires careful cultivation and maintenance, but when done right, it can be a
            powerful driver of business success."
        />

        <Skillcomp
          head="Debugging and Testing"
          para="The ability to debug code efficiently and perform testing 
          across different devices and browsers to ensure functionality and compatibility is highly essential."
        />
      </div>
    );
}
 
export default Skills;