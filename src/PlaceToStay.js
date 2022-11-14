import React from 'react';
import AuxNavBar from './AuxNavBar';
import CardList from './CardList';
import Footer from './Footer';
import Navbar from './Navbar';
import { frames } from './Frames';

export default function PlaceToStay() {
  return (
    <div>
      <Navbar />
      <AuxNavBar />
      <CardList frames={frames} />
      <Footer />
    </div>
  );
}
