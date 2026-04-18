import React from "react";
import { Outlet } from "react-router-dom";

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