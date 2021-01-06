import React from 'react';
import web from "../image/bg-image.png";
import room from "../image/rooms.png";
import g1 from "../image/g1.png";
import g2 from "../image/g2.png";
import g3 from "../image/g3.png";
import review from "../image/review.png";
import map from "../image/map.jpg";


const Home =() => {

  return(
    <>
     <section id="header" className="title">
       <div className="container nav-bg">
         <div className="row">
           <div className="main col-10 mx-auto">
             <h1><span><i>Ferofly</i></span></h1>
           </div>
           <div className="sub-main col-10 mx-auto">
             <h5><span><i>Magnify your Journey</i></span></h5>
           </div>
         </div>
       </div>
     </section>
     <section id="banner" className="banner-img">
       <div className="container">
         <div className="row">
           <div className="co-lg-6 order-1 order-lg-2">
             <img src={web} className="img-fluid" alt="home img" />
           </div>
         </div>
       </div>
     </section>
   
      <section id="about-main" className="about-main">
        <div className="container">
          <div className="row">
            <div className="about-content title">
              <h4>ABOUT</h4>
            </div>
            <div className="about-content para">
              <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="rooms" className="rooms">
        <div className="container">
          <div className="row">
          <div className="co-lg-6 order-1 order-lg-2">
             <img src={room} className="img-fluid" alt="home img" />
           </div>
            <div className="rooms-content">
              <div className="content-title title">
                <h4>OUR ROOMS</h4>
              </div>
              <div className="content-para">
               <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              </div>
              <form class="form-inline my-2 my-lg-0">
                    <button class="btn my-2 my-sm-0" type="submit">Book a Room</button>
                </form>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="service">
        <div className="container">
          <div className="row">
            <div className="service-content">
              <div className="service-header title">
                <h1>OUR SERVICES</h1>
              </div>
              <div className="services-col">
                <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box"> 
                     <h3>Breakfast</h3>
                     <p>'m a paragraph. Click here to add your own text and edit me. </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <h3>Garden</h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <h3>Pool</h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                  
                     <h3>Free Wifi</h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                  
                     <h3>Daily Housekeeping </h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <h3>In-Room Dining Service</h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
               </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="row">
            <div className="gallery-header title">
              <h3>GALLERY</h3>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="gallery-box">
                  <div className="co-lg-6 order-1 order-lg-2">
                    <img src={g1} className="gallery-image" alt="home img" />
                  </div>
                  </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="gallery-box">
                  <div className="co-lg-6 order-1 order-lg-2">
                    <img src={g2} className="gallery-image" alt="home img" />
                  </div>
                  </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="gallery-box">
                  <div className="co-lg-6 order-1 order-lg-2">
                    <img src={g3} className="gallery-image" alt="home img" />
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Thingstodo" className="Thingstodo">
        <div className="container">
          <div className="row">
            <div className="content-title title">
              <h3>THINGS TO DO</h3>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="ToDo-box">
                     <h3>Wineries Tour</h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="ToDo-box">
                     <h3>Cultural Sites</h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="ToDo-box">
                     <h3>Market Tour</h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="ToDo-box">
                     <h3>Leisure Activities</h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="ToDo-box">
                     <h3>Birds Safari</h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="ToDo-box">
                     <h3>Horse Riding </h3>
                     <p>I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
            </div>
          </div>
        </div>
      </section>
      <section id="rooms" className="guest-review">
        <div className="container">
          <div className="row">
          <div className="co-lg-6 order-1 order-lg-2">
             <img src={review} className="img-fluid" alt="home img" />
           </div>
            <div className="rooms-content guest">
              <div className="content-title title">
                <h4>GUEST REVIEW</h4>
              </div>
              <div className="content-para">
               <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us" className="contact-us">
        <div className="container">
          <div className="row">
            <div className="contact-us-title">
              <h3>CONTACT US</h3>
            </div>
          <form method='POST' className='input'>
            <input type='text' 
                placeholder='Name' 
                required/>
            <input type='email' 
                placeholder='E-Mail' 
                required/>
            <div className='messageContainer'>
                <textarea placeholder='Message' required></textarea>

            </div>
            <button class="btn my-2 my-sm-0" type="submit">Submit</button>
            </form>
            
          </div>
        </div>
      </section>
      <section id="maps" >
        <div className="google-map">
        <div className="co-lg-6 order-1 order-lg-2">
             <img src={map} className="img-map" alt="home img" />
           </div>
        </div>
      </section>
      <section id="footer">
        <div className="conatainer">
          <div className="footer-content">
          <div className="copyright">
               <p>Copyright 2020 All Right Reserved By </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
