
import logo from '../../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faListUl,} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import AddWorkExperience from './Components/AddWorkExperience/AddWorkExperience';
import ViewDetails from './Components/ViewDetails/ViewDetails';


const Organization = () => {
      const[nav,setNav] = useState('Work Experience');
      return (
            <section className="home-main">
                  <div className="sidenav">
                        <img src={logo} alt="" />
                        <h4>Organization</h4>
                        <div className='nav-container'>
                              
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'Work Experience') && 'nav-active')} 
                              onClick={()=>{setNav('Work Experience')}}>
                                    <FontAwesomeIcon icon={faClipboardCheck} className='nav-link-Icon' />Add Work Experience
                              </div>
                              <div 
                              className={'sidenav-link text-body ' +((nav === 'View Details') && 'nav-active')} 
                              onClick={()=>{setNav('View Details')}}>
                                    <FontAwesomeIcon icon={faListUl} className='nav-link-Icon' />View Details
                              </div>
                              
                        </div>
                  </div>
                  <div className='form-container'>
                              {(nav === 'Work Experience') && <AddWorkExperience/>}
                              {(nav === 'View Details') && <ViewDetails/>}
                  </div>
            </section>
      )
}
export default Organization