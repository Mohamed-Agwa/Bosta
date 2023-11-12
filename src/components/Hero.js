import React from 'react';
import '../index.css';

const Hero = () => {
    return (
        <div className="landing-page">
      <section className="section">
        <div className="section-content">
          <i className="fas fa-search"></i>
          <h2>Real-time Tracking</h2>
          <p>Get live updates and location information of your shipments.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-content">
          <i className="fas fa-clock"></i>
          <h2>Timely Notifications</h2>
          <p>Receive notifications about delivery status and estimated arrival time.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-content">
          <i className="fas fa-map-marker-alt"></i>
          <h2>Global Coverage</h2>
          <p>Track shipments across the globe with our extensive network.</p>
        </div>
      </section>
    </div>
      );

}

export default Hero
