import React from 'react';
import './errorMassage.css';
import img from './error.jpg';

const ErrorMassage = () => {
    return (
        <>
            {/* <img src={process.env.PUBLIC_URL + "img/error.jpg"} alt="error" /> */}
            <img src={img} alt="error" />
            <span>Something goes wrong</span>
        </>
    );
};

export default ErrorMassage;
