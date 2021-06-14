import React from 'react';
import './Joining.css';
const JoiningDetails = ({ data }) => {
    return (
        <div className="col-md-6 col-sm-12">
            <div className="card join">
                <div className="card-body">
                    <h2 className="title">{data.Title}</h2>
                    <p style={{ textAlign: 'justify' }}>{data.Description}</p>
                    <button className="buttons">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default JoiningDetails;