import React, { useState } from 'react';
import Logo from './assets/others/Logo.png';
import './index.css';
import downchevron from './assets/others/Down Chevron.png';
import x from './assets/others/x.png';
import wallet from './assets/others/walletconnect.png';
import meta from './assets/others/metamaskcolored.png';

export default function Navbar() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <nav>
        <a href="./Airbnb">Home</a>
        <a href="./PlaceToStay">Place to stay</a>
        <a href="#NFTs">NFTs</a>
        <a href="#Community">Community</a>
      </nav>
      <button onClick={toggleModal}>Connect wallet</button>
      {modal && (
        <div>
          <div className="bkg" onClick={toggleModal}></div>
          <div className="connectWallet">
            <div className="connect">
              <h3>Connect wallet</h3>
              <img src={x} alt="x" onClick={toggleModal} />
            </div>
            <hr />
            <p>Choose your preferred wallet:</p>
            <div className="meta">
              <img src={meta} alt="meta" />
              <img src={downchevron} alt="" />
            </div>
            <div className="wallet">
              <img src={wallet} alt="wallet" />
              <img src={downchevron} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
