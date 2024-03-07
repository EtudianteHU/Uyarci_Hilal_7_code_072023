import React from 'react';
import './Main.css';
import Home from '../../pages/home/Home';

function Main({ children }) {
return (
<div className="main">
{children}
</div>
);
}

export default Main