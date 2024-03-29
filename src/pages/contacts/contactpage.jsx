import { ContactUs } from '../../components/contact/contact';
import Footer from '../../components/footer/footer';
import Nav1 from '../../components/nav1/nav1';
import './contactpage.css';
const Contactpage = () => {
    return (
      <div>
        <Nav1 />
        <ContactUs />
        <Footer/>
      </div>
    );
    
};
 
export default Contactpage;