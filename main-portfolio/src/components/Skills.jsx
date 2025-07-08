import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 88, icon: "🔷" },
        { name: "JavaScript", level: 92, icon: "🟨" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "React Native", level: 85, icon: "📱" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "MongoDB", level: 82, icon: "🍃" },
        { name: "Supabase", level: 80, icon: "🔥" },
        { name: "PHP", level: 75, icon: "🐘" },
        { name: "SQL", level: 85, icon: "🗃️" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Java", level: 82, icon: "☕" },
        { name: "C/C++", level: 78, icon: "⚡" },
        { name: "Kotlin", level: 75, icon: "🤖" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90, icon: "🌿" },
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "VMware", level: 80, icon: "🖥️" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" }
      ]
    }
  ];

  const interests = [
    "Augmented and Virtual Reality",
    "Machine Learning",
    "UI/UX Design",
    "Startup Development",
    "Books & Learning",
    "Football",
    "Gaming",
    "Plant Care"
  ];

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
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            My technical proficiency across various programming languages, 
            frameworks, and tools that enable me to build comprehensive solutions.
          </p>
        </motion.div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="skill-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="interests-section"
        >
          <h3>Interests & Hobbies</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="interest-tag"
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="languages-section"
        >
          <h3>Languages</h3>
          <div className="languages-list">
            <div className="language-item">
              <span>English</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-item">
              <span>French</span>
              <span className="language-level">Basic</span>
            </div>
            <div className="language-item">
              <span>Igbo</span>
              <span className="language-level">Basic</span>
            </div>
          </div>
        </motion.div>
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
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .skill-category {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .skill-category h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #667eea;
          text-align: center;
        }
        
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .skill-item {
          margin-bottom: 1rem;
        }
        
        .skill-header {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .skill-icon {
          margin-right: 0.5rem;
          font-size: 1.2rem;
        }
        
        .skill-name {
          flex: 1;
          font-weight: 500;
        }
        
        .skill-level {
          font-size: 0.9rem;
          color: #667eea;
          font-weight: 600;
        }
        
        .skill-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 3px;
        }
        
        .interests-section,
        .languages-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .interests-section h3,
        .languages-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #667eea;
          text-align: center;
        }
        
        .interests-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        
        .interest-tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .interest-tag:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .languages-list {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .language-item {
          text-align: center;
        }
        
        .language-item span:first-child {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .language-level {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .languages-list {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;