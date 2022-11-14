import React from 'react';
import logofooter from './assets/others/logofooter.png';
import facebook from './assets/others/facebook.png';
import instagram from './assets/others/instagram.png';
import twitter from './assets/others/twitter.png';
import copyright from './assets/others/copyright.png';

export default function Footer() {
  return (
    <div id="footer">
      <div id="logocol">
        <div>
          <img src={logofooter} alt="logo" />
        </div>
        <div className="social">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
        <div className="copy">
          <div>
            <img src={copyright} alt="copy" />
          </div>
          <p>2022 Metabnb</p>
        </div>
      </div>
      <div className="footerlinks">
        <a href="#Community">
          <h3>Community</h3>
        </a>
        <a href="#NFT">NFT</a>
        <a href="#Tokens">Tokens</a>
        <a href="#Landlord">Landlord</a>
        <a href="#Discord">Discord</a>
      </div>
      <div className="footerlinks">
        <a href="#Places">
          <h3>Places</h3>
        </a>
        <a href="#Castle">Castle</a>
        <a href="#Farm">Farm</a>
        <a href="#Beach">Beach</a>
        <a href="#Learn more">Learn more</a>
      </div>
      <div className="footerlinks">
        <a href="#About us">
          <h3>About us</h3>
        </a>
        <a href="#Road map">Road map</a>
        <a href="#Creators">Creators</a>
        <a href="#Career">Career</a>
        <a href="#Contact us">Contact us</a>
      </div>
    </div>
  );
}
