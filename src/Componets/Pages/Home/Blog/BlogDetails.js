import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendarCheck, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect, useState } from 'react';
import { LightSpeed, Slide, Zoom } from 'react-reveal';
import { useParams } from 'react-router-dom';
import './BlogCart.css'

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [loadding, setLoadding] = useState(true);

    //loading data
    useEffect(() => {
        fetch(`https://dortorate-project.onrender.com/blog/singleBlogs/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setBlog(data?.blog)
                }
                setLoadding(false)
            })
            .catch(err => {
                setLoadding(true)
            })
    }, [id])

    return (
        <section>
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
                    <section className='blog-del'>
                        <div className="single-blog-sec">
                            <div className='blog-details-sec'>
                                <div className="blog-details-sub">
                                    <LightSpeed>
                                        <div className="d-flex align-items-center justify-content-center mb-3">
                                            <div className="logob me-3">
                                                <h6 className='text-light'><FontAwesomeIcon icon={faUserDoctor} /> <span className='text-light text-capitalize'>{blog?.userName}</span></h6>
                                            </div>
                                            <div className="logob">
                                                <h6 className='text-light'><FontAwesomeIcon icon={faCalendarCheck} /> <span className='text-light'>{blog?.postTime}</span></h6>
                                            </div>
                                        </div>
                                        <h2 className='text-light fw-bold text-center'>{blog?.title}</h2>
                                    </LightSpeed>
                                </div>
                            </div>
                            <Zoom>
                                <div className="blog-logo2 container">
                                    <img src={blog?.blogPhoto} className='img-fluid d-block mx-auto w-100' alt={blog?.title} style={{ borderRadius: '20px', height: '700px' }} />
                                </div>
                            </Zoom>
                        </div>
                        <div className="container blog-all-content">
                            <div className="row gy-5">
                                <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                                    <Slide left>
                                        <div className="blog-left">
                                            <h1 className='fw-bold fs-4 mb-2'>{blog?.title}</h1>
                                            <h6>{blog?.description}</h6>
                                        </div>
                                        <div className="blog-left mt-2">
                                            <h1 className='fw-bold fs-4 mb-2'>The perfect Health for all</h1>
                                            <h6>Appropriately empower dynamic leadership skills after business portals. Globally my cardinate interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.</h6>
                                        </div>
                                    </Slide>
                                </div>
                                <div className="col-lg-4 offset-lg-1 col-md-5 col-sm-12 col-12">
                                    <Slide right>
                                        <div className="blog-right-content">
                                            <div className="blog-right d-flex align-items-start flex-wrap">
                                                <div className="blog-profile me-2">
                                                    <img src={blog?.userPhoto} alt={blog?.userName} className='img-fluid rounded' style={{ height: "70px", width: '70px' }} />
                                                </div>
                                                <div className="blog-profile-title">
                                                    <h5 className='fw-bold text-capitalize'>{blog?.userName}</h5>
                                                    <h6>Chairman & Director</h6>
                                                    <h6>HealthPlus</h6>
                                                </div>
                                            </div>
                                            <div className="blog-right-social mt-5">
                                                <h5 className='fw-bold mb-3'>Follow Me :</h5>
                                                <ul className='d-flex justify-content-between w-25'>
                                                    <li><a href="https://facebook.com" ><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                                    <li><a href="https://facebook.com" ><FontAwesomeIcon icon={faTwitter} /></a></li>
                                                    <li><a href="https://facebook.com" ><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                                    <li><a href="https://facebook.com" ><FontAwesomeIcon icon={faInstagram} /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </section>
    );
};

export default BlogDetails;