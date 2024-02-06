import React from 'react';
import './apple.css'
import './images.css'

export default function Confirmation() {
  

  return (
    <div className="whole">
       

    
      
    <div className="cookie-card">
    <h1 className="RegText">Registration</h1>
      <p className="description">
        By filling this form, you agree that you might be contacted for upcoming events at International Student Sabha
        <br />
    

      </p>
      <br></br>
      <div className="actions">
    

        <button
  className="accept"
  onClick={() => {
    window.open('https://heroic-starburst-bf4135.netlify.app/', '_blank');
  }}
>
  Accept
</button>

      </div>
    </div>
    </div>
  );
}
