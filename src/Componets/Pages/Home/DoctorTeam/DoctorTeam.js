import React from 'react';
import doc1 from '../../../../images/doctors/1.jpg'
import doc2 from '../../../../images/doctors/2.jpg'
import doc3 from '../../../../images/doctors/3.jpg'
import doc4 from '../../../../images/doctors/4.png'
import sub from '../../../../images/sub-sambol.svg'
import DoctorTeamCart from './DoctorTeamCart';
import LightSpeed from 'react-reveal/LightSpeed';

const doctorData = [
    {
        name: "Dr. Anna anaq",
        title: "Internist, General Practitioner",
        photo: doc1
    },
    {
        name: "Dr. Anthony antor",
        title: "Surgeon, Сardiologist",
        photo: doc2
    },
    {
        name: "Dr. Andrew malek",
        title: "Internist, Orthopedic Surgeon",
        photo: doc3
    },
    {
        name: "Dr. selina gomes",
        title: "Cardiology, Internist Surgeon",
        photo: doc4
    },
]
const DoctorTeam = () => {
    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <div className="doc-title text-center mb-5">
                        <LightSpeed left>
                            <p><span><img src={sub} alt="logo" /></span> OUR DOCTORS <span><img src={sub} alt="logo" /></span></p>
                            <h3 className='fs-2 pb-2 pt-2' style={{ fontWeight: '700' }}>Our Expert Doctor's</h3>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum</h6>
                        </LightSpeed>
                    </div>
                </div>
            </div>
            <div className="doctorData">
                <div className="row gy-5">
                    {
                        doctorData?.map(doctor => <DoctorTeamCart doctor={doctor} key={doctor?.name} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default DoctorTeam;