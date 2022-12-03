import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const TestimoinalCart = ({ test }) => {
    const { name, photo, des, rating } = test;

    return (
        <div className='shadow-lg p-2 text-center position-relative'>
            <img src={photo} alt="logo" className='img-fluid rounded-pill' style={{ height: '50px', width: '50px' }} />
            <h5 className='text-capitalize fw-bold fs-6 mt-2 mb-2'>{name}</h5>
            <h5 className='text-capitalize fw-bold mt-2 mb-2 position-absolute start-0 top-0' style={{ fontSize: '70px' }}>“</h5>
            <h6>Client</h6>
            <div className="rating">
                {
                    rating === 1 ?
                        <>
                            <FontAwesomeIcon icon={faStar} className='text-warning' />
                            <FontAwesomeIcon icon={faStar} className='text-warning' />
                            <FontAwesomeIcon icon={faStar} className='text-warning' />
                            <FontAwesomeIcon icon={faStar} className='text-warning' />
                            <FontAwesomeIcon icon={faStar} />
                        </>
                        : rating === 2 ? <>
                            <FontAwesomeIcon icon={faStar} className='text-warning' />
                            <FontAwesomeIcon icon={faStar} className='text-warning' />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </> : ''
                }
            </div>
            <p className='pt-2'>{des.length > 100 ? des.slice(0, 200) : des}</p>
        </div>
    );
};

export default TestimoinalCart;