import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const bubbleStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(228, 228, 228, 0.09)', // light background, change to suit theme
  color: '#ffffff', // icon color
  textDecoration: 'none',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer'
  ,
};

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
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <div className="header-content">
          <motion.div whileHover={{ scale: 1.05 }} className="logo">
            <span>.CodeWithBrendan</span>
          </motion.div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>

            {isMobileMenuOpen && (
                          <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="social-links"
                style={{ display: 'flex', gap: '1rem' }} // you can customize spacing here
              >
                <a
                  href="https://github.com/Brendanmebson"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={bubbleStyle}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={bubbleStyle}
                >
                  <Linkedin size={20} />
                </a>
                <a href="mailto:brendanmebson@gmail.com" style={bubbleStyle}>
                  <Mail size={20} />
                </a>
              </motion.div>
            )}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`line line1 ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`line line2 ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`line line3 ${isMobileMenuOpen ? 'open' : ''}`}></span>
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
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .line {
          width: 30px;
          height: 3px;
          background-color: white;
          margin: 4px 0;
          border-radius: 2px;
          transition: 0.4s ease;
          display: block;
        }

        .line1.open {
          transform: rotate(45deg) translate(7px, 6px);
            transform-origin: center;

        }

        .line2.open {
          opacity: 0;
        }

        .line3.open {
          transform: rotate(-45deg) translate(9px, -9px);
            transform-origin: center;

        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(20px);
            padding: 2rem;
            text-align: center;
            gap: 2rem;
            width: 100%;
            z-index: 999;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
            height: 100vh;
          }

          .nav.nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .mobile-socials {
            display: flex;
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .mobile-socials a {
            color: white;
            background: rgba(255, 255, 255, 0.1);
            padding: 0.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .mobile-socials a:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
