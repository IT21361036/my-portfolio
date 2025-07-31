import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Theme } from '@emotion/react';

interface CustomTheme extends Theme {
  colors: {
    text: string;
    textSecondary: string;
    surface: string;
  };
}

const AboutSection = styled.section`
  min-height: 100vh;
<<<<<<< HEAD
  padding: 2rem;
  background-color: #000000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
=======
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
>>>>>>> db64106a070ef3172f0c7d7b8625760a8552be41
  }
`;

const Bio = styled.div`
  h2 {
<<<<<<< HEAD
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    background: linear-gradient(45deg, #ffffff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #b0b0b0;
    margin-bottom: 1.5rem;
  }
`;

const SkillsSection = styled.div`
  margin-top: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

=======
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 1rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

>>>>>>> db64106a070ef3172f0c7d7b8625760a8552be41
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
<<<<<<< HEAD
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  padding: 1.5rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  h3 {
    color: #00d4ff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
=======
  background: ${props => props.theme.colors.surface};
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
>>>>>>> db64106a070ef3172f0c7d7b8625760a8552be41
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
<<<<<<< HEAD
    color: #b0b0b0;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    padding-left: 1rem;
    position: relative;

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: #00d4ff;
    }
  }
`;

const ExperienceSection = styled.div`
  margin-top: 3rem;
`;

const ExperienceCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const CompanyInfo = styled.div`
  h4 {
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
  
  .position {
    color: #00d4ff;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Period = styled.span`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AchievementItem = styled(motion.li)`
  color: #b0b0b0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #00d4ff;
    font-weight: bold;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationSection = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
  }

  h3 {
    color: #00d4ff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #b0b0b0;
    line-height: 1.6;
=======
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
>>>>>>> db64106a070ef3172f0c7d7b8625760a8552be41
  }
`;

const About: React.FC = () => {
  const skills = {
<<<<<<< HEAD
    'Programming Languages': ['Python', 'C#', 'C++', 'Kotlin', 'Java', 'JavaScript'],
    'Web Development': ['.NET', 'PHP/Laravel', 'MERN Stack', 'HTML', 'CSS', 'Angular'],
    'AI & ML': ['Machine Learning', 'Computer Vision', 'OpenCV', 'LLM', 'NLP'],
    'Cloud & DevOps': ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
    'Databases': ['PL/SQL', 'Oracle', 'MySQL', 'Microsoft SQL Server', 'MongoDB'],
    'Mobile Development': ['React Native'],
  };

  const experience = [
    {
      company: 'IFS R&D International (Pvt) Ltd.',
      position: 'Trainee Software Engineer',
      period: 'July 2024 - July 2025',
      achievements: [
        'Developed and maintained inventory, purchase, and supply chain modules in IFS APP10 and IFS Cloud environments',
        'Delivered real-time technical support by troubleshooting complex issues via screen-sharing sessions',
        'Executed data repairs and system optimizations by deploying R&D patches and customized Oracle PL/SQL scripts',
        'Mentored new software engineers and trainees, providing technical guidance and onboarding support',
        'Configured, maintained, and optimized Azure Workspace environments for enterprise-level testing and production systems'
      ]
    },
    {
      company: 'Delivergate (Pvt) Ltd.',
      position: 'Trainee Backend PHP/Laravel Developer',
      period: 'Aug 2023 - Oct 2023',
      achievements: [
        'Proficient in Git (GitLab, GitHub) for version control and collaborative development',
        'Implemented CI/CD pipelines and developed unit tests to automate testing, deployment, and improve code quality',
        'Gained hands-on experience with AWS for cloud-based application deployments',
        'Worked on backend development using Laravel (PHP), contributing to product development and feature enhancements',
        'Deployed and managed web applications using Laravel Envoyer and Forge'
      ]
    }
  ];

  return (
    <AboutSection>
      <Container>
        <Header>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '3rem',
              color: '#ffffff',
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Me
          </motion.h1>
        </Header>

        <MainContent>
          <Bio>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              I am a Software Engineering graduate from Sri Lanka Institute of Information Technology with a strong foundation in both frontend and backend development. Currently working as a Trainee Software Engineer at IFS R&D International, I specialize in enterprise-level web application development.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              My expertise includes DevOps practices, C#, .NET, Angular, Computer Vision, and MERN Stack development. I am equipped with strong problem-solving, analytical thinking, and effective communication abilities, making me confident in my capacity to drive results and enhance team performance.
            </motion.p>
          </Bio>

          <ExperienceSection>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '2rem' }}
            >
              Professional Experience
            </motion.h2>
            {experience.map((exp, index) => (
              <ExperienceCard
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <ExperienceHeader>
                  <CompanyInfo>
                    <h4>{exp.company}</h4>
                    <div className="position">{exp.position}</div>
                  </CompanyInfo>
                  <Period>{exp.period}</Period>
                </ExperienceHeader>
                <AchievementList>
                  {exp.achievements.map((achievement, i) => (
                    <AchievementItem
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + i * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </AchievementItem>
                  ))}
                </AchievementList>
              </ExperienceCard>
            ))}
          </ExperienceSection>
        </MainContent>

        <SkillsSection>
=======
    frontend: ['React', 'TypeScript', 'Next.js', 'Three.js', 'Framer Motion'],
    backend: ['Node.js', 'Python', 'Java', '.NET/C#', 'SQL', 'REST APIs'],
    'ai-ml': ['Machine Learning', 'LLM', 'Computer Vision', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLP'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Jenkins', 'GitHub Actions', 'Monitoring & Logging'],
    tools: ['Git', 'VS Code', 'Figma'],
    other: ['Agile', 'Testing', 'Performance Optimization', 'Security'],
  };

  return (
    <AboutSection>
      <Container>
        <Bio>
>>>>>>> db64106a070ef3172f0c7d7b8625760a8552be41
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}
          >
            Technical Skills
          </motion.h2>
          <SkillsGrid>
            {Object.entries(skills).map(([category, items], index) => (
              <SkillCard
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3>{category}</h3>
                <ul>
                  {items.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsSection>

        <EducationSection>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h3>
=======
          >
            About Me
          </motion.h2>
>>>>>>> db64106a070ef3172f0c7d7b8625760a8552be41
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <strong>BSc (Hons) in Information Technology</strong> - Software Engineering<br/>
            Sri Lanka Institute of Information Technology, Malabe, Sri Lanka<br/>
            Cumulative GPA: 3.4 | Year 4 Semester 2 GPA: 3.71
          </motion.p>
        </EducationSection>
=======
            I am a passionate software engineer with a strong foundation in both frontend and backend development. 
            My journey in software development began with a curiosity for creating things that make a difference, 
            and that drive continues to push me to learn and grow every day.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I specialize in building modern web applications with a focus on performance, 
            user experience, and clean code practices. My approach combines technical expertise 
            with creative problem-solving to deliver solutions that are both efficient and elegant.
          </motion.p>
        </Bio>

        <SkillsGrid>
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCard
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <ul>
                {items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </SkillCard>
          ))}
        </SkillsGrid>
>>>>>>> db64106a070ef3172f0c7d7b8625760a8552be41
      </Container>
    </AboutSection>
  );
};

export default About; 