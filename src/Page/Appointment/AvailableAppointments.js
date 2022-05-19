import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://gentle-brushlands-69728.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <p className='text-xl text-primary text-center font-bold my-12'>Available Appointment On : {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>

            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                refetch={refetch}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;