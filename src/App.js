import Airbnb from './Airbnb';
import './App.css';
import PlaceToStay from './PlaceToStay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Airbnb />} />
          <Route path="/PlaceToStay" element={<PlaceToStay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
