import React from 'react';
import ShippingForm from './RateCalc/ShippingForm';

const Landing = () => {
    return (
        <div>
            <br />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <ShippingForm />
                </div>
            </div>
        </div>
    );
};

export default Landing;