import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>

    <div id="head">
    <marquee><h1 class="mar">Welcome to Textile Shop Management System</h1></marquee> 
  </div>
  <section id="sec1">
  <div >
  <img src="https://shorturl.at/CEw2W" class="img-fluid"  id = "bg" alt="Responsive image" />
  </div>
  </section>
   
  <div class="container justify-content-center" id="des">
    <div class="row">
      <div class="col-lg-12">
      <h1 >Books Purchase</h1>
      </div>
    </div>
  </div>

<section id="sec2">
<div class="container mt-5">
  <div class="row">
    <div class="col-lg-4">
  <div class="card bg-info text-white,zoomed">

  <img src="https://shorturl.at/5PQ3x" class="card-img-top" alt="..." height="210px" />
  <div class="card-body">
    <h5 class="card-title" >Harry Potter</h5>
    <p class="card-text">The deathly hallows.</p>
    <h5 class="card-title">Rs 1000</h5>
    <a href="createbook" class="btn btn-primary" id="p1">Add cart</a>

  </div>
</div>
    </div>
    <div class="col-lg-4">
  <div class="card bg-info text-white">
  
  <img src="https://shorturl.at/E3Wvd" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title" >Stranger Things</h5>
    <p class="card-text">Dead by daylight</p>
    <h5 class="card-title">Rs 500</h5>
    <a href="createbook" class="btn btn-primary" id="p1">Add cart</a>
  </div>
</div>
    </div>
    <div class="col-lg-4">
  <div class="card bg-info text-white">
    
  <img src="https://shorturl.at/z4Vqo" class="card-img-top" alt="..."  height="210px" />
  <div class="card-body">
    <h5 class="card-title" >Wednessday</h5>
    <p class="card-text">The Addams Family</p>
    <h5 class="card-title">Rs 800</h5>
    <a href="createbook" class="btn btn-primary" id="p1">Add cart</a>
  </div>
</div>
    </div>
    
  </div>
</div>
</section>

<section id="sec3">
  <h1>Books Overview</h1>
<div class="container-fluid mt-3">
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://shorturl.at/zZkNP" alt="Los Angeles" class="d-block" />
      <div class="carousel-caption">
        <h3>Stranger Things</h3>
        <p>Suspicious Mind</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://shorturl.at/PO056" alt="Chicago" class="d-block" />
      <div class="carousel-caption">
        <h3>Harry Potter</h3>
        <p>sorcerer stone</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://shorturl.at/E3Wvd" alt="New York" class="d-block" />
      <div class="carousel-caption">
        <h3>Stranger Things</h3>
        <p>Dead by daylight</p>
      </div>
    </div>
  </div>
  

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
</div>
</section>

<section id="sec4">
<footer>
    <div class="container-fluid bg-secondary">
      <div class="row">
        <div class="col-6"id="f1" >
            <input type="text" placeholder='Enter your email' id="email" />
            <input type="button" class="btn btn-primary m-2" value="Subscribe"/>
        </div>
        <div class="col-6 btn-group" id="f2">
          <a href="#" class="text-light p-1">Home</a>
          <a href="" class="text-light p-1" id="f3">About Us</a>
          <a href="" class="text-light p-1" id="f3" >Contact us</a>
      </div>
      </div>
    </div>
    <div class = "container-fluid justify-content-center" id="center">
    
    <div class="wrapper">
    <div class="row">
    <div class="col-lg-3 p-3">
         <div class="button">
            <div class="icon">
            <i class="fab fa-github"></i>
            </div>
            <span><a href='https://github.com/aravindpandiyarajan2004'>Github</a></span>
         </div>
         </div>
         <div class="col-lg-3 p-3">
         <div class="button">
            <div class="icon">
               <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         </div>
         <div class="col-lg-3 p-3">
         <div class="button">
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         </div>
         <div class="col-lg-3 p-3">
         <div class="button">
            <div class="icon">
               <i class="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div>
      </div>
      </div>
      </div>
      </div>
  </footer>
  </section>
  </div>
  );
}

export default Home;
