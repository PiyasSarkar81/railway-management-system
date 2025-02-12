import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to the Railway Management System</h1>
        <p>Book your train tickets hassle-free!</p>
      </div>

      {/* Navigation Buttons */}
      <div className="button-section">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/register" className="btn btn-secondary">
          Register
        </Link>
      </div>

      {/* Booking Section (Visible only if logged in) */}
      {isLoggedIn ? (
        <div className="booking-section">
          <h2>Book Your Tickets</h2>
          <p>You are logged in. Proceed to book your tickets:</p>
          <Link to="/trains" className="btn btn-success">
            Check Trains
          </Link>
        </div>
      ) : (
        <div className="login-prompt">
          <p>
            Please <Link to="/login">log in</Link> to access the booking
            section.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
