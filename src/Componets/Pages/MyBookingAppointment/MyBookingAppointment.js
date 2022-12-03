import React, { useState, useEffect } from 'react';
import useActiveUser from '../../../Hooks/useActiveUser';
import BookCard from './BookCard';


const MyBookingAppointment = () => {
    const [book, setBook] = useState([]);
    const [loadding, setLoadding] = useState(true);
    const [user] = useActiveUser();
    const userId = user?._id;




    //load my booking appointment
    useEffect(() => {
        fetch(`https://dortorate-project.onrender.com/book/getBookingOrder/${userId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    setBook(result?.book)
                    setLoadding(false)
                }
            })
            .catch(err => {
                setLoadding(true)
            })
    }, [book, userId])



    return (
        <section>
            {
                book?.length === 0 ?
                    <div className="order-sec text-center" style={{ marginTop: '120px' }}>
                        <h5 className='fw-bold mb-2'>Your Booking Appointment Empty</h5>
                        <h6>Please booking appointment</h6>
                    </div>
                    :
                    <div className='my-appointmrt' style={{ marginTop: '120px' }}>
                        <div className="my-book-title text-center">
                            <h5 className='fw-bold'>My Booking Appointment : {book?.length}</h5>
                        </div>
                        <div className="show-order container mt-5">
                            <div className="table-responsive">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr className='text-center bg-dark text-light'>
                                            <th>Serial No</th>
                                            <th>Profile</th>
                                            <th>Patient Name</th>
                                            <th>Email</th>
                                            <th>Service</th>
                                            <th>Time</th>
                                            <th>Date</th>
                                            <th>Geder</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
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
                                                book?.map((singleBook, index) => <BookCard singleBook={singleBook} key={singleBook?._id} index={index} />)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default MyBookingAppointment;