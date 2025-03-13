import React, { useState } from 'react';
import CTA from '../components/CTA';

const ContactPage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "As a beginner in UI/UX, this blog has been an invaluable resource. The clear explanations and practical tips have helped me level up my skills significantly.",
      author: "John Doe",
      company: "SOLVD"
    },
    {
      id: 2,
      text: "The insights shared on this platform have transformed our approach to digital product design. Highly recommended for any design team.",
      author: "Sarah Johnson",
      company: "Design Lead"
    },
    {
      id: 3,
      text: "I've implemented many of the strategies discussed here and seen immediate improvements in user engagement. Thank you for the excellent content!",
      author: "Michael Chen",
      company: "Product Manager"
    }
  ];

  const handlePrevTestimonial = () => {
    setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">Get in <span>Touch</span></h1>
            <p className="contact-hero__description">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-content__grid">
            <div className="contact-content__left">
              <div className="contact-content__intro">
                <div className="contact-content__user">
                  <div className="contact-content__avatar">
                    <img src="/src/assets/images/avatar.svg" alt="John Doe" />
                  </div>
                  <div>
                    <div className="contact-content__name">John Doe</div>
                    <div className="contact-content__position">Lead Designer</div>
                  </div>
                </div>
                
                <p className="contact-content__text">
                  I'm passionate about creating digital experiences that not only look beautiful but also solve real problems for users. With over 8 years of experience in UI/UX design, I've helped businesses of all sizes transform their digital presence.
                </p>
              </div>
              
              <div className="contact-content__info">
                <h3 className="contact-content__info-title">Contact Information</h3>
                <div className="contact-content__info-list">
                  <div className="contact-content__info-item">
                    <div className="contact-content__info-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="contact-content__info-item-content">
                      <h4>Email</h4>
                      <a href="mailto:moxii@gmail.com">moxii@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="contact-content__info-item">
                    <div className="contact-content__info-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="contact-content__info-item-content">
                      <h4>Address</h4>
                      <p>4565, Street Famous, New York, USA</p>
                    </div>
                  </div>
                  
                  <div className="contact-content__info-item">
                    <div className="contact-content__info-item-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="contact-content__info-item-content">
                      <h4>Phone</h4>
                      <a href="tel:+445648654897">+44 5648 654 897</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-content__social">
                <h3 className="contact-content__social-title">Follow Us</h3>
                <div className="contact-content__social-list">
                  <a href="#" className="contact-content__social-item" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="contact-content__social-item" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="contact-content__social-item" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="contact-content__social-item" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="contact-content__testimonial">
                <h3 className="contact-content__testimonial-title">What Our Clients Say</h3>
                <div className="contact-content__testimonial-content">
                  <p className="contact-content__testimonial-text">
                    {testimonials[activeTestimonial].text}
                  </p>
                  
                  <div className="contact-content__testimonial-author">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="contact-content__testimonial-company">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
                
                <div className="contact-content__testimonial-nav">
                  <button 
                    className="contact-content__testimonial-nav-button"
                    onClick={handlePrevTestimonial}
                    aria-label="Previous testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button 
                    className="contact-content__testimonial-nav-button"
                    onClick={handleNextTestimonial}
                    aria-label="Next testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="contact-content__right">
              <h2 className="contact-content__right-title">Send Us a Message</h2>
              <p className="contact-content__right-subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="contact-content__form">
                <div className="contact-content__form-group">
                  <label className="contact-content__form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="contact-content__form-input" 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                
                <div className="contact-content__form-group">
                  <label className="contact-content__form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="contact-content__form-input" 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                
                <div className="contact-content__form-group">
                  <label className="contact-content__form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    className="contact-content__form-input" 
                    placeholder="Enter your phone number" 
                  />
                </div>
                
                <div className="contact-content__form-group">
                  <label className="contact-content__form-label">Subject</label>
                  <input 
                    type="text" 
                    className="contact-content__form-input" 
                    placeholder="What is this regarding?" 
                  />
                </div>
                
                <div className="contact-content__form-group">
                  <label className="contact-content__form-label">Message</label>
                  <textarea 
                    className="contact-content__form-input contact-content__form-textarea" 
                    placeholder="Tell us about your project or inquiry" 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="contact-content__form-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default ContactPage; 