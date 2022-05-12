import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary text-center">{name}</h2>
                <p className='text-center'>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Sorry ! No Slots Available</span>
                }</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn modal-button btn btn-secondary text-white">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;