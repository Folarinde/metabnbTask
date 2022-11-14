import React from 'react';
import image7 from './assets/images/image 7.png';
import image8 from './assets/images/image 8.png';
import image9 from './assets/images/image 9.png';

export default function PreFooter() {
  return (
    <div className="prefooter">
      <div className="textdiv">
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>Learn more</button>
      </div>
      <div className="picdiv">
        <img id="fi" src={image9} alt="house7" />
        <img id="si" src={image7} alt="house8" />
        <img id="ti" src={image8} alt="house9" />
      </div>
    </div>
  );
}
