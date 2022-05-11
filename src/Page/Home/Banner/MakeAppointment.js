import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import backApp from '../../../assets/images/appointment.png';
import MainButton from '../../Shared/MainButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${backApp})`
        }}
            className='flex pt-10 justify-center items-center my-28 p-2'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-2xl text-primary'>Appointment</h1>
                <h1 className='text-4xl text-bold text-white'>Make An Appointment Today</h1>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <MainButton>Get Start</MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;