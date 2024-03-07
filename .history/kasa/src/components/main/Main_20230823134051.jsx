import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';

function Main({ children }) {
return (
<div className="main">
{children}
</div>
);
}

export default