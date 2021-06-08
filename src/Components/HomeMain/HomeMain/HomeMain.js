import React from 'react';
import Greetings from '../Greetings/Greetings';
import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import Banner from '../Banner/Banner';
import CarrierBlog from '../CarrierBlog/CarrierBlog';
import PracticalWork from '../PracticalWork/PracticalWork';
import Joining from '../Joining/Joining';

const HomeMain = () => {
    return (
        <div>
            <Greetings></Greetings>
            <Home></Home>
            <hr />
            <Courses></Courses>
            <hr />
            <Banner></Banner>
            <hr />
            <CarrierBlog></CarrierBlog>
            <hr />
            <PracticalWork></PracticalWork>
            <hr />
            <Joining></Joining>
        </div>
    );
};

export default HomeMain;