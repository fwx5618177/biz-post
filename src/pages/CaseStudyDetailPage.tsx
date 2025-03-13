import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import CTASection from '../components/CTASection';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  date: string;
  image: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  results: {
    text: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  technologies: string[];
  deliverables: string[];
  gallery: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
    avatar: string;
  };
  nextProject?: {
    id: string;
    title: string;
    image: string;
  };
}

// Mock data - in a real app, this would come from an API
const mockCaseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform Redesign',
    subtitle: 'Transforming online shopping experience with a modern, user-friendly interface',
    category: 'Web Development',
    client: 'Fashion Retailer',
    date: 'January 2023',
    image: '/images/case-studies/ecommerce-hero.jpg',
    description: 'A complete redesign and development of an e-commerce platform for a fashion retailer, focusing on user experience and conversion optimization. The project involved extensive research, wireframing, prototyping, and development to create a seamless shopping experience across all devices.',
    challenge: 'The client was struggling with low conversion rates and high cart abandonment on their existing e-commerce platform. The site was slow, difficult to navigate, and not optimized for mobile devices. Users were finding it hard to discover products and complete purchases, leading to lost sales and revenue.',
    approach: 'We began with extensive user research and competitive analysis to identify pain points and opportunities. Our design team created wireframes and prototypes that were tested with real users before implementation. We followed an iterative approach, continuously refining the design based on user feedback and analytics.',
    solution: 'We redesigned the entire user experience, focusing on simplicity, speed, and mobile-first design. We implemented a new search and filtering system, streamlined the checkout process, and added personalized product recommendations. The new platform was built with React for the frontend and Node.js for the backend, ensuring fast performance and scalability.',
    results: {
      text: 'The new platform resulted in significant improvements across all key performance indicators within the first three months after launch.',
      stats: [
        { value: '45%', label: 'Increase in conversion rate' },
        { value: '30%', label: 'Decrease in cart abandonment' },
        { value: '60%', label: 'Increase in mobile sales' }
      ]
    },
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Redux', 'SCSS'],
    deliverables: [
      'Responsive website design',
      'Custom product filtering system',
      'Secure payment integration',
      'Admin dashboard',
      'Analytics integration',
      'Email notification system'
    ],
    gallery: [
      '/images/case-studies/ecommerce-challenge.jpg',
      '/images/case-studies/ecommerce-approach.jpg',
      '/images/case-studies/ecommerce-solution.jpg',
      '/images/case-studies/ecommerce-gallery1.jpg',
      '/images/case-studies/ecommerce-gallery2.jpg',
      '/images/case-studies/ecommerce-gallery3.jpg',
      '/images/case-studies/ecommerce-gallery4.jpg',
    ],
    testimonial: {
      text: 'The team delivered beyond our expectations. The new platform has transformed our business and significantly improved our online sales.',
      author: 'Sarah Johnson',
      position: 'E-commerce Director',
      avatar: '/images/testimonials/sarah.jpg',
    },
    nextProject: {
      id: 'mobile-banking-app',
      title: 'Mobile Banking Application',
      image: '/images/case-studies/mobile-banking-hero.jpg'
    }
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking Application',
    subtitle: 'Secure and intuitive financial management on the go',
    category: 'Mobile Development',
    client: 'Regional Bank',
    date: 'March 2023',
    image: '/images/case-studies/mobile-banking-hero.jpg',
    description: 'Development of a secure and user-friendly mobile banking application for a regional bank, enabling customers to manage their finances on the go. The app provides a comprehensive suite of banking features while maintaining the highest security standards.',
    challenge: 'The bank needed to modernize its digital offerings to compete with larger national banks and fintech startups. Their existing mobile app was outdated, had limited functionality, and received poor user reviews. Security concerns and regulatory compliance were major challenges that needed to be addressed.',
    approach: 'We conducted stakeholder interviews and user research to understand the needs of both the bank and its customers. Security was a primary concern, so we worked closely with the bank\'s IT team to ensure compliance with all regulations. We created detailed wireframes and interactive prototypes to validate our design decisions before development.',
    solution: 'We developed a new mobile banking application with a focus on security, performance, and user experience. The app includes features such as biometric authentication, real-time transaction notifications, budgeting tools, and seamless integration with the bank\'s core systems. We used React Native to ensure a consistent experience across iOS and Android platforms.',
    results: {
      text: 'The new app has been well-received by users and has significantly improved the bank\'s digital presence.',
      stats: [
        { value: '4.8/5', label: 'App store rating' },
        { value: '70%', label: 'Increase in mobile banking usage' },
        { value: '25%', label: 'Reduction in call center volume' }
      ]
    },
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Plaid API', 'Jest', 'Fastlane'],
    deliverables: [
      'iOS and Android applications',
      'Secure authentication system',
      'Transaction history and management',
      'Bill payment functionality',
      'Account management features',
      'Push notification system'
    ],
    gallery: [
      '/images/case-studies/banking-challenge.jpg',
      '/images/case-studies/banking-approach.jpg',
      '/images/case-studies/banking-solution.jpg',
      '/images/case-studies/banking-gallery1.jpg',
      '/images/case-studies/banking-gallery2.jpg',
      '/images/case-studies/banking-gallery3.jpg',
      '/images/case-studies/banking-gallery4.jpg',
    ],
    nextProject: {
      id: 'healthcare-dashboard',
      title: 'Healthcare Analytics Dashboard',
      image: '/images/case-studies/healthcare-hero.jpg'
    }
  },
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Analytics Dashboard',
    subtitle: 'Data-driven insights for improved patient care and operational efficiency',
    category: 'Data Visualization',
    client: 'Medical Center',
    date: 'May 2023',
    image: '/images/case-studies/healthcare-hero.jpg',
    description: 'Design and development of an analytics dashboard for healthcare providers to monitor patient outcomes, operational efficiency, and financial performance. The dashboard provides actionable insights that help improve care quality while optimizing resource allocation.',
    challenge: 'The medical center had vast amounts of data but lacked the tools to visualize and analyze it effectively. Decision-makers needed a centralized dashboard to monitor key performance indicators and identify areas for improvement. Data privacy and HIPAA compliance were critical considerations throughout the project.',
    approach: 'We worked closely with healthcare professionals to understand their workflow and data needs. We created information architecture and data visualization strategies that would present complex medical data in an accessible way. Prototypes were tested with actual end-users to ensure the dashboard would meet their daily needs.',
    solution: 'We created a comprehensive analytics dashboard that integrates data from multiple sources, including electronic health records, billing systems, and patient satisfaction surveys. The dashboard provides real-time insights through interactive charts, graphs, and customizable reports. Advanced filtering and drill-down capabilities allow users to explore data at various levels of detail.',
    results: {
      text: 'The dashboard has had a significant impact on the medical center\'s operations and patient care.',
      stats: [
        { value: '$2.3M', label: 'Identified cost savings' },
        { value: '35%', label: 'Improvement in patient wait times' },
        { value: '20%', label: 'Increase in patient satisfaction' }
      ]
    },
    technologies: ['D3.js', 'React', 'Python', 'PostgreSQL', 'Tableau', 'AWS', 'Docker'],
    deliverables: [
      'Interactive analytics dashboard',
      'Custom data visualization components',
      'Data integration from multiple sources',
      'Automated reporting system',
      'Role-based access control',
      'HIPAA-compliant security measures'
    ],
    gallery: [
      '/images/case-studies/healthcare-challenge.jpg',
      '/images/case-studies/healthcare-approach.jpg',
      '/images/case-studies/healthcare-solution.jpg',
      '/images/case-studies/healthcare-gallery1.jpg',
      '/images/case-studies/healthcare-gallery2.jpg',
      '/images/case-studies/healthcare-gallery3.jpg',
      '/images/case-studies/healthcare-gallery4.jpg',
    ],
    testimonial: {
      text: 'This dashboard has transformed how we make decisions. We now have clear visibility into our operations and can quickly identify areas for improvement.',
      author: 'Dr. Michael Chen',
      position: 'Chief Medical Officer',
      avatar: '/images/testimonials/michael.jpg',
    },
    nextProject: {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform Redesign',
      image: '/images/case-studies/ecommerce-hero.jpg'
    }
  },
];

const CaseStudyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch case study details
    setLoading(true);
    setTimeout(() => {
      const study = mockCaseStudies.find(study => study.id === id) || null;
      setCaseStudy(study);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="case-study-detail">
        <div className="case-study-detail__loading">
          <div className="case-study-detail__loading-spinner"></div>
          <p>Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="case-study-detail">
        <div className="case-study-detail__not-found">
          <h2>Case Study Not Found</h2>
          <p>The case study you're looking for doesn't exist or has been removed.</p>
          <Link to="/case-studies" className="btn btn-primary">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="case-study-detail">
      {/* Hero Section */}
      <div className="case-study-detail__hero">
        <div className="container">
          <div className="case-study-detail__breadcrumb">
            <Link to="/case-studies">Case Studies</Link>
            <span className="case-study-detail__breadcrumb-separator">/</span>
            <span>{caseStudy.title}</span>
          </div>
          <div className="case-study-detail__hero-content">
            <div className="case-study-detail__meta">
              <span className="case-study-detail__category">{caseStudy.category}</span>
              <span className="case-study-detail__date">{caseStudy.date}</span>
            </div>
            <h1 className="case-study-detail__title">{caseStudy.title}</h1>
            <p className="case-study-detail__subtitle">{caseStudy.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="case-study-detail__main-image">
        <div className="container">
          <LazyImage src={caseStudy.image} alt={caseStudy.title} />
        </div>
      </div>

      {/* Overview Section */}
      <div className="case-study-detail__overview">
        <div className="container">
          <div className="case-study-detail__overview-content">
            <div className="case-study-detail__overview-left">
              <h2>Project Overview</h2>
              <p>{caseStudy.description}</p>
            </div>
            
            <div className="case-study-detail__overview-right">
              <div className="case-study-detail__info-card">
                <div className="case-study-detail__info-item">
                  <h4>Client</h4>
                  <p>{caseStudy.client}</p>
                </div>
                <div className="case-study-detail__info-item">
                  <h4>Category</h4>
                  <p>{caseStudy.category}</p>
                </div>
                <div className="case-study-detail__info-item">
                  <h4>Date</h4>
                  <p>{caseStudy.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="case-study-detail__challenge">
        <div className="container">
          <div className="case-study-detail__section-header">
            <h2>The Challenge</h2>
          </div>
          <div className="case-study-detail__challenge-content">
            <div className="case-study-detail__challenge-text">
              <p>{caseStudy.challenge}</p>
            </div>
            <div className="case-study-detail__challenge-image">
              <LazyImage src={caseStudy.gallery[0]} alt="Challenge visualization" />
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="case-study-detail__approach">
        <div className="container">
          <div className="case-study-detail__section-header">
            <h2>Our Approach</h2>
          </div>
          <div className="case-study-detail__approach-content">
            <div className="case-study-detail__approach-image">
              <LazyImage src={caseStudy.gallery[1]} alt="Approach visualization" />
            </div>
            <div className="case-study-detail__approach-text">
              <p>{caseStudy.approach}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="case-study-detail__solution">
        <div className="container">
          <div className="case-study-detail__section-header">
            <h2>The Solution</h2>
          </div>
          <div className="case-study-detail__solution-content">
            <div className="case-study-detail__solution-text">
              <p>{caseStudy.solution}</p>
            </div>
            <div className="case-study-detail__solution-image">
              <LazyImage src={caseStudy.gallery[2]} alt="Solution visualization" />
            </div>
          </div>
        </div>
      </div>

      {/* Tech & Deliverables Section */}
      <div className="case-study-detail__tech-deliverables">
        <div className="container">
          <div className="case-study-detail__tech-deliverables-grid">
            <div className="case-study-detail__technologies-section">
              <h3>Technologies Used</h3>
              <ul className="case-study-detail__tech-list">
                {caseStudy.technologies.map((tech, index) => (
                  <li key={index} className="case-study-detail__tech-item">{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="case-study-detail__deliverables-section">
              <h3>Deliverables</h3>
              <ul className="case-study-detail__deliverables-list">
                {caseStudy.deliverables.map((deliverable, index) => (
                  <li key={index} className="case-study-detail__deliverables-item">{deliverable}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="case-study-detail__results">
        <div className="container">
          <div className="case-study-detail__section-header">
            <h2>Results</h2>
          </div>
          <p className="case-study-detail__results-text">{caseStudy.results.text}</p>
          
          <div className="case-study-detail__stats">
            {caseStudy.results.stats.map((stat, index) => (
              <div key={index} className="case-study-detail__stat-item">
                <div className="case-study-detail__stat-value">{stat.value}</div>
                <div className="case-study-detail__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="case-study-detail__gallery">
        <div className="container">
          <div className="case-study-detail__section-header">
            <h2>Project Gallery</h2>
          </div>
          <div className="case-study-detail__gallery-grid">
            {caseStudy.gallery.slice(3).map((image, index) => (
              <div key={index} className="case-study-detail__gallery-item">
                <LazyImage src={image} alt={`${caseStudy.title} - Gallery Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section (if available) */}
      {caseStudy.testimonial && (
        <div className="case-study-detail__testimonial">
          <div className="container">
            <div className="case-study-detail__testimonial-content">
              <div className="case-study-detail__testimonial-quote">
                <blockquote>"{caseStudy.testimonial.text}"</blockquote>
              </div>
              <div className="case-study-detail__testimonial-author">
                <div className="case-study-detail__testimonial-avatar">
                  <LazyImage src={caseStudy.testimonial.avatar} alt={caseStudy.testimonial.author} />
                </div>
                <div className="case-study-detail__testimonial-info">
                  <h4>{caseStudy.testimonial.author}</h4>
                  <p>{caseStudy.testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Next Project Section */}
      {caseStudy.nextProject && (
        <div className="case-study-detail__next-project">
          <div className="container">
            <div className="case-study-detail__next-project-content">
              <h2>Next Project</h2>
              <Link to={`/case-studies/${caseStudy.nextProject.id}`} className="case-study-detail__next-project-link">
                <div className="case-study-detail__next-project-image">
                  <LazyImage src={caseStudy.nextProject.image} alt={caseStudy.nextProject.title} />
                  <div className="case-study-detail__next-project-overlay">
                    <span className="case-study-detail__next-project-title">{caseStudy.nextProject.title}</span>
                    <span className="case-study-detail__next-project-view">View Project</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection
        title="Ready to start your project?"
        description="Let's discuss how we can help you achieve your business goals with our expertise."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};

export default CaseStudyDetailPage; 