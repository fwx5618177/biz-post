import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="cta-section">
      <div className="container">
        <div className="cta-section__content">
          <h2 className="cta-section__title">{title}</h2>
          <p className="cta-section__description">{description}</p>
          <Link to={buttonLink} className="cta-section__button btn btn-primary">
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection; 