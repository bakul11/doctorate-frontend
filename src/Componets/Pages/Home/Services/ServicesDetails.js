import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Services.css'
import sub from '../../../../images/sub-sambol.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { LightSpeed, Slide } from 'react-reveal';
import ServiceModal from './ServiceModal';

const ServicesDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    const [loadding, setLoadding] = useState(false);
    const [open, setOpen] = useState(false);
    

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    //load data
    useEffect(() => {
        fetch(`https://dortorate-project.onrender.com/service/singleService/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setService(data?.service);
                    setLoadding(false)
                }
            })
            .catch(err => {
                setLoadding(true)
            })
    }, [id, service])

    return (
        <section>
            {
                loadding ?
                    <>
                        <div className="d-flex align-items-center justify-content-center" style={{ marginTop: '100px' }}>
                            <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-success" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-danger" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-dark" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </>
                    :
                    <section>
                        <div className="service-logo-sec">
                            <LightSpeed>
                                <div className="service-details-sub">
                                    <h5 className='text-light text-center'>We are here for your care</h5>
                                    <h2 className='text-light text-center fw-bold mt-3'><img src={sub} alt="logo" /><span className='ms-2 m-2 text-light'>{service?.title}</span> <img src={sub} alt="logo" /></h2>
                                </div>
                            </LightSpeed>
                        </div>

                        <div className='container mt-5'>
                            <div className="row gy-5">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <Slide left>
                                        <div className="service-thub">
                                            <img src="https://i.ibb.co/xKZbFWC/1-6.jpg" alt="logo" className='img-fluid' style={{ borderRadius: '8px' }} />
                                        </div>
                                    </Slide>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <Slide right>
                                        <div className="service-thub-title">
                                            <img src={service?.logo} alt="logo" className='img-fluid' style={{ height: '100px' }} />
                                            <h5 className='fw-bold mt-2 mb-2 fs-4'>{service?.title}</h5>
                                            <h6>{service?.des}</h6>
                                            <h6 className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi, debitis neque quisquam voluptas nihil earum veritatis fugiat quibusdam recusandae cupiditate nam odit dolore molestias ipsum porro quas harum hic expedita commodi adipisci aut ea iusto! Labore nihil vitae, similique ipsam quam neque modi molestias rem totam laboriosam hic voluptatem.</h6>

                                            <button className="btn btn-danger mt-4 text-uppercase fw-bold" onClick={onOpenModal} style={{ borderRadius: '10px', padding: '10px 20px' }}>Book Appointment Now<FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button>
                                            <ServiceModal onCloseModal={onCloseModal} open={open} serviceName={service?.title} />
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                            <div className="about-ac mt-5">
                                <LightSpeed>
                                    <h6>As we continue navigating through the coronavirus pandemic together, we want you to know the steps we’re taking to provide you with world class care – all while keeping our patients, our caregivers, and our community safe. We can assure you that The Medical Group of South Florida is among the safest places in healthcare today. Across the country, people are putting off important and even life-threatening healthcare needs because they’re afraid of being exposed to COVID-19. We understand these concerns. The novel coronavirus is still in our communities, and it’s still contagious.</h6>
                                    <h6 className='mt-3 mb-3'>By acting quickly in the early stages of the pandemic, we’ve kept The Medical Group of South Florida a safe place. This includes:</h6>
                                    <div className="list-sec">
                                        <ul>
                                            <li className='mb-2'><FontAwesomeIcon icon={faCheckCircle} className='me-2' />Limiting visitors to our facilities.</li>
                                            <li className='mb-2'><FontAwesomeIcon icon={faCheckCircle} className='me-2' />Providing proper personal protective equipment for caregivers.</li>
                                            <li className='mb-2'><FontAwesomeIcon icon={faCheckCircle} className='me-2' />Disinfecting surfaces frequently.</li>
                                            <li className='mb-2'><FontAwesomeIcon icon={faCheckCircle} className='me-2' />Checking the temperature of everyone who walks through our doors.</li>
                                            <li className='mb-2'><FontAwesomeIcon icon={faCheckCircle} className='me-2' />Delaying appointments for preventative care.</li>
                                            <li className='mb-2'><FontAwesomeIcon icon={faCheckCircle} className='me-2' />Postponing in-person appointments and utilizing virtual visits, whenever possible.</li>
                                        </ul>
                                    </div>
                                </LightSpeed>
                            </div>
                        </div>

                    </section>
            }
        </section>
    );
};

export default ServicesDetails;