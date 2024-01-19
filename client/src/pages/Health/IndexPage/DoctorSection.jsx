import './styles.css'
import logo from '../../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faPills,faBookSkull,faUserInjured} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DeathRequests from './Components/DeathRequests/DeathRequests';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import DocCommonCase from './Components/DocCommonCase/DocCommonCase';
import DocSpecialCase from './Components/DocSpecialCase/DocSpecialCase';


const DoctorSection = () => {
      const[nav,setNav] = useState('Death Requests');
      return (
            <section className="home-main">
                  <div className="sidenav">
                        <img src={logo} alt="" />
                        <h4>Doctor</h4>
                        <div className='nav-container'>
                              
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Death Requests') && 'nav-active')} 
                              onClick={()=>{setNav('Death Requests')}}>
                                    <FontAwesomeIcon icon={faBookSkull} className='nav-link-Icon' />Death Registration Requests
                              </div>
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Special Requests') && 'nav-active')} 
                              onClick={()=>{setNav('Special Requests')}}>
                                    <FontAwesomeIcon icon={faUserInjured} className='nav-link-Icon' />Special Cases Registration Requests
                              </div>
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Common Cases') && 'nav-active')} 
                              onClick={()=>{setNav('Common Cases')}}>
                                    <FontAwesomeIcon icon={faPills} className='nav-link-Icon' />Common Cases
                              </div>
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'View Details') && 'nav-active')} 
                              onClick={()=>{setNav('View Details')}}>
                                    <FontAwesomeIcon icon={faListUl} className='nav-link-Icon' />View Details
                              </div>
                              
                        </div>
                  </div>
                  <div className='form-container'>
                              {(nav === 'Special Requests') && <DocSpecialCase/>}
                              {(nav === 'Death Requests') && <DeathRequests/>}
                              {(nav === 'Common Cases') && <DocCommonCase/>}
                              {(nav === 'View Details') && <ViewDetails/>}
                  </div>
            </section>
      )
}
export default DoctorSection