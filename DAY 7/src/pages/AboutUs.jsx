import React from 'react'
import '../assets/css/aboutus.css'


function AboutUs() {
  return (
      <>
      
    <div class="abg">
    <section class="about-us">
    <div class="about">
    <div><img class="square1" src={require('../assets/img/AboutUs.jpg')} alt="user" /></div>
      <div class="text">
        <h2>About Us</h2>
        <h5 class='h'> Simplyfying Your Everyday Life </h5>
          <p> <b> Whether it's cooking, dishwashing, cleaning, doing laundry, refrigerating or making coffee - MERCADO is your one stop destination </b></p> 
          <p class='p1'> <b> Discover quality, reliability and precision with our wide range of products </b></p>
       
      </div>
    </div>
  </section>
  </div>
    
    </>
  )
}

export default AboutUs