import React from 'react';
import treatments from '../../../assets/images/treatment.png';

const DentalInfo = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <figure>
                <img style={{ width: "100% height: 75%" }} src={treatments} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-justify font-bold">Exceptional Dental Care On Your Term</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            </div>
        </div>
    );
};

export default DentalInfo;