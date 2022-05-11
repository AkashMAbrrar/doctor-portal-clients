import React from 'react';
import qoutes from '../../../assets/icons/quote.svg';
import pepole1 from '../../../assets/images/people1.png';
import pepole2 from '../../../assets/images/people2.png';
import pepole3 from '../../../assets/images/people3.png';
import Feedback from './Feedback';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            review: '',
            location: "California",
            img: pepole1,
        },
        {
            _id: 2,
            name: 'Winson Harry',
            review: '',
            location: "Zeneva",
            img: pepole2,
        },
        {
            _id: 3,
            name: 'Winson Harry',
            review: '',
            location: "London",
            img: pepole3,
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-xl text-primary font-bold">Testimonials</h3>
                    <h2 className='text-3xl '>What Our Patients Say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={qoutes} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    reviews.map(review => <Feedback
                        key={review._id}
                        review={review}
                    ></Feedback>)
                }
            </div>
        </section>
    );
};

export default Testimonials;