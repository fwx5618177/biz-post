import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import LazyImage from '../components/LazyImage';

const CaseStudyListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ux-design', name: 'UX Design' },
    { id: 'web-design', name: 'Web Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'mobile-app', name: 'Mobile App' },
    { id: 'marketing', name: 'Marketing' }
  ];

  // Mock data for case studies - updated with better image paths and string IDs
  const caseStudies = [
    {
      id: 'ecommerce-platform',
      title: 'Redesigning the Banking Experience',
      category: 'UX Design',
      categoryId: 'ux-design',
      image: '/images/case-study-banking-app.jpg',
      description: 'A comprehensive redesign of a banking app to improve user experience and increase customer satisfaction.',
      client: 'FinTech Solutions',
      year: '2023'
    },
    {
      id: 'mobile-banking-app',
      title: 'E-commerce Website Overhaul',
      category: 'Web Design',
      categoryId: 'web-design',
      image: '/images/case-study-ecommerce.jpg',
      description: 'Transforming an outdated e-commerce platform into a modern, user-friendly shopping experience.',
      client: 'Fashion Retailer',
      year: '2023'
    },
    {
      id: 'healthcare-dashboard',
      title: 'Brand Identity for Tech Startup',
      category: 'Branding',
      categoryId: 'branding',
      image: '/images/case-study-brand-identity.jpg',
      description: 'Creating a distinctive brand identity for a tech startup to establish market presence.',
      client: 'InnovateTech',
      year: '2022'
    },
    {
      id: 'health-fitness-app',
      title: 'Health & Fitness App Design',
      category: 'Mobile App',
      categoryId: 'mobile-app',
      image: '/images/case-study-fitness-app.jpg',
      description: 'Designing an intuitive mobile app for tracking health metrics and workout routines.',
      client: 'FitLife',
      year: '2022'
    },
    {
      id: 'digital-marketing-campaign',
      title: 'Digital Marketing Campaign',
      category: 'Marketing',
      categoryId: 'marketing',
      image: '/images/case-study-marketing.jpg',
      description: 'Developing and executing a comprehensive digital marketing strategy to increase brand awareness.',
      client: 'Consumer Goods Co.',
      year: '2022'
    },
    {
      id: 'restaurant-booking-platform',
      title: 'Restaurant Booking Platform',
      category: 'Web Design',
      categoryId: 'web-design',
      image: '/images/case-study-restaurant.jpg',
      description: 'Building a seamless restaurant reservation system with real-time availability updates.',
      client: 'DineEasy',
      year: '2021'
    },
    {
      id: 'corporate-rebrand',
      title: 'Corporate Rebrand',
      category: 'Branding',
      categoryId: 'branding',
      image: '/images/case-study-rebrand.jpg',
      description: 'Refreshing the brand identity of an established corporation to reflect their modern values.',
      client: 'Legacy Industries',
      year: '2021'
    },
    {
      id: 'travel-companion-app',
      title: 'Travel Companion App',
      category: 'Mobile App',
      categoryId: 'mobile-app',
      image: '/images/case-study-travel-app.jpg',
      description: 'Creating a travel app that helps users plan, navigate, and document their journeys.',
      client: 'Wanderlust',
      year: '2021'
    },
    {
      id: 'social-media-strategy',
      title: 'Social Media Strategy',
      category: 'Marketing',
      categoryId: 'marketing',
      image: '/images/case-study-social-media.jpg',
      description: 'Developing a cohesive social media presence across multiple platforms to engage with target audiences.',
      client: 'Lifestyle Brand',
      year: '2020'
    }
  ];

  // Filter case studies based on category and search query
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = activeCategory === 'all' || study.categoryId === activeCategory;
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Group case studies by category for the "All" view
  const groupedCaseStudies = () => {
    if (activeCategory !== 'all' || searchQuery !== '') {
      return { ungrouped: filteredCaseStudies };
    }

    return filteredCaseStudies.reduce((acc: Record<string, typeof caseStudies>, study) => {
      if (!acc[study.category]) {
        acc[study.category] = [];
      }
      acc[study.category].push(study);
      return acc;
    }, {});
  };

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Get grouped or filtered case studies
  const caseStudiesData = groupedCaseStudies();
  const isGrouped = activeCategory === 'all' && searchQuery === '';

  return (
    <main className="case-study-list">
      <section className="case-study-list__hero">
        <div className="container">
          <div className="case-study-list__hero-content">
            <h1 className="case-study-list__hero-title">Case <span>Studies</span></h1>
            <p className="case-study-list__hero-description">
              Explore our portfolio of case studies showcasing our expertise in design, development, and digital strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-list__content">
        <div className="container">
          <div className="case-study-list__header">
            <div className="case-study-list__categories">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`case-study-list__category-btn ${activeCategory === category.id ? 'case-study-list__category-btn--active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="case-study-list__search">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="case-study-list__search-input"
              />
              <svg className="case-study-list__search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>

          {isGrouped ? (
            // Grouped by category view (for "All" with no search)
            Object.entries(caseStudiesData).map(([category, studies]) => (
              <div key={category} className="case-study-list__category-section">
                <h2 className="case-study-list__category-title">{category}</h2>
                <div className="case-study-list__grid">
                  {(studies as typeof caseStudies).map(study => (
                    <div key={study.id} className="case-study-list__item">
                      <Link to={`/case-studies/${study.id}`} className="case-study-list__item-link">
                        <div className="case-study-list__item-image">
                          <LazyImage 
                            src={study.image} 
                            alt={study.title} 
                          />
                          <div className="case-study-list__item-overlay">
                            <span className="case-study-list__item-view">View Details</span>
                          </div>
                        </div>
                        <div className="case-study-list__item-content">
                          <div className="case-study-list__item-category">{study.category}</div>
                          <h2 className="case-study-list__item-title">{study.title}</h2>
                          <p className="case-study-list__item-description">{study.description}</p>
                          <div className="case-study-list__item-meta">
                            <div className="case-study-list__item-client">
                              <span className="case-study-list__item-label">Client:</span>
                              <span className="case-study-list__item-value">{study.client}</span>
                            </div>
                            <div className="case-study-list__item-year">
                              <span className="case-study-list__item-label">Year:</span>
                              <span className="case-study-list__item-value">{study.year}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Regular grid view (for filtered or searched results)
            <div className="case-study-list__grid">
              {filteredCaseStudies.length > 0 ? (
                filteredCaseStudies.map(study => (
                  <div key={study.id} className="case-study-list__item">
                    <Link to={`/case-studies/${study.id}`} className="case-study-list__item-link">
                      <div className="case-study-list__item-image">
                        <LazyImage 
                          src={study.image} 
                          alt={study.title} 
                        />
                        <div className="case-study-list__item-overlay">
                          <span className="case-study-list__item-view">View Details</span>
                        </div>
                      </div>
                      <div className="case-study-list__item-content">
                        <div className="case-study-list__item-category">{study.category}</div>
                        <h2 className="case-study-list__item-title">{study.title}</h2>
                        <p className="case-study-list__item-description">{study.description}</p>
                        <div className="case-study-list__item-meta">
                          <div className="case-study-list__item-client">
                            <span className="case-study-list__item-label">Client:</span>
                            <span className="case-study-list__item-value">{study.client}</span>
                          </div>
                          <div className="case-study-list__item-year">
                            <span className="case-study-list__item-label">Year:</span>
                            <span className="case-study-list__item-value">{study.year}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="case-study-list__no-results">
                  <p>No case studies found matching your criteria. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="case-study-list__cta-section">
        <div className="container">
          <div className="case-study-list__cta-content">
            <h2 className="case-study-list__cta-title">Ready to start your project?</h2>
            <p className="case-study-list__cta-description">
              Let's discuss how we can help bring your vision to life with our expertise in design and development.
            </p>
            <Link to="/contact" className="case-study-list__cta-button">Get in Touch</Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default CaseStudyListPage; 