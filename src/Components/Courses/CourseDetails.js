import React from 'react';

const CourseDetails = ({ data }) => {
    return (
        <div className="col-md-4" >
            <div className="card">
                <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
                <h5 class="card-title">{data.course_title}</h5>
                <p><strong>${data.course_price}</strong></p>
                <button className="btn btn-secondary">Enroll Now</button>
            </div>

        </div>
    );
};

export default CourseDetails;