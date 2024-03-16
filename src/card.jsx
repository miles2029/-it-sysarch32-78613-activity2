import './card.css';
import PropTypes from 'prop-types';


function Card({img,name,email}) {

   

    return (
          <div className='card'>
            <img className='card-image' src={img} alt="student picture" />
            <h3 className='student-name'>{name}</h3>
            <p className='student-email'>{email}</p>
          </div>

      
    );  
 
}


Card.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};



export default Card;


