import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Slide } from 'react-reveal';
import './HeroSection.css'
import BannerServices from '../BannerServices/BannerServices';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className='hero-main'>
            <div className='hero-sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Slide left>
                                <div className="header-title" style={{ paddingTop: '100px' }}>
                                    <h1 className='fw-bold'>Exceptional Medical <br /> Specialty Healthcare</h1>
                                    <p className='mt-2 mb-2'>This is open to everyone every day and provides primary health care and cutting-edge medicine in a central location</p>
                                    <Link to='/appointment'>
                                        <button className="btn btn-danger mt-4 text-uppercase fw-bold" style={{ borderRadius: '10px', padding: '10px 20px' }}>Get Appointment<FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button>
                                    </Link>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============Add Hero Services============= */}
            <div className="banner-services container shadow-lg">
                <BannerServices />
            </div>
        </div>
    );
};

export default HeroSection;