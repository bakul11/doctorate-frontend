import React from 'react';
import './Contact.css'
import subLogo from '../../../images/sub-sambol.svg'
import contactLogo from '../../../images/contact.jpg'
import { LightSpeed, Slide } from 'react-reveal';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileText, faMobile, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';



const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors }, formState } = useForm();
    const { isSubmitting } = formState;

    const onSubmit = data => {
        fetch('https://dortorate-project.onrender.com/contact/postContact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result?.success) {
                    toast.success(result?.message);
                    reset();
                } else {
                    if (result?.error || result?.error?.includes('E11000 duplicate key error collection')) {
                        toast.error(result?.message);
                        toast.error('Already use this email');
                    }
                }
            })

        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 10000);
        });

    }

    return (
        <section className='contact-main'>
            <div className='contact-sec'>
                <div className="contact-title">
                    <LightSpeed right>
                        <h6 className='text-light mb-3'><img src={subLogo} alt="logo" /> <span className='pe-3 ps-3 text-light'>Contact Us</span> <img src={subLogo} alt="logo" /></h6>
                        <h1 className='text-light fw-bold'>Contact with Us 24 Hours</h1>
                    </LightSpeed>
                </div>
            </div>
            <div className="container contact-des text-center mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-7 mx-auto tauch-contact">
                        <LightSpeed left>
                            <h3 className='fw-bold mb-2'>Get In Touch With Us!</h3>
                            <h6>Whether you have a question about treatments, bills, medical insurance
                                please contact us using the information below.</h6>
                        </LightSpeed>
                    </div>
                    <div className="mt-5">
                        <div className="row gy-5">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                                <Slide left>
                                    <div className="homeApp-left">
                                        <div className="appointment-title mb-5">
                                            <p>Make An Appointment</p>
                                            <h3 className='fs-2 pb-2 pt-2' style={{ fontWeight: '700' }}>We Are Here For You</h3>
                                            <div className="appoimrnt-form">
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="row gy-3">
                                                        <div className="col-lg-6">
                                                            <div class="input-group">
                                                                <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faUserCheck} type='text' style={{ color: '#2CD174' }} /></span>
                                                                <input {...register("fullName", { required: true })} className='form-control fs-6' style={{ background: '#F2F9FC' }} placeholder='Full Name' />
                                                                {errors.fullName && <span className='text-danger'>This field is required</span>}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div class="input-group">
                                                                <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faEnvelope} type='email' style={{ color: '#2CD174' }} /></span>
                                                                <input {...register("email", { required: true })} className='form-control fs-6' style={{ background: '#F2F9FC' }} placeholder='Email Address' />
                                                                {errors.email && <span className='text-danger'>This field is required</span>}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div class="input-group">
                                                                <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faMobile} type='Number' style={{ color: '#2CD174' }} /></span>
                                                                <input {...register("phone", { required: true })} className='form-control fs-6' style={{ background: '#F2F9FC' }} placeholder='Phone Number' />
                                                                {errors.phone && <span className='text-danger'>This field is required</span>}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div class="input-group">
                                                                <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faFileText} type='text' style={{ color: '#2CD174' }} /></span>
                                                                <input {...register("subject", { required: true })} className='form-control fs-6' style={{ background: '#F2F9FC' }} placeholder='Subject' />
                                                                {errors.subject && <span className='text-danger'>This field is required</span>}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div class="input-group">
                                                                <textarea {...register("customerMegs", { required: true })} className='form-control fs-6' rows='5' style={{ background: '#F2F9FC' }} placeholder='Write Your Message' />
                                                                {errors.customerMegs && <span className='text-danger'>This field is required</span>}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <button className="btn btn-danger">
                                                                Sent Message
                                                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1 ms-2 text-light"></span>}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                                <Slide right>
                                    <div className="homeApp-left">
                                        <div className="appointment-title text-center mb-5">
                                            <img src={contactLogo} alt="logo" className='img-fluid' />
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </section >
    );
};

export default Contact;