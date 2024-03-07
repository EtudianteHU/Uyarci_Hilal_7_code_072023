import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../../App';

function Main({ children }) {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/flat" element={<h1>Nos appartements</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />