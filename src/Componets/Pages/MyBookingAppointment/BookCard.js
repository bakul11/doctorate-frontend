import React from 'react';
import { toast } from 'react-toastify';


const BookCard = (singleBook) => {
    const { userName, photo, service, email, bookingTime, bookingDate, gender, _id } = singleBook.singleBook;
    const { index } = singleBook;

    //Handle Delete Orders

    const handleDelete = (id) => {
        const confirmDel = window.confirm('Do you want delete this order');

        if (confirmDel) {
            fetch(`https://dortorate-project.onrender.com/book/deleteBook/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result?.success) {
                        toast.success(result?.message)
                    }
                })

        }
    }





    return (
        <tr className='text-center'>
            <td>{index + 1}</td>
            <td><img src={photo} alt="logo" className='img-fluid rounded-pill mx-auto' style={{ height: '30px', width: '30px' }} /></td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{bookingTime}</td>
            <td>{bookingDate}</td>
            <td>{gender}</td>
            <td>
                <button className="btn btn-danger fw-bold" style={{ borderRadius: '8px' }} onClick={() => handleDelete(_id)}>
                    Cancle
                </button>
            </td>
        </tr >
    );
};

export default BookCard;