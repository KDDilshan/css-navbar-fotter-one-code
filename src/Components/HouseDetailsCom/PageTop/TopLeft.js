import React from 'react';
import './topLeft.css';

export default function TopLeft({ photoURL }) {
  console.log('photoURL:', photoURL);
  return (
    <div className="topLeftContainer">
      <img src={photoURL} alt="" className="largeImage" />
    </div>
  );
}
