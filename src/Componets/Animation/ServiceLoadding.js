import { Skeleton } from '@mui/material';
import React from 'react';

const ServiceLoadding = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                    <Skeleton animation='wave' variant="rounded" height={150} style={{ background: 'lightgray' }} />
                    <Skeleton animation='wave' variant="rounded" height={15} className='mt-2' style={{ background: 'lightgray' }} />
                    <Skeleton animation='wave' variant="rounded" height={15} className='mt-2' style={{ background: 'lightgray' }} />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                    <Skeleton animation='wave' variant="rounded" height={150} style={{ background: 'lightgray' }} />
                    <Skeleton animation='wave' variant="rounded" height={15} className='mt-2' style={{ background: 'lightgray' }} />
                    <Skeleton animation='wave' variant="rounded" height={15} className='mt-2' style={{ background: 'lightgray' }} />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                    <Skeleton animation='wave' variant="rounded" height={150} style={{ background: 'lightgray' }} />
                    <Skeleton animation='wave' variant="rounded" height={15} className='mt-2' style={{ background: 'lightgray' }} />
                    <Skeleton animation='wave' variant="rounded" height={15} className='mt-2' style={{ background: 'lightgray' }} />
                </div>
            </div>
        </div>
    );
};

export default ServiceLoadding;