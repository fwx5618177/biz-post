import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "Working with Moxxi Design was a game-changer for our business. Their attention to detail and creative approach helped us stand out in a crowded market. The user experience they designed has significantly increased our conversion rates.",
      author: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      text: "The team at Moxxi Design truly understands how to create designs that not only look beautiful but also drive results. They took the time to understand our business goals and delivered a solution that exceeded our expectations.",
      author: "Michael Chen",
      position: "Marketing Director, Innovate Inc",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      text: "I've worked with many design agencies over the years, but Moxxi Design stands out for their strategic thinking and user-centered approach. They don't just create pretty designs; they create experiences that solve real business problems.",
      author: "Emily Rodriguez",
      position: "Product Manager, SaaS Platform",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">
            What Our <span>Clients</span> Say
          </h2>
          <p className="testimonials__description">
            Don't just take our word for it. Here's what our clients have to say about our design services and the impact we've had on their businesses.
          </p>
        </div>

        <div className="testimonials__slider">
          <div className="testimonials__slide">
            <div className="testimonials__slide-content">
              <div className="testimonials__slide-quote">"</div>
              <p className="testimonials__slide-text">
                {testimonials[activeSlide].text}
              </p>
              <div className="testimonials__slide-author">
                <div className="testimonials__slide-avatar">
                  <img src={testimonials[activeSlide].avatar} alt={testimonials[activeSlide].author} />
                </div>
                <div className="testimonials__slide-info">
                  <h4>{testimonials[activeSlide].author}</h4>
                  <p>{testimonials[activeSlide].position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials__controls">
            <button className="testimonials__controls-button" onClick={prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="testimonials__controls-button" onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dots-item ${index === activeSlide ? 'testimonials__dots-item--active' : ''}`}
                onClick={() => setActiveSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 