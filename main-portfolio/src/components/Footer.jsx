import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-main"
          >
            <div className="footer-brand">
              <h3>.CodeWithBrendan</h3>
              <p>
                Building intelligent systems for a smarter tomorrow. 
                Specializing in full-stack development and innovative solutions.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                  <li><a href="/resume.pdf" download >Download Resume</a></li>
                  <li><a href="https://github.com/Brendanmebson" target="_blank">GitHub Projects</a></li>
                  <li><a href="#contact">Get In Touch</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><a href="https://github.com/Brendanmebson" target="_blank">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258" target="_blank">LinkedIn</a></li>
                  <li><a href="mailto:brendanmebson@gmail.com">Email</a></li>
                  <li><a href="https://www.instagram.com/brendanmebson/" target="_blank">Instagram</a></li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-bottom"
          >
            <p>&copy; 2025 Mebuge Kamsiyochukwu Brendan. All rights reserved.</p>
            <button onClick={scrollToTop} className="back-to-top">
              <ArrowUp size={20} />
              Back to top
            </button>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 0 1rem;
          position: relative;
          z-index: 10;
        }
        
        .footer-content {
          color: white;
        }
        
        .footer-main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .footer-brand h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .footer-brand p {
          opacity: 0.8;
          line-height: 1.6;
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
         gap: 2rem;
       }

       .footer-section h4 {
         margin-bottom: 1rem;
         color: #667eea;
         font-size: 1.1rem;
       }

       .footer-section ul {
         list-style: none;
       }

       .footer-section ul li {
         margin-bottom: 0.5rem;
       }

       .footer-section ul li a {
         color: rgba(255, 255, 255, 0.8);
         text-decoration: none;
         transition: all 0.3s ease;
       }

       .footer-section ul li a:hover {
         color: #667eea;
         padding-left: 0.5rem;
       }

       .footer-bottom {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding-top: 2rem;
         border-top: 1px solid rgba(255, 255, 255, 0.1);
       }

       .footer-bottom p {
         opacity: 0.6;
         font-size: 0.9rem;
       }

       .back-to-top {
         display: flex;
         align-items: center;
         gap: 0.5rem;
         background: rgba(255, 255, 255, 0.1);
         border: 1px solid rgba(255, 255, 255, 0.2);
         color: white;
         padding: 0.5rem 1rem;
         border-radius: 25px;
         cursor: pointer;
         transition: all 0.3s ease;
       }

       .back-to-top:hover {
         background: rgba(255, 255, 255, 0.2);
         transform: translateY(-2px);
       }

       @media (max-width: 768px) {
         .footer-main {
           grid-template-columns: 1fr;
           gap: 2rem;
         }

         .footer-links {
           grid-template-columns: 1fr;
           gap: 1.5rem;
         }

         .footer-bottom {
           flex-direction: column;
           gap: 1rem;
           text-align: center;
         }
       }
     `}</style>
   </footer>
 );
};

export default Footer;
