import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import CarrierBlog from './Components/CarrierBlog/CarrierBlog';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Greetings from './Components/Greetings/Greetings';
import Home from './Components/Home/Home';
import Joining from './Components/Joining/Joining';
import Navbar from './Components/Navbar/Navbar';
import PracticalWork from './Components/PracticalWork/PracticalWork';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Greetings />
      <Home />
      <hr />
      <Courses />
      <hr />
      <Banner />
      <hr />
      <CarrierBlog />
      <hr />
      <PracticalWork />
      <hr />
      <Joining />
      <hr />
      <Footer></Footer>
    </div>

  );
}

export default App;
