import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const handleLogout = () => {
    if (onLogout) onLogout();
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top py-2 pe-4" style={{ backgroundColor: "#e6e6e6ff" }}>
      <div className="container-fluid">

        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Company Logo"
            width="60"
            height="60"
            id="logo"
            className="me-2 kid-logo"
          />
          <div className="brand-content">
            <h4 className="brand-title mt-sm-2 mt-md-1 mb-0 fw-bolder custom-title">KidCare</h4>
            <p className="brand-subtitle mb-0 brand-sub text-muted">
              Your child's health, our priority
            </p>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <div className="navbar-brand d-flex align-items-center">
                <img
                  src={logo}
                  alt="Company Logo"
                  width="60"
                  height="60"
                  id="logo"
                  className="me-2 kid-logo"
                />
                <div className="brand-content">
                  <h4 className="brand-title mt-sm-2 mt-md-1 mb-0 fw-bolder custom-title">KidCare</h4>
                  <p className="brand-subtitle mb-0 brand-sub text-muted">
                    Your child's health, our priority
                  </p>
                </div>
              </div>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <button 
                  className="nav-link btn btn-link fw-normal px-3 py-2 border-0 text-start w-100" 
                  type="button"
                  data-bs-dismiss="offcanvas"
                  onClick={() => window.location.href = '/'}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn btn-link fw-normal px-3 py-2 border-0 text-start w-100" 
                  type="button"
                  data-bs-dismiss="offcanvas"
                  onClick={() => window.location.href = '#doctor-section'}
                >
                  Our Doctors
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn btn-link fw-normal px-3 py-2 border-0 text-start w-100" 
                  type="button"
                  data-bs-dismiss="offcanvas"
                  onClick={() => window.location.href = '#service-section'}
                >
                  Services
                </button>
              </li>
            </ul>

            <div className="ms-lg-5">
              {isLoggedIn ? (
                <button
                  className="btn btn-logout text-white rounded-pill px-4 py-2 fw-medium w-100"
                  onClick={handleLogout}
                  data-bs-dismiss="offcanvas"
                >
                  Logout
                </button>
              ) : (
                <button 
                  className="btn btn-logout text-white rounded-pill px-4 py-2 fw-medium w-100"
                  data-bs-dismiss="offcanvas"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
