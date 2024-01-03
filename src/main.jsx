import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './assets/Pages/Home.jsx'
import { About } from './assets/Pages/About.jsx'
import { Appartement } from './assets/Pages/Appartement.jsx'
import { Error } from './assets/Pages/Error.jsx'
import './assets/Styles/style.css'

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/About" element={<About />} />
      <Route path="/Appartement/:id" element={<Appartement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
