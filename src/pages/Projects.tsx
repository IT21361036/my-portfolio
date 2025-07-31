import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 0;
  background-color: #000000;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: #ffffff;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  max-width: 400px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 150px;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: #b0b0b0;
  margin-bottom: 1rem;
  line-height: 1.4;
  font-size: 0.9rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: #ffffff;
  color: #000000;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #e0e0e0;
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
      title: "Expertise-Based Author Suggestion System",
      description: "ML-powered recommendation system using sentence transformers for semantic analysis. Achieved 91.24% accuracy in suggesting collaborators based on expertise matching. Integrated with MERN stack for real-time recommendations.",
      tech: ["ML", "Python", "MERN", "NLP", "Transformers"],
      demo: "#",
      github: "https://github.com/Krithiga-Balakrishnan/RP-24-25J-146/tree/develop-contributor-selection"
    },
    {
      title: "SmartNotes Chatbot",
      description: "LLM-powered chatbot using Mistral-7B-Instruct for answering CTSE lecture questions. Implemented TF-IDF vectorization and LangChain workflow orchestration in Jupyter Notebook environment.",
      tech: ["LLM", "Python", "Mistral-7B", "LangChain", "TF-IDF"],
      demo: "#",
      github: "https://github.com/IT21361036/CTSE_Assignment-2-LLM-ChatBot"
    },
    {
      title: "Microservices-Based Online Education Platform",
      description: "Scalable education platform with microservices architecture for course management, authentication, and real-time communication. Deployed on Azure with Kubernetes orchestration and React frontend.",
      tech: ["Java", "Spring Boot", "Kubernetes", "Azure", "React", "Docker"],
      demo: "#",
      github: "https://github.com/IT21361036/CTSE_Assignment-Y4S2"
    },
    {
      title: "E-Commerce Platform",
      description: "Advanced e-commerce platform with React-based management system and mobile app. Features real-time product, order, and inventory management with .NET backend and NoSQL database. Includes vendor ratings and order tracking.",
      tech: ["React", ".NET", "C#", "NoSQL", "Mobile App"],
      demo: "#",
      github: "https://github.com/IT21361036/ecommerce-ead-frontend"
    }
  ];

  return (
    <ProjectsSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectImage />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
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