import React from 'react';
import sub from '../../../../images/sub-sambol.svg'
import { LightSpeed } from 'react-reveal';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimoinalCart from './TestimoinalCart';
import { Autoplay } from 'swiper';



const testData = [
    {
        name: 'kamal pasha',
        photo: "https://i.ibb.co/PTWGpYH/02.jpg",
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsumgive an overview of current thinking on the topic. And, unlike an original research article, it will not present new experimental results',
        rating: 1

    },
    {
        name: 'selina khutun',
        photo: "https://i.ibb.co/QJ6BcyV/04.jpg",
        des: 'A review article can also be called a literature review, or a review of literature. It is a survey of previously published research on a topic. It should give an overview of current thinking on the topic. And, unlike an original research article, it will not present new experimental results',
        rating: 2

    },
    {
        name: 'polash chaya',
        photo: "https://i.ibb.co/HXrBfr4/03.jpg",
        des: 'A review article can also be called a literature review, or a review of literature. It is a survey of previously published research on a topic. It should give an overview of current thinking on the topic. And, unlike an original research article, it will not present new experimental results',
        rating: 1

    },
    {
        name: 'natasha nata',
        photo: "https://i.ibb.co/61DJkRc/06.jpg",
        des: 'A review article can also be called a literature review, or a review of literature. It is a survey of previously published research on a topic. It should give an overview of current thinking on the topic. And, unlike an original research article, it will not present new experimental results',
        rating: 2

    },
    {
        name: 'daren sami',
        photo: "https://i.ibb.co/HXrBfr4/03.jpg",
        des: 'A review article can also be called a literature review, or a review of literature. It is a survey of previously published research on a topic. It should give an overview of current thinking on the topic. And, unlike an original research article, it will not present new experimental results',
        rating: 1

    }
]


const Testimoinal = () => {
    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <div className="doc-title text-center mb-5">
                        <LightSpeed left>
                            <p><span><img src={sub} alt="logo" /></span> Testimonials <span><img src={sub} alt="logo" /></span></p>
                            <h3 className='fs-2 pb-2 pt-2' style={{ fontWeight: '700' }}>What Our Client’s Say</h3>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum</h6>
                        </LightSpeed>
                    </div>
                </div>
            </div>
            <div className="test mt-5">
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            500: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            850: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            991: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1375: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            }
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {
                            testData?.map(test => <SwiperSlide><TestimoinalCart test={test} key={test?.name} /></SwiperSlide>)
                        }
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Testimoinal;