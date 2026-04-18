<<<<<<< HEAD:src/App.tsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
=======
import React from "react";
import { Outlet } from "react-router-dom";
>>>>>>> 889e568 (Ajout de scss et de tailwind et structuration Style):src/app/App.tsx

import Header from "../sections/Header";
import Footer from "../sections/Footer";

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