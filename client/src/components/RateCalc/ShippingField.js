import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div className="text-center">
            <label htmlFor={input.name}>{label}</label>
            <input {...input} className="form-control text-center" style={{ marginBottom: '5px' }} />
            <div className="text-danger" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
}