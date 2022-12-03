import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const ForgetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');


    const onSubmit = data => {
        fetch(`https://dortorate-project.onrender.com/auth/checkEmail`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    setLoginError('');
                    swal('Check Email', 'Please check your Email', 'success');
                    localStorage.setItem('userId', result?.userId)
                }
                console.log(result)
                setLoginError(result?.message)
            })
    }

    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <div className="row">
                <div className="col-lg-4 mx-auto shadow-lg p-3 rounded bg-light">
                    <h5 className='mb-2 mt-2 text-center fw-bold mb-4'>Your Email Address</h5>
                    <p className='bg-danger text-light text-center rounded mb-2'>{loginError}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gy-2">
                            <div className="col-lg-12">
                                <label htmlFor="ee" className='fw-bold'>Email</label>
                                <input {...register("email", { required: true })} className='form-control' id='ee' type='email' rows='4' placeholder='Email Address' />
                                {errors.email && <span className='text-danger'>Email is required</span>}
                            </div>
                            <div className="col-lg-12">
                                <button className="btn btn-success w-100">Reset Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;