import React, { useState } from 'react';
import { JoinData } from '../../Data/Data';

import JoiningDetails from './JoiningDetails';
import { Link } from 'react-router-dom';

const Joining = () => {
    const [data, setData] = useState(JoinData)
    return (
        <div className="container">
            <div className="row">
                {
                    data.map(data => {
                        return <JoiningDetails key={data.id} data={data} />

                    })
                }
            </div>
            <footer>
                <div className="row mt-5">
                    <div style={{ border: "1px solid black", padding: "20px" }} class="d-flex justify-content-around">
                        <h5><Link className="link" target="_blank" to="https://www.thedailystar.net/">The Daily Star</Link></h5>
                        <h5><Link className="link" target="_blank" to="https://www.banglatribune.com/">The Bd Tribute</Link> </h5>
                        <h5><Link className="link" target="_blank" to="https://indianexpress.com/section/sports/">Sports News</Link></h5>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Joining;