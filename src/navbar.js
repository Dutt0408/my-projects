// src/App.js
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import './images.css';

function App() {
  const [urlParams, setUrlParams] = useState({});
  const [qrCodeData, setQrCodeData] = useState('');
  const [name, setName] = useState('Dutt'); // Default name
  const [lastName, setLastName] = useState('Patel');
  useEffect(() => {
    // Function to extract URL parameters
    const getUrlParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const params = {};
      for (const [key, value] of searchParams) {
        params[key] = value;
      }
      return params;
    };
    console.log(urlParams);
    // Extract URL parameters and update state
    const params = getUrlParams();
    setUrlParams(params);

    // Set name from parameters if available
    if (params.name) {
      setName(params.name);
      
    }
    if (params.lastName) {
      setLastName(params.lastName);
    }

    // Generate QR code data based on URL parameters
    const qrCodeData = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');


    setQrCodeData(qrCodeData);
   
  }, [urlParams]); 

  return (
    <div>
      <div className="bdy">
        <h2 className='Tttle'>Sabha Attendance QRCode</h2><br />

        
        {qrCodeData && (
          <div>
            <QRCode className='Qrsze' value={qrCodeData} />
          </div>
        )}
        <div className="redtxt">
         Name: {name} {lastName} 
        </div>
      </div>
    </div>
  );
}

export default App;
