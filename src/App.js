import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import HomeMain from './Components/HomeMain/HomeMain/HomeMain'
import AllCourses from './Components/AllCourses/AllCourses'
import CorporateCourse from './Components/CorporateCourse/CorporateCourse';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from './Components/RefundPolicy/RefundPolicy';
import TermsCondition from './Components/TermsCondition/TermsCondition';


function App() {
  return (
    <div className="App">


      <Router>
        <Navbar />

        <Switch>

          <Route exact path="/">
            <HomeMain />
          </Route>

          <Route path="/all-courses">
            <AllCourses />
          </Route>

          <Route path="/co-e-learning">
            <CorporateCourse />
          </Route>

          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>

          <Route path="/refund-policy">
            <RefundPolicy />
          </Route>

          <Route path="/terms-and-condition">
            <TermsCondition />
          </Route>
        </Switch>
      </Router>



    </div>

  );
}

export default App;
