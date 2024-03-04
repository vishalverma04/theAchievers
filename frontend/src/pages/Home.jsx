import React from 'react'
import { Link } from 'react-router-dom';
import TodayMenu from '../pages/TodayMeal';
function Home() {
  return (
    <div >
    <h1>hello</h1>
   <Link to="/menu">see menu</Link>
   <br></br>
   <Link to="/complaint">complaint</Link>
   <TodayMenu/>
    </div>
  );
};

export default Home
