
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Database } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: <Server size={40} />,
      title: "Backend Development",
      description: "Creating robust server-side applications using Node.js, Express, and various database technologies."
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications using React Native and native technologies."
    },
    {
      icon: <Database size={40} />,
      title: "Full-Stack Solutions",
      description: "End-to-end application development from database design to user interface implementation."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Software Engineering graduate with expertise in full-stack development,
            mobile applications, and modern web technologies. Passionate about
            creating innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>Academic Excellence</h3>
            <p>
              A Bachelor of Science in Software Engineering Degree holder at
              Babcock University (2021-2025). Actively involved in coding clubs,
              GDSC communities, and various technology events.
            </p>

            <h3>Professional Experience</h3>
            <p>
              Frontend Developer Intern at IT Horizons (Zojatech) where I developed
              web applications using React and Tailwind CSS. Currently working as
              a Freelance React Developer, creating custom websites and applications
              for various clients.
            </p>

            <h3>Leadership & Community</h3>
            <p>
              Active member of multiple developer communities including React
              Developers Club, Google Developer Student Club, and Babcock University
              Coding Club. Passionate about continuous learning and knowledge sharing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="services-grid"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          margin-top: -2rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 6rem;
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

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #667eea;
        }

        .about-text p {
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .service-icon {
          color: #667eea;
          margin-bottom: 1rem;
        }

        .service-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .service-card p {
          font-size: 0.9rem;
          opacity: 0.8;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
