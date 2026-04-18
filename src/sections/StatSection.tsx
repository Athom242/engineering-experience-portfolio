import React from 'react';


const StatSection: React.FC = () => {
  return (
    <section className="stat-section">
        <div className="stat-container">
            <div className="stat-item">
                <h2>10+</h2>
                <p>Projects Completed</p>
            </div>
            <div className="stat-item">
                <h2>5</h2>
                <p>Years of Experience</p>
            </div>
            <div className="stat-item">
                <h2>3</h2>
                <p>Data Insights</p>
            </div>
        </div>
    </section>
  );
};


export default StatSection;