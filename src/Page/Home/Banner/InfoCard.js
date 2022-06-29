import React from 'react';



const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 lg:pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body sm:h-4/5">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;