import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 0;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.theme.colors.primary};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(37, 99, 235, 0.8), rgba(30, 64, 175, 0.8));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

interface Project {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/example/ecommerce',
    },
    {
      title: 'Real-time Chat App',
      description: 'A modern chat application with real-time messaging capabilities using WebSocket. Includes features like user presence, message history, and file sharing.',
      tech: ['React', 'Socket.io', 'Firebase', 'Tailwind CSS'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/example/chat-app',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Three.js. Features smooth animations, 3D graphics, and a modern design.',
      tech: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/example/portfolio',
    },
  ];

  return (
    <ProjectsSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectImage />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </Link>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 