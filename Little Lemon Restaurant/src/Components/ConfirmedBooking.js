import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

const ConfirmedBooking = () => {
    const vanish= ()=>{
        const i = document.getElementById("confirmed-booking")
        console.log(i);
        i.style.visibility= "hidden";
    }
  return (
    <div className="confirmed-booking" id='confirmed-booking'>
      <h2 className="confirmation-title">
        Booking Confirmed!{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          className="icon-svg"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.42z" />
        </svg>
      </h2>
      <p>Your reservation has been successfully booked.</p>
      <button className="close-button" onClick={vanish}><Link to="/">Close</Link></button>
    </div>
  );
};

export default ConfirmedBooking;