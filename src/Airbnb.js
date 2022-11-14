import React from 'react';
import Footer from './Footer';
import Midbar from './Midbar';
import Navbar from './Navbar';
import PreFooter from './PreFooter';
import TopContent from './TopContent';
import CardDisplay from './CardDisplay';

export default function Airbnb() {
  return (
    <div>
      <Navbar />
      <TopContent />
      <Midbar />
      <CardDisplay />
      <PreFooter />
      <Footer />
    </div>
  );
}
