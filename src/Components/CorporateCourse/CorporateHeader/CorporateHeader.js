import React from 'react';
import './CorporateHeader.css';

const CorporateHeader = () => {
    return (
        <div className="header text-light">
            <h1>Empower your employees through <br />e-Learning!</h1>
            <p>
                Our innovative approach and robust online training courses help achieve your <br />company’s learning goals and increase efficiency across organization!
            </p>
            <button className="btn btn-warning">Learn How?</button>
        </div>
    );
};

export default CorporateHeader;