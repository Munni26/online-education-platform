import React, { useState } from 'react';
import { practicalData } from '../../Data/Data';
import PracticalWorkDetails from './PracticalWorkDetails';
import './PracticalWork.css';



const PracticalWork = () => {
    const [data, setData] = useState(practicalData)
    //console.log(data)
    return (
        <div className="container mt-5 pt-5 practical">
            <h2>Our endeavor is to make sure that you use the lessons of the course properly</h2>
            <div className="row">
                {
                    data.map(data => {
                        return <PracticalWorkDetails key={data.id} data={data} />
                    })
                }
            </div>
        </div>
    );
};

export default PracticalWork;