import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'design', name: 'Design' },
    { id: 'ux', name: 'UX' },
    { id: 'ui', name: 'UI' },
    { id: 'branding', name: 'Branding' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of User-Centered Design',
      category: 'UX',
      categoryId: 'ux',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Discover why putting users at the center of your design process leads to more successful digital products and happier customers.',
      author: 'Sarah Johnson',
      date: 'June 15, 2023',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Color Theory in UI Design: A Comprehensive Guide',
      category: 'UI',
      categoryId: 'ui',
      image: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Learn how to use color effectively in your UI designs to create visually appealing and psychologically impactful user interfaces.',
      author: 'David Chen',
      date: 'May 28, 2023',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Building a Strong Brand Identity in the Digital Age',
      category: 'Branding',
      categoryId: 'branding',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Explore strategies for creating a cohesive and memorable brand identity that resonates with your audience across digital platforms.',
      author: 'Emily Rodriguez',
      date: 'May 10, 2023',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'The Evolution of Web Design: Past, Present, and Future',
      category: 'Design',
      categoryId: 'design',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Take a journey through the history of web design, examine current trends, and look ahead to what the future might hold.',
      author: 'Michael Taylor',
      date: 'April 22, 2023',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Accessibility in Design: Creating Inclusive Digital Experiences',
      category: 'UX',
      categoryId: 'ux',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Why accessibility should be a priority in your design process and how to implement inclusive design principles in your projects.',
      author: 'Sarah Johnson',
      date: 'April 8, 2023',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Designing for Dark Mode: Best Practices and Considerations',
      category: 'UI',
      categoryId: 'ui',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'A comprehensive guide to implementing dark mode in your designs, including color considerations, contrast, and user preferences.',
      author: 'David Chen',
      date: 'March 25, 2023',
      readTime: '9 min read'
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.categoryId === activeCategory);

  return (
    <main>
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Our <span>Blog</span></h1>
            <p className="blog-hero__description">
              Insights, thoughts, and perspectives on design, user experience, and digital trends from our team of experts.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-posts">
        <div className="container">
          <div className="blog-posts__filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`blog-posts__filters-button ${activeCategory === category.id ? 'blog-posts__filters-button--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="blog-posts__grid">
            {filteredPosts.map(post => (
              <div key={post.id} className="blog-posts__card">
                <div className="blog-posts__card-image-container">
                  <img src={post.image} alt={post.title} className="blog-posts__card-image" />
                  <span className="blog-posts__card-category">{post.category}</span>
                </div>
                <div className="blog-posts__card-content">
                  <div className="blog-posts__card-meta">
                    <span className="blog-posts__card-author">{post.author}</span>
                    <span className="blog-posts__card-date">{post.date}</span>
                    <span className="blog-posts__card-read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-posts__card-title">{post.title}</h2>
                  <p className="blog-posts__card-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-posts__card-link">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-newsletter">
        <div className="container">
          <div className="blog-newsletter__content">
            <h2 className="blog-newsletter__title">Subscribe to Our Newsletter</h2>
            <p className="blog-newsletter__description">
              Stay up to date with the latest insights and articles on design, UX, and digital trends.
            </p>
            <form className="blog-newsletter__form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="blog-newsletter__input" 
                required 
              />
              <button type="submit" className="blog-newsletter__button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default BlogPage; 