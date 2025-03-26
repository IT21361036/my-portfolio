import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Bio = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 1.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 0.5rem;
  }
`;

const About: React.FC = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Next.js', 'Three.js', 'Framer Motion'],
    backend: ['Node.js', 'Python', 'Java', 'SQL', 'REST APIs'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma'],
    other: ['Agile', 'CI/CD', 'Testing', 'Performance Optimization', 'Security'],
  };

  return (
    <AboutSection>
      <Container>
        <Bio>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
      </Container>
    </AboutSection>
  );
};

export default About; 