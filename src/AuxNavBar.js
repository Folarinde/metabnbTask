import React from 'react';
import setting from './assets/others/setting.png';

export default function AuxNavBar() {
  return (
    <div id="aux">
      <a href="#Resturant">Resturant</a>
      <a href="#Cottage">Cottage</a>
      <a href="#Castle">Castle</a>
      <a href="#fantast city">fantast city</a>
      <a href="#beach">beach</a>
      <a href="#Carbins">Carbins</a>
      <a href="#Off-grid">Off-grid</a>
      <a href="#Off-grid">Off-grid</a>
      <div id="location">
        <input placeholder="Location" />
        <img src={setting} alt="setting"></img>
      </div>
    </div>
  );
}
