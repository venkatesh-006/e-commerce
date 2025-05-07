import React from 'react';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import './Home.css';

function Home() {
  return ( 
    <div className="home-container">
      <Nav />
      <Header/>
    </div>
  );
}

export default Home;
