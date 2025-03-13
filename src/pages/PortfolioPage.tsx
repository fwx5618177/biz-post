import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'ui', name: 'UI Design' },
    { id: 'ux', name: 'UX Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Fintech Dashboard UI',
      category: 'UI Design',
      categoryId: 'ui',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'A modern and intuitive dashboard for a financial technology platform, designed to help users manage their investments and track their financial goals.',
      client: 'FinanceHub',
      year: '2023',
      services: ['UI Design', 'UX Research', 'Prototyping']
    },
    {
      id: 2,
      title: 'Eco-Friendly Brand Identity',
      category: 'Branding',
      categoryId: 'branding',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'A comprehensive brand identity for an eco-friendly product line, including logo design, color palette, typography, and brand guidelines.',
      client: 'GreenLife',
      year: '2023',
      services: ['Brand Strategy', 'Logo Design', 'Visual Identity']
    },
    {
      id: 3,
      title: 'E-commerce Mobile App',
      category: 'UX Design',
      categoryId: 'ux',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'A user-friendly mobile shopping experience with intuitive navigation, streamlined checkout process, and personalized recommendations.',
      client: 'ShopEasy',
      year: '2022',
      services: ['UX Design', 'UI Design', 'Usability Testing']
    },
    {
      id: 4,
      title: 'Corporate Website Redesign',
      category: 'Web Design',
      categoryId: 'web',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'A complete redesign of a corporate website to improve user experience, enhance visual appeal, and better communicate the company\'s value proposition.',
      client: 'TechCorp',
      year: '2022',
      services: ['Web Design', 'Content Strategy', 'Development']
    },
    {
      id: 5,
      title: 'Health & Wellness App',
      category: 'UI Design',
      categoryId: 'ui',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'A beautiful and functional app interface for a health and wellness platform, designed to help users track their fitness goals and maintain healthy habits.',
      client: 'WellnessPlus',
      year: '2022',
      services: ['UI Design', 'Interaction Design', 'Prototyping']
    },
    {
      id: 6,
      title: 'Restaurant Branding',
      category: 'Branding',
      categoryId: 'branding',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'A distinctive brand identity for a new restaurant, including logo, menu design, signage, and marketing materials.',
      client: 'Savory',
      year: '2021',
      services: ['Brand Identity', 'Print Design', 'Signage']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categoryId === activeFilter);

  return (
    <main className="portfolio">
      <section className="portfolio__hero">
        <div className="container">
          <h1 className="portfolio__hero-title">Our <span>Portfolio</span></h1>
          <p className="portfolio__hero-description">
            Explore our collection of design projects that showcase our expertise and creativity in delivering exceptional digital experiences.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="portfolio__filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`portfolio__filters-button ${activeFilter === filter.id ? 'portfolio__filters-button--active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio__item-overlay">
                  <Link to={`/portfolio/${project.id}`} className="portfolio__item-overlay-button">View Project</Link>
                </div>
              </div>
              <div className="portfolio__item-content">
                <div className="portfolio__item-category">{project.category}</div>
                <h3 className="portfolio__item-title">
                  <Link to={`/portfolio/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="portfolio__item-description">{project.description}</p>
                <div className="portfolio__item-meta">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default PortfolioPage; 