import logo from '../../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartCrack, faListUl, faPerson} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Divorce from './Components/Divorce/Divorce';
import Marriage from './Components/Marriage/Marriage';
import Personal from './Components/Personal/Personal';
import ViewDetails from './Components/ViewDetails/ViewDetails';


const RegistrarSection = () => {
      const[nav,setNav] = useState('Personal');
      return (
            <section className="home-main">
                  <div className="sidenav">
                        <img src={logo} alt="" />
                        <h4>Registrar</h4>
                        <div className='nav-container'>
                              
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Personal') && 'nav-active')} 
                              onClick={()=>{setNav('Personal')}}>
                                    <FontAwesomeIcon icon={faPerson} className='nav-link-Icon' />Personal
                              </div>

                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Marriage') && 'nav-active')} 
                              onClick={()=>{setNav('Marriage')}}>
                                    <FontAwesomeIcon icon={faHeart} className='nav-link-Icon' />Marriage
                              </div>

                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Divorce') && 'nav-active')} 
                              onClick={()=>{setNav('Divorce')}}>
                                    <FontAwesomeIcon icon={faHeartCrack} className='nav-link-Icon' />Divorce
                              </div>
                              
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'View') && 'nav-active')}
                              onClick={()=>{setNav('View')}}>
                                    <FontAwesomeIcon icon={faListUl} className='nav-link-Icon' />View Details
                              </div>
                        </div>
                  </div>
                  <div className='form-container'>
                              {(nav === 'Personal') && <Personal/>}
                              {(nav === 'Marriage') && <Marriage/>}
                              {(nav === 'Divorce') && <Divorce/>}
                              {(nav === 'View') && <ViewDetails/>}
                  </div>
            </section>
      )
}
export default RegistrarSection