import React from 'react';
import MBToken from './assets/others/MBToken.png';
import Metamask from './assets/others/metamask.png';
import Opensea from './assets/others/opensea.png';
import './index.css';

export default function Midbar() {
  return (
    <div className="midbar">
      <img src={MBToken} alt="MBToken" />
      <img src={Metamask} alt="Metamask" />
      <img src={Opensea} alt="Opensea" />
    </div>
  );
}
