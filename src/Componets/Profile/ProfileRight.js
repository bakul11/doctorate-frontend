import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useActiveUser from '../../Hooks/useActiveUser';

const ProfileRight = () => {
    const { register, handleSubmit, formState, reset, formState: { errors } } = useForm();
    const { isSubmitting } = formState
    const screet_key = 'e7b3c92c06537e14d85d152ffd62709c';
    const [user] = useActiveUser();
    const userSingleId = user?._id;


    const onSubmit = data => {
        const image = data?.profile[0];
        const formData = new FormData()
        formData.append('image', image);



        // post Api Calling methods
        const url = `https://api.imgbb.com/1/upload?key=${screet_key}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    const photo = result?.data?.url;

                    const updateData = {
                        userName: data?.userName,
                        email: data?.email,
                        phone: data?.phone,
                        address: data?.address,
                        profile: photo
                    }

                    //post data in mongodb 

                    fetch(`https://dortorate-project.onrender.com/auth/updateProfile/${userSingleId}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(updateData)
                    })
                        .then(res => res.json())
                        .then(result2 => {
                            if (result2?.success) {
                                toast.success(result2?.message);
                                reset();
                            }
                        })
                }
            })

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 9000)
        })

    }



    return (
        <div>
            <div className="row">
                <div className="col-lg-12 mx-auto shadow-lg p-3 rounded bg-light">
                    <h5 className='mb-2 mt-2 fw-bold mb-4'>Update Profile</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gy-2">
                            <div className="col-lg-12">
                                <label htmlFor="exe" className='fw-bold'>Full Name</label>
                                <input {...register("userName", { required: true })} className='form-control' id='exe' type='Full Name' placeholder='Full Name' />
                                {errors.userName && <span className='text-danger'>userName is required</span>}
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="ee" className='fw-bold'>Email</label>
                                <input {...register("email", { required: true })} className='form-control' id='ee' type='email' placeholder='Email Address' />
                                {errors.email && <span className='text-danger'>Email is required</span>}
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="pp" className='fw-bold'>Phone</label>
                                <input {...register("phone", { required: true })} className='form-control' id='pp' type='number' placeholder='Phone/Mobile' />
                                {errors.phone && <span className='text-danger'>Phone is required</span>}
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="eee" className='fw-bold'>Address</label>
                                <input {...register("address", { required: true })} className='form-control' id='eee' type='text' placeholder='Address' />
                                {errors.address && <span className='text-danger'>Address is required</span>}
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="rr" className='fw-bold'>Photo</label>
                                <input {...register("profile", { required: true })} className='form-control' id='rr' type='file' />
                                {errors.profile && <span className='text-danger'>Photo is required</span>}
                            </div>
                            <div className="col-lg-12">
                                <button className="btn btn-success w-100">
                                    Save Change
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1 ms-2 text-light"></span>}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileRight;