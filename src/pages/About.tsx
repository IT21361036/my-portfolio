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
  }
`;

const Bio = styled.div`
  h2 {
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
  }
`;

const About: React.FC = () => {
  const skills = {
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