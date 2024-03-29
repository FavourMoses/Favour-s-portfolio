import './skills.css';
import PropTypes from "prop-types";
const Skillcomp = ({head,para}) => {
    return ( 
        <div>

        <div className="section">
          
          <div className="row">
            <div className="column">
              <div className="card">
                
                <h3 className='hd'>{head}</h3>
                <p className='pr'>
                  {para}
                </p>
              </div>
            </div>
            </div>
            </div>
            </div>
     );
}
 
Skillcomp.propTypes = {
  para: PropTypes.string,
  head: PropTypes.string,
};
export default Skillcomp;