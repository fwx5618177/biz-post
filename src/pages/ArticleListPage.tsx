import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const ArticleListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'design', name: 'Design' },
    { id: 'ux', name: 'UX Research' },
    { id: 'ui', name: 'UI Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'development', name: 'Development' }
  ];

  const articles = [
    {
      id: 1,
      title: 'The Importance of User-Centered Design in Modern Digital Products',
      category: 'UX Research',
      categoryId: 'ux',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Discover why putting users at the center of your design process leads to more successful digital products and happier customers.',
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      date: 'June 15, 2023',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Color Theory in UI Design: A Comprehensive Guide',
      category: 'UI Design',
      categoryId: 'ui',
      image: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Learn how to use color effectively in your UI designs to create visually appealing and psychologically impactful user interfaces.',
      author: 'David Chen',
      authorImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      date: 'May 28, 2023',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Building a Strong Brand Identity in the Digital Age',
      category: 'Branding',
      categoryId: 'branding',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Explore strategies for creating a cohesive and memorable brand identity that resonates with your audience across digital platforms.',
      author: 'Emily Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      date: 'May 10, 2023',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 4,
      title: 'The Evolution of Web Design: Past, Present, and Future',
      category: 'Design',
      categoryId: 'design',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Take a journey through the history of web design, examine current trends, and look ahead to what the future might hold.',
      author: 'Michael Taylor',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      date: 'April 22, 2023',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Accessibility in Design: Creating Inclusive Digital Experiences',
      category: 'UX Research',
      categoryId: 'ux',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Why accessibility should be a priority in your design process and how to implement inclusive design principles in your projects.',
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      date: 'April 8, 2023',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Designing for Dark Mode: Best Practices and Considerations',
      category: 'UI Design',
      categoryId: 'ui',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'A comprehensive guide to implementing dark mode in your designs, including color considerations, contrast, and user preferences.',
      author: 'David Chen',
      authorImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      date: 'March 25, 2023',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 7,
      title: 'The Role of Typography in Web Design',
      category: 'Design',
      categoryId: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Explore how typography choices impact readability, user experience, and brand perception in web design projects.',
      author: 'Michael Taylor',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      date: 'March 10, 2023',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 8,
      title: 'Responsive Design Strategies for Modern Websites',
      category: 'Development',
      categoryId: 'development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      excerpt: 'Learn effective approaches to creating websites that provide optimal viewing experiences across a wide range of devices.',
      author: 'Alex Rivera',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      date: 'February 28, 2023',
      readTime: '8 min read',
      featured: false
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.categoryId === activeCategory);

  return (
    <main className="article-list">
      <section className="article-list__hero">
        <div className="container">
          <div className="article-list__hero-content">
            <h1 className="article-list__hero-title">Articles & <span>Insights</span></h1>
            <p className="article-list__hero-description">
              Explore our collection of articles, insights, and resources on design, user experience, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {featuredArticles.length > 0 && (
        <section className="article-list__featured">
          <div className="container">
            <h2 className="article-list__section-title">Featured Articles</h2>
            <div className="article-list__featured-grid">
              {featuredArticles.map(article => (
                <div key={article.id} className="article-list__featured-card">
                  <div className="article-list__featured-image">
                    <img src={article.image} alt={article.title} />
                    <div className="article-list__featured-category">{article.category}</div>
                  </div>
                  <div className="article-list__featured-content">
                    <h3 className="article-list__featured-title">{article.title}</h3>
                    <p className="article-list__featured-excerpt">{article.excerpt}</p>
                    <div className="article-list__featured-meta">
                      <div className="article-list__featured-author">
                        <img src={article.authorImage} alt={article.author} className="article-list__featured-author-image" />
                        <span className="article-list__featured-author-name">{article.author}</span>
                      </div>
                      <div className="article-list__featured-info">
                        <span className="article-list__featured-date">{article.date}</span>
                        <span className="article-list__featured-read-time">{article.readTime}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${article.id}`} className="article-list__featured-link">Read Article</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="article-list__main">
        <div className="container">
          <div className="article-list__header">
            <h2 className="article-list__section-title">All Articles</h2>
            <div className="article-list__categories">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`article-list__category-button ${activeCategory === category.id ? 'article-list__category-button--active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="article-list__grid">
            {filteredArticles.map(article => (
              <div key={article.id} className="article-list__card">
                <div className="article-list__card-image">
                  <img src={article.image} alt={article.title} />
                  <div className="article-list__card-category">{article.category}</div>
                </div>
                <div className="article-list__card-content">
                  <h3 className="article-list__card-title">{article.title}</h3>
                  <p className="article-list__card-excerpt">{article.excerpt}</p>
                  <div className="article-list__card-meta">
                    <div className="article-list__card-author">
                      <img src={article.authorImage} alt={article.author} className="article-list__card-author-image" />
                      <span className="article-list__card-author-name">{article.author}</span>
                    </div>
                    <div className="article-list__card-info">
                      <span className="article-list__card-date">{article.date}</span>
                      <span className="article-list__card-read-time">{article.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${article.id}`} className="article-list__card-link">Read Article</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="article-list__pagination">
            <button className="article-list__pagination-button article-list__pagination-button--active">1</button>
            <button className="article-list__pagination-button">2</button>
            <button className="article-list__pagination-button">3</button>
            <button className="article-list__pagination-button article-list__pagination-button--next">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="article-list__newsletter">
        <div className="container">
          <div className="article-list__newsletter-content">
            <h2 className="article-list__newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="article-list__newsletter-description">
              Stay up to date with the latest insights and articles on design, UX, and digital trends.
            </p>
            <form className="article-list__newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="article-list__newsletter-input" 
                required 
              />
              <button type="submit" className="article-list__newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default ArticleListPage; 