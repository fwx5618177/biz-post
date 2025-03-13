import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import portfolio1 from '../assets/images/portfolio-1.svg';
import portfolio2 from '../assets/images/portfolio-2.svg';
import portfolio3 from '../assets/images/portfolio-3.svg';
import portfolio4 from '../assets/images/portfolio-4.svg';
import portfolio5 from '../assets/images/portfolio-5.svg';
import portfolio6 from '../assets/images/portfolio-6.svg';
import portfolio7 from '../assets/images/portfolio-7.svg';
import portfolio8 from '../assets/images/portfolio-8.svg';
import testimonial1 from '../assets/images/testimonial-1.svg';
import testimonial2 from '../assets/images/testimonial-2.svg';
import testimonial3 from '../assets/images/testimonial-3.svg';

// Mock data for portfolio projects
const projects = [
  {
    id: 1,
    title: 'Mobile Banking App',
    category: 'UX/UI Design',
    image: portfolio1,
    tags: ['Mobile', 'App', 'Banking', 'UI Design'],
    featured: true
  },
  {
    id: 2,
    title: 'E-commerce Website Redesign',
    category: 'Web Design',
    image: portfolio2,
    tags: ['Web', 'E-commerce', 'Redesign'],
    featured: true
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    category: 'UI Design',
    image: portfolio3,
    tags: ['Dashboard', 'Healthcare', 'Data Visualization'],
    featured: false
  },
  {
    id: 4,
    title: 'Travel Booking Platform',
    category: 'UX/UI Design',
    image: portfolio4,
    tags: ['Travel', 'Booking', 'Platform', 'UX Research'],
    featured: false
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    image: portfolio5,
    tags: ['Mobile', 'Fitness', 'Tracking', 'Health'],
    featured: false
  },
  {
    id: 6,
    title: 'Restaurant Ordering System',
    category: 'Web App',
    image: portfolio6,
    tags: ['Restaurant', 'Ordering', 'System', 'Web App'],
    featured: false
  },
  {
    id: 7,
    title: 'Smart Home Control Interface',
    category: 'UI Design',
    image: portfolio7,
    tags: ['Smart Home', 'IoT', 'Control', 'Interface'],
    featured: false
  },
  {
    id: 8,
    title: 'Educational Platform',
    category: 'Web Design',
    image: portfolio8,
    tags: ['Education', 'Platform', 'Learning', 'Web'],
    featured: false
  }
];

// All unique categories from projects
const allCategories = ['All', ...new Set(projects.map(project => project.category))];

const PortfolioShowcasePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(projects);

  // Filter projects based on category and search query
  const filterProjects = (category: string, query: string) => {
    let filtered = projects;
    
    // Filter by category
    if (category !== 'All') {
      filtered = filtered.filter(project => project.category === category);
    }
    
    // Filter by search query
    if (query.trim() !== '') {
      const lowercaseQuery = query.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(lowercaseQuery) || 
        project.category.toLowerCase().includes(lowercaseQuery) ||
        project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
    }
    
    setVisibleProjects(filtered);
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterProjects(category, searchQuery);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterProjects(activeCategory, query);
  };

  return (
    <main className="portfolio-showcase">
      <section className="portfolio-showcase__hero">
        <div className="container">
          <div className="portfolio-showcase__hero-content">
            <h1 className="portfolio-showcase__hero-title">Portfolio <span>Showcase</span></h1>
            <p className="portfolio-showcase__hero-description">
              Explore my latest projects and creative work across various industries and platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase__featured">
        <div className="container">
          <h2 className="portfolio-showcase__section-title">Featured Projects</h2>
          <div className="portfolio-showcase__featured-grid">
            {projects.filter(project => project.featured).map(project => (
              <div key={project.id} className="portfolio-showcase__featured-item">
                <div className="portfolio-showcase__featured-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-showcase__featured-overlay">
                    <Link to={`/portfolio/${project.id}`} className="portfolio-showcase__featured-link">
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="portfolio-showcase__featured-content">
                  <span className="portfolio-showcase__featured-category">{project.category}</span>
                  <h3 className="portfolio-showcase__featured-title">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-showcase__main">
        <div className="container">
          <div className="portfolio-showcase__filter">
            <div className="portfolio-showcase__categories">
              {allCategories.map((category, index) => (
                <button
                  key={index}
                  className={`portfolio-showcase__category-btn ${activeCategory === category ? 'portfolio-showcase__category-btn--active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="portfolio-showcase__search">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="portfolio-showcase__search-input"
              />
              <svg className="portfolio-showcase__search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>

          <div className="portfolio-showcase__grid">
            {visibleProjects.length > 0 ? (
              visibleProjects.map(project => (
                <div key={project.id} className="portfolio-showcase__item">
                  <div className="portfolio-showcase__image">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-showcase__overlay">
                      <Link to={`/portfolio/${project.id}`} className="portfolio-showcase__link">
                        View Project
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-showcase__content">
                    <span className="portfolio-showcase__category">{project.category}</span>
                    <h3 className="portfolio-showcase__title">{project.title}</h3>
                    <div className="portfolio-showcase__tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="portfolio-showcase__tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="portfolio-showcase__no-results">
                <p>No projects found matching your criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="portfolio-showcase__skills">
        <div className="container">
          <h2 className="portfolio-showcase__section-title">My Skills & Expertise</h2>
          <div className="portfolio-showcase__skills-grid">
            <div className="portfolio-showcase__skill">
              <div className="portfolio-showcase__skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="portfolio-showcase__skill-title">UI/UX Design</h3>
              <p className="portfolio-showcase__skill-description">
                Creating intuitive and engaging user experiences through thoughtful interface design.
              </p>
            </div>
            <div className="portfolio-showcase__skill">
              <div className="portfolio-showcase__skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="portfolio-showcase__skill-title">Web Development</h3>
              <p className="portfolio-showcase__skill-description">
                Building responsive and performant websites using modern frameworks and technologies.
              </p>
            </div>
            <div className="portfolio-showcase__skill">
              <div className="portfolio-showcase__skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h3 className="portfolio-showcase__skill-title">Brand Identity</h3>
              <p className="portfolio-showcase__skill-description">
                Developing cohesive brand identities that communicate the essence of businesses.
              </p>
            </div>
            <div className="portfolio-showcase__skill">
              <div className="portfolio-showcase__skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="portfolio-showcase__skill-title">3D Modeling</h3>
              <p className="portfolio-showcase__skill-description">
                Creating detailed 3D models and visualizations for products and environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase__testimonials">
        <div className="container">
          <h2 className="portfolio-showcase__section-title">Client Testimonials</h2>
          <div className="portfolio-showcase__testimonials-grid">
            <div className="portfolio-showcase__testimonial">
              <div className="portfolio-showcase__testimonial-content">
                <p className="portfolio-showcase__testimonial-text">
                  "Working with this team was an absolute pleasure. They understood our vision from the start and delivered a product that exceeded our expectations."
                </p>
              </div>
              <div className="portfolio-showcase__testimonial-author">
                <div className="portfolio-showcase__testimonial-avatar">
                  <img src={testimonial1} alt="John Smith" />
                </div>
                <div className="portfolio-showcase__testimonial-info">
                  <h4 className="portfolio-showcase__testimonial-name">John Smith</h4>
                  <p className="portfolio-showcase__testimonial-position">CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="portfolio-showcase__testimonial">
              <div className="portfolio-showcase__testimonial-content">
                <p className="portfolio-showcase__testimonial-text">
                  "The attention to detail and creative solutions provided were outstanding. Our website traffic increased by 150% after the redesign."
                </p>
              </div>
              <div className="portfolio-showcase__testimonial-author">
                <div className="portfolio-showcase__testimonial-avatar">
                  <img src={testimonial2} alt="Sarah Johnson" />
                </div>
                <div className="portfolio-showcase__testimonial-info">
                  <h4 className="portfolio-showcase__testimonial-name">Sarah Johnson</h4>
                  <p className="portfolio-showcase__testimonial-position">Marketing Director, StyleBrand</p>
                </div>
              </div>
            </div>
            <div className="portfolio-showcase__testimonial">
              <div className="portfolio-showcase__testimonial-content">
                <p className="portfolio-showcase__testimonial-text">
                  "The mobile app developed for our healthcare service has received overwhelmingly positive feedback from our users. Highly recommended!"
                </p>
              </div>
              <div className="portfolio-showcase__testimonial-author">
                <div className="portfolio-showcase__testimonial-avatar">
                  <img src={testimonial3} alt="David Chen" />
                </div>
                <div className="portfolio-showcase__testimonial-info">
                  <h4 className="portfolio-showcase__testimonial-name">David Chen</h4>
                  <p className="portfolio-showcase__testimonial-position">Product Manager, HealthPlus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase__contact">
        <div className="container">
          <div className="portfolio-showcase__contact-content">
            <h2 className="portfolio-showcase__contact-title">Ready to start your project?</h2>
            <p className="portfolio-showcase__contact-text">
              Let's discuss your ideas and create something amazing together.
            </p>
            <Link to="/contact" className="portfolio-showcase__contact-button">Get in Touch</Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default PortfolioShowcasePage; 