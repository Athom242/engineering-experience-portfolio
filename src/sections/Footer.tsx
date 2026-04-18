import React from 'react';



const FooterHeader: React.FC = () => {
  return (
    <div className="footer-header">
      <h1 className='title'>Engineering Experience</h1>

      <div className="container">
        <ul className="listImagePartenaire">
          <li><img src="/images/partenaire1.png" alt="Partenaire 1" /></li>
          <li><img src="/images/partenaire2.png" alt="Partenaire 2" /></li>
          <li><img src="/images/partenaire3.png" alt="Partenaire 3" /></li>
        </ul>
      </div>
    </div>
  );
}





const FooterContainer: React.FC = () => {
  return (
    <div className="footer-container">

      
        {/* IDENTITÉ */}
        <div className="footer-section">
          <h2>Engineering Experience</h2>
          <p>Building systems across software, data and engineering.</p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Engineering</li>
            <li>Data</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* EXPERTISE */}
        <div className="footer-section">
          <h3>Expertise</h3>
          <ul>
            <li>Full-Stack Development</li>
            <li>Data Analysis</li>
            <li>Systems Engineering</li>
            <li>3D & Simulation</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Email</li>
          </ul>
        </div>


    </div>
  );
}


const FooterBottom: React.FC = () => {
  return (
    <div className="footer-bottom">
      <p>© 2026 Engineering Experience. All rights reserved.</p>
    </div>
  );
}


const Footer:React.FC = () => {
  return (
    <footer className="footer">
      <FooterHeader />
      <FooterContainer />
      <FooterBottom />
    </footer>
  );
};

export default Footer;