import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";

const bubbleStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
};

const btnStyle = {
  padding: '0.6rem 1rem',
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  background: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
  fontSize: '0.9rem',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  transition: 'background 0.2s ease',
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const projects = [
  {
    title: "Campus Safety App & Admin Dashboard",
    description: "Students report emergencies, share live location, and reach campus security.",
    technologies: ["React", "React Native", "Tailwind CSS", "Supabase"],
    images: ["https://picsum.photos/400/250?random=101", "https://picsum.photos/400/250?random=102"],
    github: "https://github.com/Brendanmebson",
    demo: "#",
  },
  {
    title: "Weekly Report Aggregation Web App",
    description: "Attendance tracking with role‑based access and automated report generation.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    images: ["https://picsum.photos/400/250?random=103", "https://picsum.photos/400/250?random=104"],
    github: "https://github.com/Brendanmebson",
    demo: "#",
  },
  {
    title: "Personal Finance Tracker",
    description: "Budget maker, expense tracker and real-time reporting.",
    technologies: ["React", "Tailwind CSS", "APIs", "Chart.js"],
    images: ["https://picsum.photos/400/250?random=105", "https://picsum.photos/400/250?random=106"],
    github: "https://github.com/Brendanmebson",
    demo: "#",
  },
  {
    title: "Real‑time Messaging App",
    description: "Chat app with WebSockets, TypeScript, Tailwind and sleek UI.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "WebSockets"],
    images: ["https://picsum.photos/400/250?random=107", "https://picsum.photos/400/250?random=108"],
    github: "https://github.com/Brendanmebson",
    demo: "#",
  },
  {
    title: "Crypto Dashboard",
    description: "Monitor crypto portfolios with live prices and charts.",
    technologies: ["TypeScript", "Tailwind CSS", "Crypto APIs", "React"],
    images: ["https://picsum.photos/400/250?random=109", "https://picsum.photos/400/250?random=110"],
    github: "https://github.com/Brendanmebson",
    demo: "#",
  },
  {
    title: "QR CODEx Generator",
    description: "Generate customizable QR codes for URLs or text instantly.",
    technologies: ["HTML", "CSS", "JavaScript", "QR Code API"],
    images: ["https://picsum.photos/400/250?random=112", "https://picsum.photos/400/250?random=113"],
    github: "https://github.com/Brendanmebson",
    demo: "#",
  },
];

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hovered, setHovered] = useState(null);

  const openViewer = (imgs, idx) => {
    setImages(imgs);
    setPhotoIndex(idx);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Explore my work in web, mobile & full‑stack tech.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div key={i} className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <Slider {...sliderSettings}>
                  {p.images.map((img, idx) => (
                    <div key={idx} onClick={() => openViewer(p.images, idx)}>
                      <img src={img} alt="Project" className="carousel-img" />
                    </div>
                  ))}
                </Slider>

                {hovered === i && (
                  <div className="project-overlay">
                    <a href={p.demo} style={bubbleStyle} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                    <a href={p.github} style={bubbleStyle} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <div style={bubbleStyle} onClick={() => openViewer(p.images, 0)}><ImageIcon size={20} /></div>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tech">
                  {p.technologies.map((tech, ti) => (
                    <span key={ti} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={p.demo} style={btnStyle} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16}/> Live Demo
                  </a>
                  <a href={p.github} style={btnStyle} target="_blank" rel="noopener noreferrer">
                    <Github size={16}/> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
        }
        .project-image {
          position: relative;
        }
        .carousel-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          cursor: pointer;
        }
        .project-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.75);
          display: flex; align-items: center; justify-content: center;
          gap: 1rem; z-index: 10;
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-content h3 {
          color: #667eea;
          margin-bottom: 0.5rem;
        }
        .project-content p {
          opacity: 0.9; margin-bottom: 1rem;
        }
        .project-tech {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .tech-tag {
          background: rgba(255,255,255,0.1);
          padding: 0.3rem 0.7rem;
          border-radius: 9999px; font-size: 0.75rem; color: #fff;
        }
        .project-buttons {
          display: flex; gap: 1rem;
        }
        .section-title {
          font-size: 2.5rem;
          text-align: center;
          background: linear-gradient(45deg,#667eea,#764ba2);
          background-clip: text; -webkit-background-clip: text; color: transparent;
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          text-align: center; font-size: 1.1rem; color: #ccc;
        }
        @media (max-width: 768px) {
          .carousel-img { height: 180px; }
          .project-buttons { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
