import React from 'react';
import {   SpinnerDotted } from 'spinners-react';

const LoadingSpinner = ({ size, color }) => {
    return (
        <div className='w-full h-full flex items-center justify-center text-white'>
            <SpinnerDotted
                size={size}
                color={color}
                thickness={150}
            />
        </div>
    );
};

export default LoadingSpinner;