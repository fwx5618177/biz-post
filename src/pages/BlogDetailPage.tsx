import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CTA from '../components/CTA';

const BlogDetailPage: React.FC = () => {
  // We're using id in a real app but not in this mock version
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams<{ id: string }>();
  
  // Mock blog post data - in a real application, this would be fetched from an API
  const blogPost = {
    id: 1,
    title: 'The Importance of User-Centered Design in Modern Digital Products',
    category: 'UX Design',
    categoryId: 'ux',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: 'Sarah Johnson',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    authorRole: 'UX Designer',
    date: 'June 15, 2023',
    readTime: '5 min read',
    content: [
      {
        type: 'paragraph',
        content: 'User-centered design (UCD) is a design philosophy and process in which the needs, wants, and limitations of end users of a product are given extensive attention at each stage of the design process. This approach not only enhances user satisfaction but also improves the overall quality of the product by meeting user requirements more effectively.'
      },
      {
        type: 'paragraph',
        content: 'In today\'s competitive digital landscape, creating products that users love is more important than ever. User-centered design helps businesses achieve this by focusing on the people who will actually use the product, rather than forcing users to adapt to the product.'
      },
      {
        type: 'heading',
        content: 'Why User-Centered Design Matters'
      },
      {
        type: 'paragraph',
        content: 'When products are designed with users in mind, they tend to be more intuitive, easier to use, and more enjoyable. This leads to higher user satisfaction, increased user adoption, and ultimately, better business outcomes.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        caption: 'A team collaborating on user-centered design process'
      },
      {
        type: 'paragraph',
        content: 'User-centered design is not just about making things look good; it\'s about creating experiences that work well for the people who use them. By understanding user needs, behaviors, and pain points, designers can create solutions that truly address the problems users face.'
      },
      {
        type: 'quote',
        content: 'Design is not just what it looks like and feels like. Design is how it works.',
        author: 'Steve Jobs'
      },
      {
        type: 'heading',
        content: 'Key Principles of User-Centered Design'
      },
      {
        type: 'paragraph',
        content: 'User-centered design is guided by several key principles that ensure the focus remains on the user throughout the design process. These principles help designers create products that are not only visually appealing but also functional and user-friendly.'
      },
      {
        type: 'list',
        items: [
          'Early and continuous focus on users and their tasks',
          'Empirical measurement of user behavior',
          'Iterative design process',
          'Integrated design, considering all aspects of usability',
          'Design with multidisciplinary teams'
        ]
      },
      {
        type: 'paragraph',
        content: 'By following these principles, designers can create products that truly meet user needs and provide a positive user experience.'
      },
      {
        type: 'heading',
        content: 'The User-Centered Design Process'
      },
      {
        type: 'paragraph',
        content: 'The UCD process typically involves several phases, including research, design, evaluation, and implementation. Each phase focuses on understanding and addressing user needs.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        caption: 'User testing session in progress'
      },
      {
        type: 'paragraph',
        content: 'Research is a critical component of UCD. It involves understanding who the users are, what they need, and how they behave. This can be done through various methods such as interviews, surveys, and observations.'
      },
      {
        type: 'paragraph',
        content: 'Once user needs are understood, designers can create solutions that address these needs. These solutions are then tested with real users to ensure they meet the requirements effectively.'
      },
      {
        type: 'heading',
        content: 'Benefits of User-Centered Design'
      },
      {
        type: 'paragraph',
        content: 'Implementing UCD in your design process can lead to numerous benefits, including:'
      },
      {
        type: 'list',
        items: [
          'Improved user satisfaction and adoption',
          'Reduced development costs by addressing issues early',
          'Increased productivity and efficiency for users',
          'Reduced training and support costs',
          'Enhanced brand reputation and customer loyalty'
        ]
      },
      {
        type: 'paragraph',
        content: 'By prioritizing user needs throughout the design process, businesses can create products that not only meet functional requirements but also provide a positive and enjoyable user experience.'
      },
      {
        type: 'heading',
        content: 'Implementing User-Centered Design in Your Organization'
      },
      {
        type: 'paragraph',
        content: 'Adopting a user-centered design approach requires commitment from the entire organization. It involves changing the way teams work, allocating resources for user research, and being willing to iterate based on user feedback.'
      },
      {
        type: 'paragraph',
        content: 'Here are some steps to implement UCD in your organization:'
      },
      {
        type: 'list',
        items: [
          'Educate stakeholders about the importance and benefits of UCD',
          'Build a multidisciplinary team with diverse skills and perspectives',
          'Establish processes for continuous user research and testing',
          'Create user personas and journey maps to guide design decisions',
          'Develop design systems that ensure consistency and usability',
          'Measure the impact of design changes on user satisfaction and business metrics'
        ]
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        caption: 'Design team collaborating on user experience improvements'
      },
      {
        type: 'heading',
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'User-centered design is not just a trend; it\'s a fundamental approach to creating successful digital products. By focusing on users and their needs, designers can create solutions that are intuitive, efficient, and enjoyable to use.'
      },
      {
        type: 'paragraph',
        content: 'As technology continues to evolve, the importance of UCD will only increase. Businesses that prioritize user needs in their design process will be better positioned to create products that users love and recommend to others.'
      },
      {
        type: 'paragraph',
        content: 'Remember, the goal of user-centered design is not just to create products that work, but to create products that work well for the people who use them. By keeping users at the center of the design process, we can create digital experiences that truly make a difference in people\'s lives.'
      }
    ],
    tags: ['UX Design', 'User Research', 'Design Process', 'User Testing', 'Design Thinking']
  };

  return (
    <main>
      <article className="blog-detail">
        <div className="blog-detail__hero">
          <div className="container">
            <div className="blog-detail__category">{blogPost.category}</div>
            <h1 className="blog-detail__title">{blogPost.title}</h1>
            <div className="blog-detail__meta">
              <div className="blog-detail__author">
                <img src={blogPost.authorImage} alt={blogPost.author} className="blog-detail__author-image" />
                <div className="blog-detail__author-info">
                  <div className="blog-detail__author-name">{blogPost.author}</div>
                  <div className="blog-detail__author-role">{blogPost.authorRole}</div>
                </div>
              </div>
              <div className="blog-detail__date">{blogPost.date}</div>
              <div className="blog-detail__read-time">{blogPost.readTime}</div>
            </div>
          </div>
        </div>

        <div className="blog-detail__featured-image">
          <img src={blogPost.image} alt={blogPost.title} />
        </div>

        <div className="container">
          <div className="blog-detail__content">
            <div className="blog-detail__main">
              {blogPost.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return <p key={index} className="blog-detail__paragraph">{block.content}</p>;
                  case 'heading':
                    return <h2 key={index} className="blog-detail__heading">{block.content}</h2>;
                  case 'image':
                    return (
                      <figure key={index} className="blog-detail__figure">
                        <img src={block.url} alt={block.caption} className="blog-detail__image" />
                        <figcaption className="blog-detail__caption">{block.caption}</figcaption>
                      </figure>
                    );
                  case 'quote':
                    return (
                      <blockquote key={index} className="blog-detail__quote">
                        <p>{block.content}</p>
                        <cite>{block.author}</cite>
                      </blockquote>
                    );
                  case 'list':
                    return (
                      <ul key={index} className="blog-detail__list">
                        {block.items && block.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="blog-detail__list-item">{item}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}

              <div className="blog-detail__tags">
                <h3 className="blog-detail__tags-title">Tags</h3>
                <div className="blog-detail__tags-list">
                  {blogPost.tags.map((tag, index) => (
                    <Link key={index} to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="blog-detail__tag">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="blog-detail__share">
                <h3 className="blog-detail__share-title">Share this article</h3>
                <div className="blog-detail__share-buttons">
                  <a href="#" className="blog-detail__share-button" aria-label="Share on Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="blog-detail__share-button" aria-label="Share on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="blog-detail__share-button" aria-label="Share on LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="blog-detail__author-bio">
                <img src={blogPost.authorImage} alt={blogPost.author} className="blog-detail__author-bio-image" />
                <div className="blog-detail__author-bio-content">
                  <h3 className="blog-detail__author-bio-name">{blogPost.author}</h3>
                  <p className="blog-detail__author-bio-role">{blogPost.authorRole}</p>
                  <p className="blog-detail__author-bio-description">
                    Sarah is a UX designer with over 8 years of experience creating user-centered digital experiences. 
                    She specializes in user research, information architecture, and interaction design. 
                    When she's not designing, Sarah enjoys hiking and photography.
                  </p>
                  <div className="blog-detail__author-bio-social">
                    <a href="#" className="blog-detail__author-bio-social-link" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="blog-detail__author-bio-social-link" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <aside className="blog-detail__sidebar">
              <div className="blog-detail__sidebar-section">
                <h3 className="blog-detail__sidebar-title">Related Articles</h3>
                <div className="blog-detail__related-posts">
                  <Link to="/blog/2" className="blog-detail__related-post">
                    <img src="https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Color Theory in UI Design" className="blog-detail__related-post-image" />
                    <div className="blog-detail__related-post-content">
                      <h4 className="blog-detail__related-post-title">Color Theory in UI Design: A Comprehensive Guide</h4>
                      <p className="blog-detail__related-post-date">May 28, 2023</p>
                    </div>
                  </Link>
                  <Link to="/blog/5" className="blog-detail__related-post">
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Accessibility in Design" className="blog-detail__related-post-image" />
                    <div className="blog-detail__related-post-content">
                      <h4 className="blog-detail__related-post-title">Accessibility in Design: Creating Inclusive Digital Experiences</h4>
                      <p className="blog-detail__related-post-date">April 8, 2023</p>
                    </div>
                  </Link>
                  <Link to="/blog/3" className="blog-detail__related-post">
                    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Building a Strong Brand Identity" className="blog-detail__related-post-image" />
                    <div className="blog-detail__related-post-content">
                      <h4 className="blog-detail__related-post-title">Building a Strong Brand Identity in the Digital Age</h4>
                      <p className="blog-detail__related-post-date">May 10, 2023</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="blog-detail__sidebar-section">
                <h3 className="blog-detail__sidebar-title">Popular Categories</h3>
                <div className="blog-detail__categories">
                  <Link to="/blog?category=ux" className="blog-detail__category-link">UX Design</Link>
                  <Link to="/blog?category=ui" className="blog-detail__category-link">UI Design</Link>
                  <Link to="/blog?category=branding" className="blog-detail__category-link">Branding</Link>
                  <Link to="/blog?category=design" className="blog-detail__category-link">Web Design</Link>
                  <Link to="/blog?category=mobile" className="blog-detail__category-link">Mobile Design</Link>
                </div>
              </div>

              <div className="blog-detail__sidebar-section">
                <h3 className="blog-detail__sidebar-title">Subscribe to Our Newsletter</h3>
                <p className="blog-detail__sidebar-description">
                  Stay up to date with the latest insights and articles on design, UX, and digital trends.
                </p>
                <form className="blog-detail__sidebar-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="blog-detail__sidebar-input" 
                    required 
                  />
                  <button type="submit" className="blog-detail__sidebar-button">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="blog-detail__more-posts">
        <div className="container">
          <h2 className="blog-detail__more-posts-title">More Articles You Might Like</h2>
          <div className="blog-detail__more-posts-grid">
            <Link to="/blog/4" className="blog-detail__more-post">
              <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="The Evolution of Web Design" className="blog-detail__more-post-image" />
              <div className="blog-detail__more-post-content">
                <span className="blog-detail__more-post-category">Design</span>
                <h3 className="blog-detail__more-post-title">The Evolution of Web Design: Past, Present, and Future</h3>
                <p className="blog-detail__more-post-excerpt">
                  Take a journey through the history of web design, examine current trends, and look ahead to what the future might hold.
                </p>
                <div className="blog-detail__more-post-meta">
                  <span className="blog-detail__more-post-date">April 22, 2023</span>
                  <span className="blog-detail__more-post-read-time">7 min read</span>
                </div>
              </div>
            </Link>
            <Link to="/blog/6" className="blog-detail__more-post">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Designing for Dark Mode" className="blog-detail__more-post-image" />
              <div className="blog-detail__more-post-content">
                <span className="blog-detail__more-post-category">UI</span>
                <h3 className="blog-detail__more-post-title">Designing for Dark Mode: Best Practices and Considerations</h3>
                <p className="blog-detail__more-post-excerpt">
                  A comprehensive guide to implementing dark mode in your designs, including color considerations, contrast, and user preferences.
                </p>
                <div className="blog-detail__more-post-meta">
                  <span className="blog-detail__more-post-date">March 25, 2023</span>
                  <span className="blog-detail__more-post-read-time">9 min read</span>
                </div>
              </div>
            </Link>
            <Link to="/blog/3" className="blog-detail__more-post">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Building a Strong Brand Identity" className="blog-detail__more-post-image" />
              <div className="blog-detail__more-post-content">
                <span className="blog-detail__more-post-category">Branding</span>
                <h3 className="blog-detail__more-post-title">Building a Strong Brand Identity in the Digital Age</h3>
                <p className="blog-detail__more-post-excerpt">
                  Explore strategies for creating a cohesive and memorable brand identity that resonates with your audience across digital platforms.
                </p>
                <div className="blog-detail__more-post-meta">
                  <span className="blog-detail__more-post-date">May 10, 2023</span>
                  <span className="blog-detail__more-post-read-time">6 min read</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default BlogDetailPage; 