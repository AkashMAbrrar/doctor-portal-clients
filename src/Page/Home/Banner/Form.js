import React from 'react';
import shadow from '../../../assets/images/appointment.png';

const Form = () => {
    return (
        <section className='align-middle'>
            <h2 className='text-primary text-center font-bold'>Contact Us</h2>
            <h1 className='text-center text-3xl font-bold'>Stay Connected With Us</h1>
            <form style={{
                background: `url(${shadow})`
            }}>
                <input className='w-50' type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input type="text" name="text" id="" placeholder='Subject' />
                <br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
        </section>
    );
};

export default Form;