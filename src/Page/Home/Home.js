import React from 'react';
import Banner from './Banner/Banner';
import Info from './Banner/Info';
import MakeAppointment from './Banner/MakeAppointment';
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
        </div>
    );
};

export default Home;