import React from 'react';
import './Banner.css';
import logo from '../assets/ibrahim.webp';      // large device banner
import logosm from '../assets/banner-sm.jpg';   // small device banner

const Banner = () => {
  return (
    <>
      {/* ===== Small Devices Banner ===== */}
      <div className="banner-container d-sm-none position-relative">
        <img
          src={logosm}
          alt="Pediatric Doctor Banner"
          className="img-fluid w-100 banner-image"
        />

        <div className="position-absolute top-50 start-0 translate-middle-y w-100 px-3 banner-content">
          <div className="row">
            <div className="col-7 text-start">
              {/* <h2 className="fw-bold fs-2 lh-sm mb-2 text-dark">
                Where Little Patients<br /> Get Big Care
              </h2> */}
              <p className="fs-4 fw-semibold text-secondary mb-4">
                Expert Pediatricians Dedicated to Your Child’s Health and Wellness
              </p>
              <a className="btn btn-sm text-white rounded-pill px-3 shadow-sm" href='#Appointment-Form' style={{ background: 'linear-gradient(135deg, #ee0d0d, #b60505)' }}>
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Larger Devices Banner ===== */}
      <div className="banner-container d-none d-sm-block">
        <a href="#Appointment-Form">
          <img
            src={logo}
            alt="Pediatric Banner"
            className="img-fluid w-100 banner-image"
          />
        </a>

      </div>
    </>
  );
};

export default Banner;
