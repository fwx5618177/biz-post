import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div>
            <div className="footer__logo">
              <Link to="/">
                <div style={{ display: 'flex' }}>
                  <img src="/src/assets/logo-part1.svg" alt="Logo Part 1" />
                  <img src="/src/assets/logo-part2.svg" alt="Logo Part 2" />
                  <img src="/src/assets/logo-part4.svg" alt="Logo Part 4" />
                  <img src="/src/assets/logo-part5.svg" alt="Logo Part 5" />
                </div>
              </Link>
            </div>
            <div className="footer__about">
              <p>
                Moxxi Design is a creative design agency specializing in UI/UX design, 
                branding, and digital experiences that help businesses grow and succeed.
              </p>
            </div>
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="footer__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="footer__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="footer__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="footer__title">Services</h3>
            <div className="footer__links">
              <Link to="/services" className="footer__links-item">UI Design</Link>
              <Link to="/services" className="footer__links-item">UX Design</Link>
              <Link to="/services" className="footer__links-item">Branding</Link>
              <Link to="/services" className="footer__links-item">Web Design</Link>
              <Link to="/services" className="footer__links-item">Mobile Design</Link>
            </div>
          </div>
          
          <div>
            <h3 className="footer__title">Company</h3>
            <div className="footer__links">
              <Link to="/about" className="footer__links-item">About Us</Link>
              <Link to="/about" className="footer__links-item">Our Team</Link>
              <Link to="/about" className="footer__links-item">Careers</Link>
              <Link to="/contact" className="footer__links-item">Contact Us</Link>
              <Link to="/blog" className="footer__links-item">Blog</Link>
            </div>
          </div>
          
          <div>
            <h3 className="footer__title">Resources</h3>
            <div className="footer__links">
              <Link to="/blog" className="footer__links-item">Design Guide</Link>
              <Link to="/blog" className="footer__links-item">Templates</Link>
              <Link to="/blog" className="footer__links-item">Tutorials</Link>
              <Link to="/portfolio" className="footer__links-item">Case Studies</Link>
              <Link to="/contact" className="footer__links-item">FAQ</Link>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} Moxxi Design. All rights reserved.
          </div>
          <div className="footer__legal">
            <Link to="/about" className="footer__legal-link">Privacy Policy</Link>
            <Link to="/about" className="footer__legal-link">Terms of Service</Link>
            <Link to="/about" className="footer__legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 