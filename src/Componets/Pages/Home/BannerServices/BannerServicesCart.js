import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Zoom } from 'react-reveal';

const BannerServicesCart = ({ service }) => {
    const { title, logo, des } = service;
    return (
        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <Zoom>
                <div className="text-center p-2 shadow-sm rounded">
                    <FontAwesomeIcon icon={logo} className='fs-2' />
                    <h5 className='fw-bold mb-2 mt-2'>{title}</h5>
                    <h6>{des}</h6>
                </div>
            </Zoom>
        </div>
    );
};

export default BannerServicesCart;