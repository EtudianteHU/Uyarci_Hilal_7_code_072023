import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Main({ children }) {
return (
<div className="main">
<Router>
<Routes>
<Route path="/" element={<App />} />
<Route path="/flat" element={<h1>Nos appartements</h1>} />
<Route path="/about" element={<h1>A propos</h1>} />
<Route path="*" element={<h1>404 Not Found</h1>} />
</Routes>
</Router>
{children}
</div>
);
}

ReactDOM.render(
<React.StrictMode>
<Main />
</React.StrictMode>,
document.getElementById('root')
);

export default Main