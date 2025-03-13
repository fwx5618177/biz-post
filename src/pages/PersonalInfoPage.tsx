import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import profileImage from '../assets/images/profile.svg';
import gallery1 from '../assets/images/gallery-1.svg';
import gallery2 from '../assets/images/gallery-2.svg';
import gallery3 from '../assets/images/gallery-3.svg';
import gallery4 from '../assets/images/gallery-4.svg';

const PersonalInfoPage: React.FC = () => {
  // Personal information data
  const personalInfo = {
    name: 'Sarah Johnson',
    title: 'Senior UX Designer & Creative Director',
    location: 'San Francisco, California',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/sarahjohnson' },
      { name: 'Dribbble', url: 'https://dribbble.com/sarahjohnson' },
      { name: 'Behance', url: 'https://behance.net/sarahjohnson' },
      { name: 'Twitter', url: 'https://twitter.com/sarahjohnson' }
    ],
    bio: "I'm a passionate UX designer with over 8 years of experience creating user-centered digital experiences for various industries. My approach combines strategic thinking with creative problem-solving to deliver intuitive and engaging products that meet both user needs and business goals.",
    expertise: [
      'User Experience Design',
      'User Interface Design',
      'User Research & Testing',
      'Information Architecture',
      'Interaction Design',
      'Wireframing & Prototyping',
      'Design Systems',
      'Visual Design'
    ],
    experience: [
      {
        company: 'DesignHub Agency',
        role: 'Senior UX Designer',
        period: '2020 - Present',
        description: 'Lead UX design for enterprise clients across fintech, healthcare, and e-commerce sectors. Manage a team of 3 designers and collaborate with product managers and developers to deliver comprehensive design solutions.'
      },
      {
        company: 'TechCorp Inc.',
        role: 'UX/UI Designer',
        period: '2017 - 2020',
        description: 'Designed user interfaces for web and mobile applications, conducted user research, created wireframes and prototypes, and collaborated with development teams to ensure design implementation.'
      },
      {
        company: 'Creative Solutions',
        role: 'UI Designer',
        period: '2015 - 2017',
        description: 'Developed visual designs for websites and applications, created style guides and design systems, and worked closely with clients to understand their brand and design requirements.'
      }
    ],
    education: [
      {
        institution: 'California Institute of Design',
        degree: 'Master of Fine Arts in Interaction Design',
        year: '2015'
      },
      {
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Arts in Graphic Design',
        year: '2013'
      }
    ],
    certifications: [
      'Certified User Experience Professional (CUXP)',
      'Google UX Design Professional Certificate',
      'Interaction Design Foundation UX Certification'
    ],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'Spanish', level: 'Fluent' },
      { name: 'French', level: 'Intermediate' }
    ],
    profileImage: profileImage,
    galleryImages: [
      {
        url: gallery1,
        caption: 'UX Workshop with the team'
      },
      {
        url: gallery2,
        caption: 'Brainstorming session'
      },
      {
        url: gallery3,
        caption: 'User testing session'
      },
      {
        url: gallery4,
        caption: 'Design presentation'
      }
    ]
  };

  return (
    <main className="personal-info">
      <section className="personal-info__hero">
        <div className="container">
          <div className="personal-info__hero-content">
            <h1 className="personal-info__hero-title">Personal <span>Information</span></h1>
            <p className="personal-info__hero-description">
              Learn more about my background, experience, and expertise in design and user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="personal-info__main">
        <div className="container">
          <div className="personal-info__grid">
            <div className="personal-info__sidebar">
              <div className="personal-info__profile">
                <div className="personal-info__profile-image">
                  <img src={personalInfo.profileImage} alt={personalInfo.name} />
                </div>
                <h2 className="personal-info__profile-name">{personalInfo.name}</h2>
                <p className="personal-info__profile-title">{personalInfo.title}</p>
                <p className="personal-info__profile-location">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {personalInfo.location}
                </p>
              </div>

              <div className="personal-info__contact">
                <h3 className="personal-info__section-title">Contact Information</h3>
                <div className="personal-info__contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href={`mailto:${personalInfo.email}`} className="personal-info__contact-link">{personalInfo.email}</a>
                </div>
                <div className="personal-info__contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href={`tel:${personalInfo.phone}`} className="personal-info__contact-link">{personalInfo.phone}</a>
                </div>
              </div>

              <div className="personal-info__social">
                <h3 className="personal-info__section-title">Social Profiles</h3>
                <div className="personal-info__social-links">
                  {personalInfo.socialLinks.map((link, index) => (
                    <a key={index} href={link.url} className="personal-info__social-link" target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="personal-info__expertise">
                <h3 className="personal-info__section-title">Areas of Expertise</h3>
                <ul className="personal-info__expertise-list">
                  {personalInfo.expertise.map((item, index) => (
                    <li key={index} className="personal-info__expertise-item">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="personal-info__languages">
                <h3 className="personal-info__section-title">Languages</h3>
                <ul className="personal-info__languages-list">
                  {personalInfo.languages.map((language, index) => (
                    <li key={index} className="personal-info__languages-item">
                      <span className="personal-info__languages-name">{language.name}</span>
                      <span className="personal-info__languages-level">{language.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="personal-info__download">
                <a href="#" className="personal-info__download-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            <div className="personal-info__content">
              <div className="personal-info__bio">
                <h3 className="personal-info__content-title">About Me</h3>
                <p className="personal-info__bio-text">{personalInfo.bio}</p>
              </div>

              <div className="personal-info__experience">
                <h3 className="personal-info__content-title">Work Experience</h3>
                <div className="personal-info__timeline">
                  {personalInfo.experience.map((job, index) => (
                    <div key={index} className="personal-info__timeline-item">
                      <div className="personal-info__timeline-marker"></div>
                      <div className="personal-info__timeline-content">
                        <h4 className="personal-info__timeline-title">{job.role}</h4>
                        <div className="personal-info__timeline-meta">
                          <span className="personal-info__timeline-company">{job.company}</span>
                          <span className="personal-info__timeline-period">{job.period}</span>
                        </div>
                        <p className="personal-info__timeline-description">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="personal-info__education">
                <h3 className="personal-info__content-title">Education</h3>
                <div className="personal-info__timeline">
                  {personalInfo.education.map((edu, index) => (
                    <div key={index} className="personal-info__timeline-item">
                      <div className="personal-info__timeline-marker"></div>
                      <div className="personal-info__timeline-content">
                        <h4 className="personal-info__timeline-title">{edu.degree}</h4>
                        <div className="personal-info__timeline-meta">
                          <span className="personal-info__timeline-company">{edu.institution}</span>
                          <span className="personal-info__timeline-period">{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="personal-info__certifications">
                <h3 className="personal-info__content-title">Certifications</h3>
                <ul className="personal-info__certifications-list">
                  {personalInfo.certifications.map((cert, index) => (
                    <li key={index} className="personal-info__certifications-item">{cert}</li>
                  ))}
                </ul>
              </div>

              <div className="personal-info__gallery">
                <h3 className="personal-info__content-title">Gallery</h3>
                <div className="personal-info__gallery-grid">
                  {personalInfo.galleryImages.map((image, index) => (
                    <figure key={index} className="personal-info__gallery-item">
                      <img src={image.url} alt={image.caption} className="personal-info__gallery-image" />
                      <figcaption className="personal-info__gallery-caption">{image.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <div className="personal-info__cta">
                <h3 className="personal-info__cta-title">Interested in working together?</h3>
                <p className="personal-info__cta-text">
                  If you're looking for a UX designer who is passionate about creating exceptional user experiences, I'd love to hear from you.
                </p>
                <Link to="/contact" className="personal-info__cta-button">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default PersonalInfoPage; 