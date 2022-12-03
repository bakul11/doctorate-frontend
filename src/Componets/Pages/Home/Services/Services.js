import React, { useState } from 'react';
import { useEffect } from 'react';
import { LightSpeed } from 'react-reveal';
import sub from '../../../../images/sub-sambol.svg'
import ServiceLoadding from '../../../Animation/ServiceLoadding';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [service, setService] = useState([]);
    const [loadding, setLoadding] = useState(true);


    //load data
    useEffect(() => {
        fetch('https://dortorate-project.onrender.com/service/getAllService', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setService(data?.service);
                    setLoadding(false)
                }
            })
            .catch(err => {
                setLoadding(true)
            })
    }, [service])

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <div className="doc-title text-center mb-5">
                        <LightSpeed left>
                            <p><span><img src={sub} alt="logo" /></span> Our Services <span><img src={sub} alt="logo" /></span></p>
                            <h3 className='fs-2 pb-2 pt-2' style={{ fontWeight: '700' }}>Our Healthcare Services</h3>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum</h6>
                        </LightSpeed>
                    </div>
                </div>
            </div>
            <div className="load-service-data">
                <div className="row gy-5">
                    {
                        loadding ?
                            <>
                                <ServiceLoadding />
                                <ServiceLoadding />
                            </>
                            : service?.map(singleService => <ServicesCart singleService={singleService} key={singleService?._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;