import React from 'react';
import { motion } from 'framer-motion';
import { Database } from 'lucide-react';

// FontAwesome
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub, FaPython,
  FaJava, FaDocker, FaCloud, FaCode, FaGitAlt, FaMobileAlt
} from 'react-icons/fa';

// SimpleIcons
import {
  SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiSupabase,
  SiPhp, SiFigma, SiKotlin, SiCplusplus
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact color="#61DBFB" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />, small: true },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#000000" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Supabase", icon: <SiSupabase color="#3FCF8E" /> },
      { name: "PHP", icon: <SiPhp color="#777BB4" /> },
      { name: "SQL", icon: <Database color="#E34F26" /> },
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", icon: <FaReact color="#61DBFB" />, small: true },
      { name: "Kotlin", icon: <SiKotlin color="#7F52FF" /> },
      { name: "Mobile Design", icon: <FaMobileAlt color="#A78BFA" />, small: true },
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "C/C++", icon: <SiCplusplus color="#00599C" /> },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "GitHub", icon: <FaGithub color="#181717" /> },
      { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
      { name: 'Git', icon: <FaGitAlt color="#F1502F" /> },
      { name: "VS Code", icon: <FaCode color="#007ACC" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "Cloud (AWS)", icon: <FaCloud color="#FF9900" />, small: true },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Tech Stack</h2>
          <p className="section-subtitle">
            A visual lineup of the tools, languages, and frameworks I love using to bring ideas to life.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <h3>{category.title}</h3>
              <div className="skills-tiles">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-tile">
                    <div className="skill-tile-icon">{skill.icon}</div>
                    <div className={`skill-tile-name ${skill.small ? 'small-text' : ''}`}>
                      {skill.name}
                    </div>
                  </div>
                ))}
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
        }

        .section-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
        }

        .skill-category h3 {
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: 1rem;
          color: #fff;
        }

        .skills-tiles {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .skill-tile {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100px;
          height: 100px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: transform 0.3s ease;
        }

        .skill-tile:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .skill-tile-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .skill-tile-name {
          font-size: 0.85rem;
          color: white;
          font-weight: 500;
          white-space: nowrap;
        }

        .small-text {
          font-size: 0.65rem;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .skill-tile {
            width: 80px;
            height: 80px;
          }

          .skill-tile-icon {
            font-size: 1.5rem;
          }

          .skill-tile-name {
            font-size: 0.63rem;
          }

          .small-text {
            font-size: 0.55rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
