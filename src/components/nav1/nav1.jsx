import './nav1.css'
import star from "../../assets/star.png"
const Nav1 = () => {
    return (
      <div className="parent">
        <div className='div1'>
          <img className="l2" src={star} alt="flower" />
          <h1>Moses Favour</h1>
        </div>
        <nav>
          <ul className='list'>
            <li>Home</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className='btn1'>Let&apos;s Talk</button>
      </div>
    );
}
 
export default Nav1;