import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PracticalWorkDetails = ({ data }) => {
    // console.log(data);
    return (
        <div className="col-md-6 mt-3" >
            <div className="card m-2 ">
                <FontAwesomeIcon className="icon" icon={data.icon} />
                <h5 className="mt-4">{data.Title}</h5>

                <div className="card-body p-5">
                    <p style={{ textAlign: 'justify' }} className="text-dark">{data.Description}</p>
                </div>
            </div>

        </div>
    );
};

export default PracticalWorkDetails;