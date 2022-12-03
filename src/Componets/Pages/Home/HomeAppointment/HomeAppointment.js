import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Slide } from 'react-reveal';
import sub from '../../../../images/sub-sambol.svg'
import './HomeAppointment.css'



const servicesData = [
    {
        name: '20+ years of excellence'
    },
    {
        name: 'Multi Speciality Hospital'
    },
    {
        name: '24 Hours Medical Service'
    },
    {
        name: 'Professional Experts'
    }
]

const HomeAppointment = () => {

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className="row gy-5">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    <Slide right>
                        <div className="homeApp-left">
                            <div className="appointment-double text-center mb-5">
                                <div className='logo1-sec'>
                                    <img src="https://cdn.hswstatic.com/gif/becoming-doctor.jpg" alt="logo" className='img-fluid' />
                                </div>
                                <div className='logo2-sec'>
                                    <img src="https://nationaltoday.com/wp-content/uploads/2020/03/Doctors-1.jpg" alt="logo" className='img-fluid'/>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12 col-12">
                    <Slide left>
                        <div className="doc-title mb-5">
                            <p><span><img src={sub} alt="logo" /></span> ABOUT US <span><img src={sub} alt="logo" /></span></p>
                            <h3 className='fs-2 pb-2 pt-2' style={{ fontWeight: '700' }}>Welcome To Doctorate<br />
                                Central Hospital</h3>
                            <h6 className='mb-2'>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily.</h6>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum</h6>
                        </div>
                        <div className="home-right p-4" style={{ background: '#07306E', borderRadius: '10px' }}>
                            <div className="row gy-4">
                                {
                                    servicesData?.map(service => {
                                        return (
                                            <>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className="extra-services">
                                                        <h5 className='text-light'><FontAwesomeIcon icon={faCheckCircle} className='me-2' />{service?.name}</h5>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Slide>
                </div>

            </div>
        </div>
    );
};

export default HomeAppointment;