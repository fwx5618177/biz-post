import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: '/src/assets/ui-mastery-icon.svg',
      title: 'UI Mastery',
      description: 'Create intuitive and beautiful user interfaces that delight your users and enhance their experience.',
      link: '/services/ui-design'
    },
    {
      id: 2,
      icon: '/src/assets/user-delight-icon.svg',
      title: 'User Delight',
      description: 'Focus on user experience that creates emotional connections and keeps users coming back.',
      link: '/services/ux-design'
    },
    {
      id: 3,
      icon: '/src/assets/creative-flow-icon.svg',
      title: 'Creative Flow',
      description: 'Streamline your design process with our proven methodologies and creative workflows.',
      link: '/services/design-process'
    },
    {
      id: 4,
      icon: '/src/assets/design-essentials-icon.svg',
      title: 'Design Essentials',
      description: 'Master the fundamentals of design that form the foundation of exceptional digital products.',
      link: '/services/design-fundamentals'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <h2 className="features__title">
            Our <span>Design</span> Services
          </h2>
          <p className="features__description">
            We offer a comprehensive range of design services to help you create exceptional digital experiences that stand out from the competition.
          </p>
        </div>
        <div className="features__grid">
          {features.map((feature) => (
            <div key={feature.id} className="features__card">
              <div className="features__card-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-description">{feature.description}</p>
              <a href={feature.link} className="features__card-link">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 