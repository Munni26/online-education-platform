import React from 'react';
import './App.css';
import HomeMain from './Components/HomeMain/HomeMain/HomeMain';
// import Banner from './Components/Banner/Banner';
// import CarrierBlog from './Components/CarrierBlog/CarrierBlog';
// import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
// import Greetings from './Components/Greetings/Greetings';
// import Home from './Components/Home/Home';
// import Joining from './Components/Joining/Joining';
import Navbar from './Components/Navbar/Navbar';
// import PracticalWork from './Components/PracticalWork/PracticalWork';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomeMain />
      <hr />
      <Footer />
    </div>

  );
}

export default App;
