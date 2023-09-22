import React from 'react'
import Navbar from './Navbar'
import '../assets/css/Home.css'
function Home() {
  return (
      <>
           <div className="pinkbc1">
      <Navbar/>
    
    <div className="pinkcard">
  <div className="pinkcontent">
    <div className="pinkfront">
      Welcome To MERCADO !
    </div>
    <div className="pinkback">
            <div className="pinkcon1">Explore Our Top-Rated</div>
            <div className="pinkcon2">Home Appliances.</div>
            <div className="pinkcon3">From Laundry To Kitchen</div>
            <div className="pinkcon4">Mercado has What you need.</div>
      
    </div>
  </div>
</div>

<div class="container">
    <div class="card">
      <div class="front"></div>
      <div class="back">
        <h1>WELCOME TO</h1>
        <h1 className="head1">MERCADO</h1>
        <p className="para1">ELEVATE YOUR HOME LIVING</p>
        <p className="para2">WITH MERCADO</p>
      </div>
    </div>
  </div>
   </div>
    </>
  )
}

export default Home