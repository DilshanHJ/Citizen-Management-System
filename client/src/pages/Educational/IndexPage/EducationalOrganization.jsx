import logo from '../../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faListUl,} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import EnterDetails from './Components/EnterDetails/EnterDetails';
import ViewDetails from './Components/ViewDetails/ViewDetails';



const EducationalOrganization = () => {
      const[nav,setNav] = useState('Enter');
      return (
            <section className="home-main">
                  <div className="sidenav">
                        <img src={logo} alt="" />
                        <h4>Educational Organization</h4>
                        <div className='nav-container'>
                              
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Enter') && 'nav-active')} 
                              onClick={()=>{setNav('Enter')}}>
                                    <FontAwesomeIcon icon={faClipboardCheck} className='nav-link-Icon' />Enter Details
                              </div>
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'View') && 'nav-active')} 
                              onClick={()=>{setNav('View')}}>
                                    <FontAwesomeIcon icon={faListUl} className='nav-link-Icon' />View Details
                              </div>
                              
                        </div>
                  </div>
                  <div className='form-container'>
                              {(nav === 'Enter') && <EnterDetails/>}
                              {(nav === 'View') && <ViewDetails/>}
                  </div>
            </section>
      )
}
export default EducationalOrganization