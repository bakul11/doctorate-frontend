import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Zoom } from 'react-reveal';
import './DoctorTeamCart.css'

const DoctorTeamCart = ({ doctor }) => {
    const { name, title, photo } = doctor;

    return (
        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <Zoom>
                <div className="doctor-item text-center">
                    <div className="doc-logo">
                        <img src={photo} alt={name} className='img-fluid ' style={{ height: '277px', width: '263px' }} />
                    </div>
                    <div className="doc-detail bg-dark">
                        <h5 className='text-capitalize pb-1 text-light'>{name}</h5>
                        <p className='text-light'>{title}</p>
                    </div>
                    <div className="doc-social">
                        <ul className='d-flex align-items-center justify-content-between btn btn-danger p-3'>
                            <li><a href='https://www.facebook.com' target='_blank' className='bg-primary p-1 rounded-pill d-block d-flex align-items-center justify-content-center' style={{ height: '30px', width: '30px' }}><FontAwesomeIcon icon={faFacebook} className='text-light' /></a></li>
                            <li><a href='https://www.facebook.com' target='_blank' className='bg-primary p-1 rounded-pill d-block d-flex align-items-center justify-content-center' style={{ height: '30px', width: '30px' }}><FontAwesomeIcon icon={faTwitter} className='text-light' /></a></li>
                            <li><a href='https://www.facebook.com' target='_blank' className='bg-primary p-1 rounded-pill d-block d-flex align-items-center justify-content-center' style={{ height: '30px', width: '30px' }}><FontAwesomeIcon icon={faLinkedin} className='text-light' /></a></li>
                            <li><a href='https://www.facebook.com' target='_blank' className='bg-primary p-1 rounded-pill d-block d-flex align-items-center justify-content-center' style={{ height: '30px', width: '30px' }}><FontAwesomeIcon icon={faInstagram} className='text-light' /></a></li>
                        </ul>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default DoctorTeamCart;