import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import useActiveUser from '../../../../Hooks/useActiveUser';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faStopwatch, faUserAlt, faUserCheck, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ServiceModal = ({ open, onCloseModal, serviceName }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [user] = useActiveUser();
    const { register, handleSubmit, reset, formState } = useForm();
    const { isSubmitting } = formState;
    const navigate = useNavigate()
    const submitDate = startDate.toDateString();
    const userPhoto = user?.profile;
    const userId = user?._id;

    //Handle submit form
    const onSubmit = data => {

        const bookingData = {
            userName: data?.userName,
            email: data?.email,
            photo: userPhoto,
            service: data?.service,
            gender: data?.gender,
            bookingTime: data?.time,
            bookingDate: submitDate,
            userId: userId

        }

        //booking api 
        fetch('https://dortorate-project.onrender.com/book/postBook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    toast.success(result?.message);
                    navigate('/booking');
                    reset();
                } else {
                    if (result?.error) {
                        toast.error(result?.message);
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
        <div>
            <Modal open={open} onClose={onCloseModal} center>
                <h2 className='text-center mt-2 mb-3 fs-5 fw-bold'>Booking Your Appointment</h2>
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gy-3">
                            <div className="col-lg-12">
                                <div class="input-group">
                                    <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faUserAlt} style={{ color: '#2CD174' }} /></span>
                                    <input {...register("userName")} className='form-control' value={user?.userName} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div class="input-group">
                                    <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faEnvelope} style={{ color: '#2CD174' }} /></span>
                                    <input {...register("email")} className='form-control' value={user?.email} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div class="input-group">
                                    <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faUserDoctor} style={{ color: '#2CD174' }} /></span>
                                    <input {...register("service")} className='form-control' value={serviceName} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div class="input-group">
                                    <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faUserCheck} style={{ color: '#2CD174' }} /></span>
                                    <select {...register("gender", { required: true })} className='form-control'>
                                        <option selected>Select Gender</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div class="input-group">
                                    <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faStopwatch} style={{ color: '#2CD174' }} /></span>
                                    <select {...register("time", { required: true })} className='form-control'>
                                        <option selected>Select Time</option>
                                        <option>9AM-10AM</option>
                                        <option>10AM-11AM</option>
                                        <option>11AM-12AM</option>
                                        <option>12AM-1PM</option>
                                        <option>1PM-2PM</option>
                                        <option>2PM-3PM</option>
                                        <option>3PM-4PM</option>
                                        <option>5PM-6PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div class="input-group">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className="red-border form-control fs-6"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <button className="btn btn-danger mt-4 text-uppercase fw-bold" style={{ borderRadius: '10px', padding: '10px 20px' }}>
                                    Book Submit
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1 ms-2 text-light"></span>}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default ServiceModal;