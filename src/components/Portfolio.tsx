import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' },
    { id: 'ui', label: 'UI/UX' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Eco-Friendly E-commerce',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Organic Food Brand',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Financial Dashboard',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Travel Booking Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Smart Home App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <h2 className="portfolio__title">
            Our <span>Portfolio</span>
          </h2>
          <p className="portfolio__description">
            Explore our diverse portfolio of design projects that showcase our creativity, expertise, and commitment to delivering exceptional digital experiences.
          </p>
        </div>

        <div className="portfolio__filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`portfolio__filters-button ${activeFilter === filter.id ? 'portfolio__filters-button--active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filteredProjects.map(project => (
            <a href={`/portfolio/${project.id}`} className="portfolio__item" key={project.id}>
              <img src={project.image} alt={project.title} className="portfolio__item-image" />
              <div className="portfolio__item-overlay">
                <h3 className="portfolio__item-title">{project.title}</h3>
                <p className="portfolio__item-category">
                  {filters.find(filter => filter.id === project.category)?.label}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="portfolio__more">
          <a href="/portfolio" className="portfolio__more-button">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 