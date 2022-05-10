import React from 'react';
import clock from '../../../assets/icons/clock.svg';


const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure class='pl-5'>
                <img src={clock} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-white">{cardTitle}</h2>
                <p class='text-white'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;