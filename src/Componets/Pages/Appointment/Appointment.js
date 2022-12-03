import { faEnvelope, faStopwatch, faUserAlt, faUserCheck, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useActiveUser from '../../../Hooks/useActiveUser';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const servicesData = [
    {
        name: 'Cardiologist'
    },
    {
        name: 'Urology'
    },
    {
        name: 'Pulmonary'
    },
    {
        name: 'Hypnotherapy'
    },
    {
        name: 'Neurology'
    },
    {
        name: 'Radiology'
    }
]

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [user] = useActiveUser();
    const { register, handleSubmit, reset, formState: { errors }, formState } = useForm();
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

        console.log(data)

        console.log(bookingData)

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
                console.log(result)
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
        <div className='container' style={{ paddingTop: '150px' }}>
            <div className="row gy-5">
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                    <div className="appoinet-form2 shadow-lg p-3 rounded bg-primary">
                        <h2 className='text-center mt-2 mb-3 fs-5 fw-bold text-light'>Booking Your Appointment</h2>
                        <div className="row">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gy-3">
                                    <div className="col-lg-12">
                                        <div class="input-group">
                                            <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faUserAlt} style={{ color: '#2CD174' }} /></span>
                                            <input {...register("userName", { required: true })} className='form-control' placeholder='Your Name' />
                                            {errors.userName && <span className='text-danger'>User Name is required</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div class="input-group">
                                            <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faEnvelope} style={{ color: '#2CD174' }} /></span>
                                            <input {...register("email", { required: true })} className='form-control' placeholder='Email Address' />
                                            {errors.email && <span className='text-danger'>Email is required</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div class="input-group">
                                            <span class="input-group-text bg-none" style={{ background: '#F2F9FC' }} id="inputGroup-sizing-default"><FontAwesomeIcon icon={faEnvelope} style={{ color: '#2CD174' }} /></span>
                                            <select {...register("service", { required: true })} className='form-control' style={{ background: '#F2F9FC' }}>
                                                <option selected>Select Services</option>
                                                {
                                                    servicesData.map(singleService => <option value={singleService.name}>{singleService.name}</option>)
                                                }
                                            </select>
                                            {errors.service && <span className='text-danger'>This field is required</span>}
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
                                    <div className="col-lg-6">
                                        <button className="btn btn-danger text-uppercase fw-bold" style={{ borderRadius: '10px', padding: '10px 20px' }}>
                                            Book Submit
                                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1 ms-2 text-light"></span>}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-6 col-sm-12 col-12">
                    <div className="appoinet-form2">
                        <img src="https://i.ibb.co/9qqjgxD/appointment-img.jpg" alt="logo" className='img-fluid w-100 d-block' style={{ height: '460px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;