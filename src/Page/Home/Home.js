import React from 'react';
import Banner from './Banner/Banner';
import Footer from '../Shared/Footer';
import Form from './Banner/Form';
import Info from './Banner/Info';
import MakeAppointment from './Banner/MakeAppointment';
import Testimonials from './Banner/Testimonials';
import DentalInfo from './DentalInfo/DentalInfo';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalInfo></DentalInfo>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;