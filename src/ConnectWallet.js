import React, { useState } from 'react';
import downchevron from './assets/others/Down Chevron.png';
import x from './assets/others/x.png';
import wallet from './assets/others/walletconnect.png';
import meta from './assets/others/metamaskcolored.png';

export default function ConnectWallet() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="bkg" onClick={toggleModal}>
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
  );
}
