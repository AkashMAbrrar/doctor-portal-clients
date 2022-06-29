import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="lg:text-5xl sm:text-2xl font-bold">Happy Health Care And <span className='text-primary'>Stay Safe</span></h1>
                    <p className="py-6 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.Good Health Beautiful LIfe.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;