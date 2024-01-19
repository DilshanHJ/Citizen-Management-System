/* eslint-disable react/prop-types */
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Card = ({title,icon}) => {
  return (
    <section className='admin-link-card'>
            <div>
                  <FontAwesomeIcon icon={icon} className='admin-link-card-icon' />
                  <p className='title'>{title}</p>
            </div>
    </section>
  )
}
export default Card