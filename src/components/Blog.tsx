import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of User-Centered Design in Digital Products',
      excerpt: 'Discover why putting users at the center of your design process leads to more successful digital products and happier customers.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'May 15, 2023',
      author: 'Alex Morgan',
      category: 'UX Design'
    },
    {
      id: 2,
      title: 'Color Psychology in Web Design: How Colors Influence Users',
      excerpt: 'Learn how different colors can evoke specific emotions and influence user behavior on your website or application.',
      image: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'April 28, 2023',
      author: 'Jessica Chen',
      category: 'Web Design'
    },
    {
      id: 3,
      title: 'Responsive Design Best Practices for 2023',
      excerpt: 'Stay up-to-date with the latest responsive design techniques to ensure your websites look great on all devices and screen sizes.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'March 12, 2023',
      author: 'David Wilson',
      category: 'Responsive Design'
    }
  ];

  return (
    <section className="blog">
      <div className="container">
        <div className="blog__header">
          <h2 className="blog__title">
            Latest <span>Articles</span> & News
          </h2>
          <p className="blog__description">
            Stay updated with the latest trends, insights, and best practices in design through our regularly updated blog.
          </p>
        </div>

        <div className="blog__grid">
          {blogPosts.map(post => (
            <div className="blog__card" key={post.id}>
              <div className="blog__card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <div className="blog__card-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {post.date}
                  </div>
                  <div className="blog__card-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {post.author}
                  </div>
                </div>
                <h3 className="blog__card-title">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </h3>
                <p className="blog__card-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="blog__card-link">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="blog__more">
          <a href="/blog" className="blog__more-button">View All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default Blog; 