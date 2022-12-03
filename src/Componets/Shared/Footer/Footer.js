import React from 'react';
import './Footer.css'
import logo from '../../../images/fot-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faEnvelope, faPhoneVolume, faMapMarkedAlt, faMapMarker } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <section>
            <div className='footer-section'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <Link to='/'>
                                    <img src={logo} alt="footer logo" className='img-fluid' style={{ height: '40px' }} />
                                </Link>
                                <p className='text-light mt-3 mb-3'>This is open to everyone every day and provides primary health care and cutting-edge medicine in a central location</p>
                                <ul className='d-flex align-items-center justify-content-between w-50'>
                                    <li><Link to="#"><FontAwesomeIcon icon={faFacebook} className='text-light fs-4' /></Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faTwitter} className='text-light fs-4' /></Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} className='text-light fs-4' /></Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faInstagram} className='text-light fs-4' /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <h3 className='text-light mb-3 fs-4 fw-bold'>Explore</h3>
                                <div className="fotMenu2">
                                    <li><Link to="#">Doctors</Link></li>
                                    <li><Link to="#">Services</Link></li>
                                    <li><Link to="#">appointmet</Link></li>
                                    <li><Link to="#">serial</Link></li>
                                    <li><Link to="#">carieer</Link></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <h3 className='text-light mb-3 fs-4 fw-bold'>Useful Link</h3>
                                <div className="fotMenu2">
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Open Source Agreements</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">notice</Link></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <div className="footer-social">
                                    <h3 className='text-light mb-3 fs-4 fw-bold'>Book an appointment</h3>
                                    <h6 className='text-light'>The Doctorate staff members are
                                        well trained professionals.</h6>
                                </div>
                                <div className="call-client mt-3">
                                    <h6 className='text-light'><FontAwesomeIcon icon={faMapMarker} className='me-2' />24A Kingston NC 28202, USA.</h6>
                                    <h6 className='text-light mt-2 mb-2'><FontAwesomeIcon icon={faEnvelope} className='me-2' />
                                        support@doctorate.com</h6>
                                    <h6 className='text-light'><FontAwesomeIcon icon={faPhoneVolume} className='me-2' />(+22) 123 - 4567 - 900</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright text-center">
                    <p className='text-light'>©{date} Doctorate. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;