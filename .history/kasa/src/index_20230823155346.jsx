import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
// import About from 
// import Logement from './pages/Logement/Logement'
// import Error from
import Footer from './components/footer/Footer'


const root = document.getElementById('root')

ReactDOM.createRoot(root).render(

<React.StrictMode>
  <Router>

  <Header />
  <Routes>
  <Route path="/"element={<Home />} />
  {/* <Route path="/about" element={<About />} /> */}
  {/* <Route path='/logements/:logementId' element={<Logement />} /> */}
  {/* <Route path="*" element={<Error />} /> */}
  </Routes>
  </Router>
    
  </React.StrictMode>
);

  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
