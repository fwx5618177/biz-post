import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ArticleListPage from './pages/ArticleListPage';
import ContactPage from './pages/ContactPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import PortfolioShowcasePage from './pages/PortfolioShowcasePage';
import CaseStudyListPage from './pages/CaseStudyListPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/portfolio-showcase" element={<PortfolioShowcasePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="/case-studies" element={<CaseStudyListPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
          <Route path="/personal-info" element={<PersonalInfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
