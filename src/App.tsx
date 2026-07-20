import React from "react";
// import { useState } from 'react';
import { Outlet } from "react-router-dom";

import Header from "./sections/Header";
import Footer from "./sections/Footer";
import './App.css';

//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'

const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />

      {/* Les pages s'affichent ici */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;