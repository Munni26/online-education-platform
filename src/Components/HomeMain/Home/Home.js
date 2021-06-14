import React from 'react';
import HomePic from '../../../Images/online-education.jpg';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBabyCarriage, faAddressBook, faHandshake, faStickyNote, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 col-sm-12 mt-5 pt-5">

                        <h3 className="mb-4 text-light">Learn Like Yourself, <br />Build Confidence</h3>

                        <p className="text-light" style={{ textAlign: "justify" }}>Acquire the most important skills of the present time by enrolling in online courses, training and career track programs of your choice.</p>

                        <button className="button"><FontAwesomeIcon icon={faBabyCarriage} /> See Courses</button>

                        <div className="mt-4 pt-4 text-light">

                            <h5> <FontAwesomeIcon className=" text-warning" icon={faStickyNote} />Content created by industry experts</h5>
                            <h5> <FontAwesomeIcon className=" text-warning" icon={faProjectDiagram} />  Direct support from mentors</h5>
                            <h5><FontAwesomeIcon className="text-warning" icon={faHandshake} />  The advantage of learning at any time from anywhere</h5>
                            <h5><FontAwesomeIcon className=" text-warning" icon={faAddressBook} />  Projects and assignments, based on actual use</h5>

                        </div>
                        <br />

                    </div>

                    <div className="col-md-6 col-sm-12 mt-5 pt-5">
                        <img className="homeImage img-fluid" style={{ height: '400px', width: '900px' }} src={HomePic} alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;




