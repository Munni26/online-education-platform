import React from 'react';
import Greetings from '../Greetings/Greetings';
import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import Banner from '../Banner/Banner';
import CarrierBlog from '../CarrierBlog/CarrierBlog';
import PracticalWork from '../PracticalWork/PracticalWork';
import Joining from '../Joining/Joining';
import Footer from '../../Footer/Footer';

const HomeMain = () => {
    return (
        <div>
            <Greetings></Greetings>

            <Home></Home>
            <br />

            <Courses></Courses>
            <br />

            <Banner></Banner>
            <br />

            <CarrierBlog></CarrierBlog>

            <PracticalWork></PracticalWork>
            <hr />

            <Joining></Joining>
            <br />
            <hr />

            <Footer />
        </div>
    );
};

export default HomeMain;