import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//react router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//components
import About from './pages/About';
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import MinaDetail from "./pages/MinaDetail";
import Nav from "./pages/Nav";
import Shop from "./pages/Shop";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path={'/'} element={<App/>}>
        <Route index="/app" element={<App/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/minaDetail" element={<MinaDetail />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
