import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors }, formState } = useForm();
    const { isSubmitting } = formState;
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');


    const onSubmit = data => {


        fetch(`https://dortorate-project.onrender.com/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    toast.success(result?.message);
                    localStorage.setItem('token', result?.token);
                    setLoginError('');
                    navigate('/');
                    reset();
                }
                setLoginError(result?.message);
            })




        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 10000);
        });
    }

    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <div className="row">
                <div className="col-lg-4 mx-auto shadow-lg p-3 rounded bg-light card">
                    <h5 className='mb-2 mt-2 text-center fw-bold mb-4'>Login Now</h5>
                    <p className='bg-danger text-light text-center rounded mb-2'>{loginError}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gy-2">
                            <div className="col-lg-12">
                                <label htmlFor="ee" className='fw-bold'>Email</label>
                                <input {...register("email", { required: true })} className='form-control' id='ee' type='email' placeholder='Email Address' />
                                {errors.email && <span className='text-danger'>Email is required</span>}

                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="pp" className='fw-bold'>Password</label>
                                <input {...register("password", { required: true })} className='form-control' id='pp' type='password' placeholder='Password' />
                                {errors.password && <span className='text-danger'>Password is required</span>}
                            </div>
                            <div className="forget text-end">
                                <Link to='/forgetPassword'>
                                    <button className="btn text-right" style={{ fontWeight: '500' }}>Forget Password?</button>
                                </Link>
                            </div>
                            <div className="col-lg-12">
                                <button className="btn btn-success w-100">
                                    Login Now
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1 ms-2 text-light"></span>}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="no-account mt-3 text-center">
                        <p>No account yet? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;