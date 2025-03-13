import React from 'react';
import CTA from '../components/CTA';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'UI Design',
      description: 'We create intuitive and beautiful user interfaces that delight your users and enhance their experience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      features: [
        'User-centered interface design',
        'Responsive layouts for all devices',
        'Interactive prototypes',
        'Design system creation',
        'Usability testing and iteration'
      ]
    },
    {
      id: 2,
      title: 'UX Design',
      description: 'We focus on user experience that creates emotional connections and keeps users coming back.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      features: [
        'User research and persona development',
        'Customer journey mapping',
        'Information architecture',
        'Wireframing and prototyping',
        'Usability testing and optimization'
      ]
    },
    {
      id: 3,
      title: 'Branding',
      description: 'We develop strong brand identities that communicate your values and resonate with your audience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      features: [
        'Logo design and visual identity',
        'Brand strategy and positioning',
        'Brand guidelines and style guides',
        'Marketing collateral design',
        'Brand voice and messaging'
      ]
    },
    {
      id: 4,
      title: 'Web Design',
      description: 'We design beautiful, functional websites that engage visitors and drive conversions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      features: [
        'Custom website design',
        'Responsive and mobile-friendly layouts',
        'E-commerce solutions',
        'Content management systems',
        'Performance optimization'
      ]
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We start by understanding your business, goals, target audience, and project requirements through in-depth research and consultation.'
    },
    {
      number: 2,
      title: 'Strategy',
      description: 'Based on our findings, we develop a strategic plan that outlines the approach, timeline, and deliverables for your project.'
    },
    {
      number: 3,
      title: 'Design',
      description: 'Our designers create wireframes, mockups, and prototypes that bring your vision to life, incorporating feedback at every stage.'
    },
    {
      number: 4,
      title: 'Implementation',
      description: 'We transform the approved designs into fully functional digital experiences, ensuring attention to detail and quality.'
    }
  ];

  return (
    <main className="services">
      <section className="services__hero">
        <div className="container">
          <h1 className="services__hero-title">Our <span>Design</span> Services</h1>
          <p className="services__hero-description">
            We offer a comprehensive range of design services to help you create exceptional digital experiences that stand out from the competition.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="services__card">
              <div className="services__card-icon">
                {service.icon}
              </div>
              <h2 className="services__card-title">{service.title}</h2>
              <p className="services__card-description">{service.description}</p>
              <ul className="services__card-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="services__process">
        <div className="container">
          <h2 className="services__process-title">Our Design Process</h2>
          <div className="services__process-grid">
            {processSteps.map((step) => (
              <div key={step.number} className="services__process-step">
                <div className="services__process-step-number">{step.number}</div>
                <h3 className="services__process-step-title">{step.title}</h3>
                <p className="services__process-step-description">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default ServicesPage; 