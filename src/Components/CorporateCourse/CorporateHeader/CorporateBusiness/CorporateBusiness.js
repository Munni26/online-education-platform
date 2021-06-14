import React, { useState } from 'react';
import { BusinessData } from '../../../Data/Data';
import CorporateDetail from './CorporateDetail';

const CorporateBusiness = () => {
    const [data, setData] = useState(BusinessData)
    return (
        <div>
            <div className="row">
                <h1 className="mt-5">Need online training for 10+ employees?<br />
                    Try O.E.P for Business</h1>
                {
                    data.map(data => {
                        return <CorporateDetail key={data.id} data={data} />
                    })
                }

            </div>

        </div>
    );
};

export default CorporateBusiness;