import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    const onSubmit = data => {
        fetch(`https://dortorate-project.onrender.com/auth/resetPassword/${userId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    toast.success(result?.message);
                    navigate('/login');
                }
                console.log(result)

            })
    }
    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <div className="row">
                <div className="col-lg-4 mx-auto shadow-lg p-3 rounded bg-light">
                    <h5 className='mb-2 mt-2 text-center fw-bold mb-4'>New Password</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gy-2">
                            <div className="col-lg-12">
                                <label htmlFor="ee" className='fw-bold'>Password</label>
                                <input {...register("password", { required: true })} className='form-control' id='ee' type='password' rows='4' placeholder='create new Password' />
                                {errors.password && <span className='text-danger'>New Password is required</span>}
                            </div>
                            <div className="col-lg-12">
                                <button className="btn btn-success w-100">Save Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default NewPassword;