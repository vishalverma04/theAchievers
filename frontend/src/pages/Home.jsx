import React from 'react'
import Rebate from '../components/Rebate'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div >
    <h1>hello</h1>
   <Link to="/menu">see menu</Link>
   <br></br>
   <Link to="/complaint">complaint</Link>
   <Rebate/>
    </div>
  );
};

export default Home
