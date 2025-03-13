import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="container cta__container">
        <h2 className="cta__title">Ready to Transform Your Digital Experience?</h2>
        <p className="cta__description">
          Let's work together to create beautiful, functional, and user-friendly digital experiences that help your business grow and succeed in the digital world.
        </p>
        <div className="cta__buttons">
          <a href="/contact" className="cta__buttons-primary">Get Started</a>
          <a href="/portfolio" className="cta__buttons-secondary">View Our Work</a>
        </div>
      </div>
      <div className="cta__shape cta__shape--1"></div>
      <div className="cta__shape cta__shape--2"></div>
    </section>
  );
};

export default CTA; 