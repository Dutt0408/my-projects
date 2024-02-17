// src/App.js
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import './images.css';

function App() {
  const [urlParams, setUrlParams] = useState({});
  const [qrCodeData, setQrCodeData] = useState('');
  const [name, setName] = useState(''); // Default name
  const [lastName, setLastName] = useState('');
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

        <h3 className='NameGreet'> Jay Swaminarayan {name} {lastName} <br /><br />
          Please present the QR code below upon your entry:</h3>

        {qrCodeData && (
          <div>
            <QRCode value={qrCodeData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
