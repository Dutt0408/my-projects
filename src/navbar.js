// src/App.js
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [urlParams, setUrlParams] = useState({});
  const [qrCodeData, setQrCodeData] = useState('');

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

    // Extract URL parameters and update state
    const params = getUrlParams();
    setUrlParams(params);

    // Generate QR code data based on URL parameters
    const qrCodeData = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    setQrCodeData(qrCodeData);
  }, []);

  return (
    <div>
      <h1>QR Code Generator</h1>
      {Object.keys(urlParams).length > 0 && (
        <div>
          <h2>URL Parameters:</h2>
          <ul>
            {Object.entries(urlParams).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      {qrCodeData && (
        <div>
          <h2>QR Code:</h2>
          <QRCode value={qrCodeData} />
        </div>
      )}
    </div>
  );
}

export default App;
