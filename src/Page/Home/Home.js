import React from 'react';
import Banner from './Banner/Banner';
import Info from './Banner/Info';
import MakeAppointment from './Banner/MakeAppointment';
import Testimonials from './Banner/Testimonials';
import DentalInfo from './DentalInfo/DentalInfo';
import Services from './Services/Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalInfo></DentalInfo>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;