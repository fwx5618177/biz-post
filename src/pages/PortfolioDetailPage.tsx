import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CTA from '../components/CTA';

const PortfolioDetailPage: React.FC = () => {
  // We're using id in a real app but not in this mock version
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams<{ id: string }>();
  
  // Mock portfolio project data - in a real application, this would be fetched from an API
  const project = {
    id: 1,
    title: 'E-commerce Website Redesign for Fashion Retailer',
    category: 'UI Design',
    categoryId: 'ui-design',
    client: 'FashionHub',
    year: '2023',
    duration: '3 months',
    services: ['UI Design', 'UX Research', 'Prototyping', 'Design System'],
    mainImage: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A complete redesign of an e-commerce platform focused on improving user experience, increasing conversion rates, and implementing a modern visual design that aligns with the brand identity.',
    challenge: 'The client\'s existing e-commerce website was outdated, had poor navigation, and was not optimized for mobile devices. This resulted in high bounce rates, low conversion rates, and customer complaints about usability issues.',
    solution: 'We conducted extensive user research to understand pain points and user needs. Based on these insights, we redesigned the entire user interface with a focus on simplicity, clear navigation, and a responsive design that works seamlessly across all devices.',
    overview: 'FashionHub is a leading online retailer specializing in contemporary fashion for young adults. With a growing customer base and increasing competition in the e-commerce space, they needed a website redesign that would enhance the shopping experience, showcase their products effectively, and strengthen their brand presence online.',
    approach: 'Our approach combined thorough user research with strategic design thinking to create a solution that not only looked visually appealing but also addressed the core usability issues affecting the business. We worked closely with the client team throughout the process, ensuring that the final design met both user needs and business objectives.',
    process: [
      {
        title: 'Research & Discovery',
        description: 'We began with a comprehensive analysis of the existing website, competitor analysis, and user interviews to identify pain points and opportunities for improvement. Our research revealed that users struggled with product navigation, found the checkout process confusing, and had difficulty viewing product details on mobile devices.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        title: 'Information Architecture',
        description: 'We restructured the site\'s information architecture to create a more intuitive navigation system that helps users find products more easily. This included reorganizing product categories, implementing a more effective search functionality, and creating a logical flow from product discovery to purchase.',
        image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        title: 'Wireframing & Prototyping',
        description: 'We created low-fidelity wireframes to establish the layout and functionality, followed by interactive prototypes for user testing. This iterative process allowed us to refine the user experience based on real feedback before moving into visual design.',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        title: 'Visual Design',
        description: 'We developed a modern visual design that aligns with the brand\'s identity, focusing on clean layouts, typography, and a cohesive color scheme. The design system we created ensures consistency across all pages and provides a foundation for future growth and expansion.',
        image: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        title: 'Testing & Iteration',
        description: 'We conducted usability testing with real users to identify issues and refine the design based on feedback. This phase was crucial in ensuring that the final product not only looked good but also provided a seamless and intuitive user experience.',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    results: [
      'Increased conversion rate by 35% within the first three months after launch',
      'Reduced bounce rate by 25% across all device types',
      'Improved average session duration by 40%, indicating higher user engagement',
      'Increased mobile purchases by 50%, addressing a key business objective',
      'Positive user feedback on the new design and usability, with a 28% increase in customer satisfaction scores'
    ],
    testimonial: {
      quote: 'The redesign completely transformed our online presence. The new website is not only visually stunning but also significantly easier to use. We\'ve seen a remarkable increase in sales and customer satisfaction since the launch. The team\'s attention to detail and user-centered approach exceeded our expectations.',
      author: 'Sarah Thompson',
      role: 'E-commerce Director, FashionHub'
    },
    gallery: [
      {
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        caption: 'User research and persona development workshop'
      },
      {
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        caption: 'Wireframing and prototyping process'
      },
      {
        image: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        caption: 'Final visual design for the homepage'
      },
      {
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        caption: 'Usability testing session with target users'
      },
      {
        image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        caption: 'Information architecture mapping session'
      },
      {
        image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        caption: 'Mobile responsive design implementation'
      }
    ],
    relatedProjects: [
      {
        id: 2,
        title: 'Mobile Banking App',
        category: 'UX Design',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        title: 'Brand Identity for Tech Startup',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ]
  };

  return (
    <main className="portfolio-detail">
      <section className="portfolio-detail__hero">
        <div className="container">
          <div className="portfolio-detail__hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/portfolio">Portfolio</Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>
          <div className="portfolio-detail__hero-meta">
            <div className="portfolio-detail__hero-meta-item">{project.category}</div>
            <div className="portfolio-detail__hero-meta-item">{project.year}</div>
          </div>
          <h1 className="portfolio-detail__hero-title">{project.title}</h1>
          <p className="portfolio-detail__hero-description">{project.description}</p>
        </div>
      </section>

      <section className="portfolio-detail__main-image">
        <div className="container">
          <img src={project.mainImage} alt={project.title} />
        </div>
      </section>

      <section className="portfolio-detail__overview">
        <div className="container">
          <div className="portfolio-detail__overview-grid">
            <div className="portfolio-detail__overview-content">
              <h2>Project Overview</h2>
              <p>{project.overview}</p>
              <h2>The Challenge</h2>
              <p>{project.challenge}</p>
              <h2>The Solution</h2>
              <p>{project.solution}</p>
              <p>{project.approach}</p>
            </div>
            <div className="portfolio-detail__overview-sidebar">
              <h3>Project Details</h3>
              <div className="portfolio-detail__overview-info">
                <div className="portfolio-detail__overview-info-item">
                  <div className="portfolio-detail__overview-info-label">Client</div>
                  <div className="portfolio-detail__overview-info-value">{project.client}</div>
                </div>
                <div className="portfolio-detail__overview-info-item">
                  <div className="portfolio-detail__overview-info-label">Year</div>
                  <div className="portfolio-detail__overview-info-value">{project.year}</div>
                </div>
                <div className="portfolio-detail__overview-info-item">
                  <div className="portfolio-detail__overview-info-label">Duration</div>
                  <div className="portfolio-detail__overview-info-value">{project.duration}</div>
                </div>
                <div className="portfolio-detail__overview-info-item">
                  <div className="portfolio-detail__overview-info-label">Services</div>
                  <div className="portfolio-detail__overview-info-value">
                    {project.services.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-detail__process">
        <div className="container">
          <h2 className="portfolio-detail__process-title">Design Process</h2>
          <div className="portfolio-detail__process-grid">
            {project.process.map((step, index) => (
              <div key={index} className="portfolio-detail__process-item">
                <div className="portfolio-detail__process-item-number">{index + 1}</div>
                <div className="portfolio-detail__process-item-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-detail__gallery">
        <div className="container">
          <h2 className="portfolio-detail__gallery-title">Project Gallery</h2>
          <div className="portfolio-detail__gallery-grid">
            {project.gallery.map((item, index) => (
              <div key={index} className="portfolio-detail__gallery-item">
                <img src={item.image} alt={item.caption} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="portfolio-detail__testimonial">
          <blockquote>
            <p>{project.testimonial.quote}</p>
            <footer>
              <strong>{project.testimonial.author}</strong>
              <span>{project.testimonial.role}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="portfolio-detail__next-project">
        <div className="container">
          <h2 className="portfolio-detail__next-project-title">More Projects</h2>
          <Link to={`/portfolio/${project.relatedProjects[0].id}`} className="portfolio-detail__next-project-link">
            <div className="portfolio-detail__next-project-card">
              <img src={project.relatedProjects[0].image} alt={project.relatedProjects[0].title} />
              <div className="portfolio-detail__next-project-overlay">
                <h3 className="portfolio-detail__next-project-overlay-title">{project.relatedProjects[0].title}</h3>
                <span className="portfolio-detail__next-project-overlay-view">View Project</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default PortfolioDetailPage; 