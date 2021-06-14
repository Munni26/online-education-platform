import React from 'react';
import AllCourseHeader from './AllCourseHeader/AllCourseHeader';
import Courses from '../../Components/HomeMain/Courses/Courses'
import Footer from '../Footer/Footer';

const AllCourses = () => {
    return (
        <div>
            <AllCourseHeader />
            <hr />

            <Courses />
            <hr />

            <Footer />
        </div>
    );
};

export default AllCourses;