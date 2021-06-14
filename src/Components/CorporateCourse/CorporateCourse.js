import React from 'react';
import CorporateBio from './CorporateBio/CorporateBio';
import CorporateForm from './CorporateForm/CorporateForm';
import CorporateBusiness from './CorporateHeader/CorporateBusiness/CorporateBusiness';
import CorporateHeader from './CorporateHeader/CorporateHeader';

const CorporateCourse = () => {
    return (
        <div>
            <CorporateHeader />
            <hr />

            <CorporateBusiness />
            <hr />

            <CorporateBio />
            <br />

            <CorporateForm />
        </div>
    );
};

export default CorporateCourse;