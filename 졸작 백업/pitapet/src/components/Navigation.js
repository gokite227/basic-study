import React from "react";
import { Link } from "react-router-dom";
import "resources/css/style.css"

const Navigation = () => (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav" style={{backgroundColor:"#d3cbb4"}} >
  <div class="container px-5">
      <a class="navbar-brand fw-bold" href="#page-top">Pit a Pet</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li class="nav-item"><Link class="nav-link me-lg-3" to="/">Home</Link></li>
              <li class="nav-item"><Link class="nav-link me-lg-3" to="/Borad">Borad</Link></li>
              <li class="nav-item"><Link class="nav-link me-lg-3" to="/CalendarApp">Calendar</Link></li>
              <li class="nav-item"><Link class="nav-link me-lg-3" to="/Map">Map</Link></li>
              <li class="nav-item"><Link class="nav-link me-lg-3" to="/profile">profile</Link></li>
          </ul>
      </div>
  </div>
</nav>    
    </div>
);
export default Navigation;