import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Elevate Your Digital Experience with <span>Moxxi</span> Design
          </h1>
          <p className="hero__description">
            We create beautiful, functional, and user-friendly digital experiences that help businesses grow and succeed in the digital world.
          </p>
          <div className="hero__cta">
            <a href="/contact" className="hero__cta-primary">Get Started</a>
            <a href="/portfolio" className="hero__cta-secondary">View Our Work</a>
          </div>
        </div>
        <div className="hero__image">
          <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Design Showcase" />
        </div>
      </div>
      <div className="hero__shape hero__shape--1"></div>
      <div className="hero__shape hero__shape--2"></div>
    </section>
  );
};

export default Hero; 