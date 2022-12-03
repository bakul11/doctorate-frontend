import React from 'react';
import { Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const ServicesCart = ({ singleService }) => {
    const { title, logo, des, _id } = singleService;

    const navigate = useNavigate();
    const handleServiceDetails = () => {
        navigate(`/service-details/${_id}`)
    }
    return (
        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <Zoom>
                <div className="shadow-lg rounded p-2 text-center" onClick={handleServiceDetails} style={{ cursor: 'pointer' }}>
                    <img src={logo} alt={title} className='img-fluid' style={{ height: '80px' }} />
                    <h5 className='fw-bold mb-2'>{title}</h5>
                    <h6>{des}</h6>
                </div>
            </Zoom>
        </div>
    );
};

export default ServicesCart;