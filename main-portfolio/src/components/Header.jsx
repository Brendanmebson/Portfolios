
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="logo"
          >
            <span>Code With Brendan</span>
          </motion.div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          cursor: pointer;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .nav a:hover {
          color: #667eea;
          transform: translateY(-2px);
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-btn span {
          width: 25px;
          height: 3px;
          background: white;
          margin: 3px 0;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            text-align: center;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav.nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
