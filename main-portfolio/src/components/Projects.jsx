
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Campus Safety App & Admin Dashboard",
      description: "A comprehensive mobile-first application for students to report emergencies, share live locations, and reach campus security with real-time monitoring dashboard.",
      technologies: ["React", "React Native", "Tailwind CSS", "Supabase"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/Brendanmebson",
      demo: "#"
    },
    {
      title: "Weekly Report Aggregation Web App",
      description: "ROCKVIEW system for House on The Rock to log and manage weekly CITH attendance reports with role-based access and automated report generation.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/Brendanmebson",
      demo: "#"
    },
    {
      title: "Personal Finance Tracker",
      description: "A comprehensive webapp for creating budgets, tracking expenses, and generating financial reports with real-time API integration.",
      technologies: ["React", "Tailwind CSS", "Financial APIs", "Chart.js"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/Brendanmebson",
      demo: "#"
    },
    {
      title: "Real-time Messaging Application",
      description: "A full-featured messaging app with real-time capabilities, clean UI, and seamless data synchronization built with modern technologies.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "WebSockets"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/Brendanmebson",
      demo: "#"
    },
    {
      title: "Crypto Dashboard",
      description: "A cryptocurrency portfolio manager with real-time price tracking, transaction history, and trading features with advanced state management.",
      technologies: ["TypeScript", "Tailwind CSS", "Crypto APIs", "React"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/Brendanmebson",
      demo: "#"
    },
    {
      title: "QR CODEx Generator",
      description: "A clean and efficient QR code generator web application that converts text and URLs into scannable QR codes with customization options.",
      technologies: ["HTML", "CSS", "JavaScript", "QR Code API"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/Brendanmebson",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore some of my recent work spanning web development, mobile applications,
            and full-stack solutions. Each project demonstrates my commitment to quality
            and innovation.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image">
                <div className="placeholder-image">
                  <span>📱</span>
                </div>
                <div className="project-overlay">
                  <a href={project.demo} className="project-link">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} className="project-link">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="project-content">
               <h3>{project.title}</h3>
               <p>{project.description}</p>
               
               <div className="project-tech">
                 {project.technologies.map((tech, techIndex) => (
                   <span key={techIndex} className="tech-tag">
                     {tech}
                   </span>
                 ))}
               </div>
               
               <div className="project-actions">
                 <a href={project.demo} className="btn btn-small">
                   Live Demo
                 </a>
                 <a href={project.github} className="btn btn-outline btn-small">
                   View Code
                 </a>
               </div>
             </div>
           </motion.div>
         ))}
       </div>
     </div>
     
     <style jsx>{`
       .section-header {
         text-align: center;
         margin-bottom: 4rem;
       }
       
       .section-title {
         font-size: 3rem;
         font-weight: 700;
         margin-bottom: 1rem;
         background: linear-gradient(45deg, #667eea, #764ba2);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         background-clip: text;
       }
       
       .section-subtitle {
         font-size: 1.2rem;
         opacity: 0.9;
         max-width: 600px;
         margin: 0 auto;
         line-height: 1.6;
       }
       
       .projects-grid {
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
         gap: 2rem;
       }
       
       .project-card {
         background: rgba(255, 255, 255, 0.1);
         backdrop-filter: blur(10px);
         border-radius: 20px;
         overflow: hidden;
         border: 1px solid rgba(255, 255, 255, 0.2);
         transition: all 0.3s ease;
       }
       
       .project-card:hover {
         transform: translateY(-10px);
         box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
       }
       
       .project-image {
         position: relative;
         height: 200px;
         overflow: hidden;
       }
       
       .placeholder-image {
         width: 100%;
         height: 100%;
         background: linear-gradient(45deg, #667eea, #764ba2);
         display: flex;
         align-items: center;
         justify-content: center;
         font-size: 4rem;
       }
       
       .project-overlay {
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         background: rgba(0, 0, 0, 0.8);
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 1rem;
         opacity: 0;
         transition: opacity 0.3s ease;
       }
       
       .project-card:hover .project-overlay {
         opacity: 1;
       }
       
       .project-link {
         background: rgba(255, 255, 255, 0.2);
         padding: 0.8rem;
         border-radius: 50%;
         color: white;
         transition: all 0.3s ease;
       }
       
       .project-link:hover {
         background: rgba(255, 255, 255, 0.3);
         transform: scale(1.1);
       }
       
       .project-content {
         padding: 1.5rem;
       }
       
       .project-content h3 {
         font-size: 1.3rem;
         margin-bottom: 0.8rem;
         color: #667eea;
       }
       
       .project-content p {
         margin-bottom: 1rem;
         opacity: 0.9;
         line-height: 1.5;
         font-size: 0.9rem;
       }
       
       .project-tech {
         display: flex;
         flex-wrap: wrap;
         gap: 0.5rem;
         margin-bottom: 1.5rem;
       }
       
       .tech-tag {
         background: rgba(255, 255, 255, 0.1);
         padding: 0.3rem 0.8rem;
         border-radius: 15px;
         font-size: 0.8rem;
         border: 1px solid rgba(255, 255, 255, 0.2);
       }
       
       .project-actions {
         display: flex;
         gap: 1rem;
       }
       
       .btn-small {
         padding: 0.8rem 1.5rem;
         font-size: 0.9rem;
       }
       
       @media (max-width: 768px) {
         .projects-grid {
           grid-template-columns: 1fr;
         }
         
         .section-title {
           font-size: 2rem;
         }
         
         .project-actions {
           flex-direction: column;
         }
       }
     `}</style>
   </section>
 );
};

export default Projects;
