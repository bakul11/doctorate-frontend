import { faCalendar, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import './BlogCart.css'


const BlogCart = ({ singleBlog }) => {
    const { title, userPhoto, userName, blogPhoto, postTime, _id } = singleBlog;

    //handle details 
    const navigate = useNavigate();
    const hadleBlogDetail = () => {
        navigate(`/blogDetails/${_id}`)
    }
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
            <Zoom>
                <div className="blog-single shadow-lg" style={{ borderRadius: '20px' }}>
                    <img src={blogPhoto} alt={title} className='img-fluid mb-2 blogPhoto' style={{ borderRadius: '20px', cursor: 'pointer' }} onClick={hadleBlogDetail} />
                    <div className="blog-item p-2">
                        <h5 className='fw-bold' onClick={hadleBlogDetail} style={{ cursor: 'pointer' }} >{title}</h5>
                        <div className="blog d-flex align-items-center justify-content-between flex-wrap mt-3  mb-3">
                            <div className="blog-user">
                                <h6><img src={userPhoto} alt={userName} className='img-fluid rounded-pill' style={{ height: '30px', width: '30px' }} /> <span className='text-capitalize'>{userName}</span> </h6>
                            </div>
                            <div className="blog-user mt-2">
                                <h6><FontAwesomeIcon icon={faCalendar} className='text-primary' /> {postTime} </h6>
                            </div>
                        </div>
                        <div className="readmore">
                            <button className="text-dark text-uppercase fw-bold fs-6 border-0 bg-light" onClick={hadleBlogDetail}>+ Read More <FontAwesomeIcon icon={faHandPointRight} className='text-danger ms-2' /> </button>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default BlogCart;