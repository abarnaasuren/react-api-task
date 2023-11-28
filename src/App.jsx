// App.jsx
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import PhotoGallery from './pages/PhotoGallery';
import Navbar from './components/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<PhotoGallery/>}/>
        <Route path="/photo-gallery" element={<PhotoGallery/>}/>
        <Route path="/signup" element={<PhotoGallery/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
