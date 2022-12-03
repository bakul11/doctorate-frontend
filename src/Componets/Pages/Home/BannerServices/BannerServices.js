import { faSquarePlus, faUserDoctor, faWaveSquare, faWheelchairAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import BannerServicesCart from './BannerServicesCart';

const servicesData = [
    {
        title: 'Skilled Doctors',
        logo: faUserDoctor,
        des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Latest Equipment',
        logo: faWaveSquare,
        des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Quality Services',
        logo: faSquarePlus,
        des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Positive Reviews',
        logo: faWheelchairAlt,
        des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    }
]

const BannerServices = () => {
    return (
        <div className='row gy-3'>
            {
                servicesData?.map(service => <BannerServicesCart key={service?.title} service={service} />)
            }
        </div>
    );
};

export default BannerServices;