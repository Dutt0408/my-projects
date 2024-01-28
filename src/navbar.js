import React from 'react';
import './apple.css'

export default function Confirmation() {
  

  return (
    <div className="cookie-card">
      <span className="title">Registration Process</span>
      <p className="description">
        By filling this form, you agree that you might be contacted for upcoming events at International Student Sabha
        <br />
        <br />
        <a href="https://www.baps.org/Global-Network/North-America/Toronto/News.aspx">Previous Events</a>.
      </p>
      <div className="actions">
        <button
          className="accept"
          onClick={() => {
            window.location.href = 'https://na.baps.org/learn';
          }}
        >
          Learn
        </button>
        <button
          className="accept"
          onClick={() => {
            window.location.href = 'https://internationalstudentregistration.netlify.app';
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
