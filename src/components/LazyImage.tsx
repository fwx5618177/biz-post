import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const imgRef = useRef<HTMLDivElement>(null);
  
  // Set up intersection observer to detect when image is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px 0px', // Start loading 200px before image enters viewport
        threshold: 0.01
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Load image when it becomes visible
  useEffect(() => {
    if (!isVisible) return;
    
    // Reset loading state when src changes
    setIsLoading(true);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setIsLoading(false);
    };
    
    // Clean up
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, isVisible]);
  
  return (
    <div ref={imgRef} className={`lazy-image ${className}`}>
      {isLoading && (
        <div className="lazy-image__skeleton">
          <div className="lazy-image__skeleton-shine"></div>
        </div>
      )}
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt={alt} 
          className={`lazy-image__img ${isLoading ? 'lazy-image__img--hidden' : 'lazy-image__img--visible'}`}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage; 