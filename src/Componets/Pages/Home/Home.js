import React from 'react';
import ScrollTop from '../../ScrollTop/ScrollTop';
import Blog from './Blog/Blog';
import DoctorTeam from './DoctorTeam/DoctorTeam';
import HeroSection from './HeroSection/HeroSection';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import Services from './Services/Services';
import Testimoinal from './Testimoinal/Testimoinal';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <Services />
            <DoctorTeam />
            <HomeAppointment />
            <Blog />
            <ScrollTop/>
            <Testimoinal />
        </div>
    );
};

export default Home;