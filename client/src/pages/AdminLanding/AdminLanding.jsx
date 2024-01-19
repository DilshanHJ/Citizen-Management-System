import './styles.css';
import heroimage from '../../assets/hero-image.png';
import herobackimage from '../../assets/hero-back-image-3.png';
import Card from './Card/Card';
import {
      faGraduationCap,
      faScaleUnbalancedFlip,
      faHeartPulse,
      faPersonCircleCheck,
      faIdCard
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminLanding = () => {
      return (
            <main>
                  <section className='hero'>
                        <div className='hero-left'>
                              <h1> UNI LANKA</h1>
                              <h3>Sri Lanka Citizen Management System</h3>
                              <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sit voluptatem totam quis odio blanditiis cupiditate perferendis repudiandae molestiae. Nesciunt hic eaque qui et vel quis repellat doloremque commodi architecto?
                              </p>
                              <div style={{ display: 'flex', gap: '10px', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'space-evenly', minHeight: '300px', alignContent: 'space-between' }}>
                                    <Link to={'/admin/health'}>
                                          <Card icon={faHeartPulse} title={'Birth Death and Health Management'} />
                                    </Link>
                                    <Link to={'/admin/personal'}>
                                          <Card icon={faPersonCircleCheck} title={'Personal Details Management'} />
                                    </Link>
                                    <Link to={'/admin/legal'}>
                                          <Card icon={faScaleUnbalancedFlip} title={'Legal Details Management'} />
                                    </Link>
                                    <Link to={'/admin/education'}>
                                          <Card icon={faGraduationCap} title={'Educational Details Managemet'} />
                                    </Link>
                                    <Link to={'/admin/carrier'}>
                                          <Card icon={faIdCard} title={'Carrier Related Details Management'} />
                                    </Link>
                              </div>

                        </div>
                        <div className='hero-right'>
                              <img className='hero-back' src={herobackimage} alt="" />
                              <img src={heroimage} alt="" />
                        </div>
                  </section>
                  <section className='mid-sec'>
                        <h4>One unified system to manage all of of the government departments&apos; information needs including Healthcare, Legal, Administration, Labor and Education</h4>
                  </section>
                  {/* <section className='bottom-sec'>
            </section> */}

            </main>
      );
};

export default AdminLanding;
