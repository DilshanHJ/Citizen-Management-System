import './styles.css'
import logo from '../../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookSkull, faListUl, faPersonBreastfeeding,faPills,faUserInjured} from '@fortawesome/free-solid-svg-icons';
import BirthRegistration from './Components/BirthRegistration/BirthRegistration';
import { useState } from 'react';
import DeathRegistration from './Components/DeathRegistration/DeathRegistration';
import CommonCase from './Components/CommonCase/CommonCase';
import SpecialCases from './Components/SpecialCases/SpecialCases';
import ViewDetails from './Components/ViewDetails/ViewDetails';
const HospitalAdminSection = () => {
      const[nav,setNav] = useState('Birth Registration');
      return (
            <section className="home-main">
                  <div className="sidenav">
                        <img src={logo} alt="" />
                        <h4>Hospital Admin</h4>
                        <div className='nav-container'>
                              
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Birth Registration') && 'nav-active')} 
                              onClick={()=>{setNav('Birth Registration')}}>
                                    <FontAwesomeIcon icon={faPersonBreastfeeding} className='nav-link-Icon' />Birth Registration
                              </div>
                              
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Death Registration') && 'nav-active')} 
                              onClick={()=>{setNav('Death Registration')}}>
                                    <FontAwesomeIcon icon={faBookSkull} className='nav-link-Icon' />Death Registration
                              </div>
                              
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Common Case Admit') && 'nav-active')}
                              onClick={()=>{setNav('Common Case Admit')}}>
                                    <FontAwesomeIcon icon={faPills} className='nav-link-Icon' />Common Cases Admit
                              </div>
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Special Record') && 'nav-active')}
                              onClick={()=>{setNav('Special Record')}}>
                                    <FontAwesomeIcon icon={faUserInjured} className='nav-link-Icon' />Special Record</div>
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'View Details') && 'nav-active')} 
                              onClick={()=>{setNav('View Details')}}>
                                    <FontAwesomeIcon icon={faListUl} className='nav-link-Icon' />View Details
                              </div>
                        </div>
                  </div>
                  <div className='form-container'>
                              {(nav === 'Birth Registration') && <BirthRegistration/>}
                              {(nav === 'Death Registration') && <DeathRegistration/>}
                              {(nav === 'Common Case Admit') && <CommonCase/>}
                              {(nav === 'Special Record') && <SpecialCases/>}
                              {(nav === 'View Details') && <ViewDetails/>}
                  </div>
            </section>
      )
}
export default HospitalAdminSection