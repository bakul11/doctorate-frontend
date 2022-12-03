import React, { useState } from 'react';
import { LightSpeed } from 'react-reveal';
import BlogCart from './BlogCart';
import sub from '../../../../images/sub-sambol.svg'
import { useEffect } from 'react';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skeleton } from '@mui/material';
import BlogLoadding from '../../../Animation/BlogLoadding';
import { Link } from 'react-router-dom';




const Blog = () => {
    const [blog, setBlog] = useState();
    const [loadding, setLoadding] = useState(true);

    //loading data
    useEffect(() => {
        fetch('https://dortorate-project.onrender.com/blog/getAllBlogs')
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
    }, [blog])


    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <div className="doc-title text-center mb-5">
                        <LightSpeed left>
                            <p><span><img src={sub} alt="logo" /></span> OUR BLOG <span><img src={sub} alt="logo" /></span></p>
                            <h3 className='fs-2 pb-2 pt-2' style={{ fontWeight: '700' }}>Latest Articles</h3>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum</h6>
                        </LightSpeed>
                    </div>
                </div>
            </div>
            <div className="doctorData">
                <div className="row gy-5 mb-4">
                    {
                        loadding ?
                            <>
                                <BlogLoadding />
                                <BlogLoadding />
                            </>
                            :
                            blog?.map(singleBlog => <BlogCart singleBlog={singleBlog} key={singleBlog?._id} />)
                    }
                </div>
            </div>
            <div className="showMore">
                {
                    loadding ?
                        <>
                            <div className="blog-btn text-center mt-4">
                                <Skeleton variant="rounded" animation="wave" width={210} height={50} style={{ background: 'lightgray' }} className='mx-auto' />
                            </div>

                        </> : <div className='text-center mt-4'>
                            <Link to='/blog'>
                                <button className="btn btn-danger mt-4 text-uppercase fw-bold" style={{ borderRadius: '10px', padding: '10px 20px' }}>See all articles<FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Blog;