import React from 'react';
import './index.css';
import image3 from './assets/images/image 3.png';
import image4 from './assets/images/image 4.png';
import image5 from './assets/images/image 5.png';
import image6 from './assets/images/image 6.png';

export default function TopContent() {
  return (
    <div className="topcontent">
      <div id="textandsearch">
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the{' '}
          <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="search">
          <input type="text" placeholder="Search for location" />
          <button id="search">Search</button>
        </div>
      </div>
      <div id="grid">
        <div id="firstcol">
          <img src={image4} alt="house 4" />
          <img src={image6} alt="house 6" />
        </div>
        <div id="secondcol">
          <img src={image3} alt="house 3" />
          <img src={image5} alt="house 5" />
        </div>
      </div>
    </div>
  );
}
