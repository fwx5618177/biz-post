import React from 'react';
import CTA from '../components/CTA';

const AboutPage: React.FC = () => {
  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">About <span>Moxxi</span> Design</h1>
            <p className="about-hero__description">
              We are a creative design agency passionate about crafting beautiful, functional, and user-friendly digital experiences that help businesses grow and succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="about-mission__grid">
            <div className="about-mission__content">
              <h2 className="about-mission__title">Our Mission</h2>
              <p className="about-mission__description">
                At Moxxi Design, our mission is to empower businesses with exceptional design solutions that elevate their brand, engage their audience, and drive meaningful results. We believe that great design is not just about aesthetics, but about solving problems and creating experiences that resonate with users.
              </p>
              <p className="about-mission__description">
                We are committed to understanding our clients' unique needs and delivering tailored solutions that exceed expectations. Through collaborative partnerships and a dedication to excellence, we aim to be the catalyst for our clients' success in the digital landscape.
              </p>
            </div>
            <div className="about-mission__image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our Mission" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="about-values__title">Our Core Values</h2>
          <div className="about-values__grid">
            <div className="about-values__card">
              <div className="about-values__card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="about-values__card-title">Excellence</h3>
              <p className="about-values__card-description">
                We strive for excellence in everything we do, from the smallest details to the biggest projects. Our commitment to quality ensures that every design solution we deliver meets the highest standards.
              </p>
            </div>
            <div className="about-values__card">
              <div className="about-values__card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="about-values__card-title">Innovation</h3>
              <p className="about-values__card-description">
                We embrace innovation and continuously explore new ideas, technologies, and approaches to design. By staying ahead of trends and pushing boundaries, we deliver forward-thinking solutions that stand out.
              </p>
            </div>
            <div className="about-values__card">
              <div className="about-values__card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="about-values__card-title">Collaboration</h3>
              <p className="about-values__card-description">
                We believe in the power of collaboration, both within our team and with our clients. By working together, sharing ideas, and valuing diverse perspectives, we create better, more impactful design solutions.
              </p>
            </div>
            <div className="about-values__card">
              <div className="about-values__card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="about-values__card-title">Integrity</h3>
              <p className="about-values__card-description">
                We conduct our business with the highest level of integrity, honesty, and transparency. We build trust with our clients by being reliable, accountable, and always acting in their best interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2 className="about-team__title">Meet Our Team</h2>
          <p className="about-team__description">
            Our talented team of designers, developers, and strategists are passionate about creating exceptional digital experiences.
          </p>
          <div className="about-team__grid">
            <div className="about-team__member">
              <div className="about-team__member-image">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Sarah Johnson" />
              </div>
              <h3 className="about-team__member-name">Sarah Johnson</h3>
              <p className="about-team__member-role">Founder & Creative Director</p>
              <div className="about-team__member-social">
                <a href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-team__member">
              <div className="about-team__member-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="David Chen" />
              </div>
              <h3 className="about-team__member-name">David Chen</h3>
              <p className="about-team__member-role">Lead UX Designer</p>
              <div className="about-team__member-social">
                <a href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-team__member">
              <div className="about-team__member-image">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Emily Rodriguez" />
              </div>
              <h3 className="about-team__member-name">Emily Rodriguez</h3>
              <p className="about-team__member-role">UI Designer</p>
              <div className="about-team__member-social">
                <a href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-team__member">
              <div className="about-team__member-image">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Michael Taylor" />
              </div>
              <h3 className="about-team__member-name">Michael Taylor</h3>
              <p className="about-team__member-role">Frontend Developer</p>
              <div className="about-team__member-social">
                <a href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default AboutPage; 