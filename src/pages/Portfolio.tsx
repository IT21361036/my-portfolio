import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Enhanced styling for better user experience
const PortfolioContainer = styled.div`
  background-color: #000000;
  color: #ffffff;
  scroll-behavior: smooth;
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

// Enhanced Section with Shade Overlay
const SectionWithShade = styled(Section)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
    pointer-events: none;
    z-index: 1;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
`;

// Enhanced Hero Section with Shade
const HeroSection = styled(SectionWithShade)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  
  &::before {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 212, 255, 0.1) 50%, rgba(0, 0, 0, 0.2) 100%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #ffffff, #00d4ff, #ffffff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease-in-out infinite;
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  color: #b0b0b0;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Button = styled.button`
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #000000;
  border: none;
  border-radius: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// Enhanced About Section with Shade
const AboutSection = styled(SectionWithShade)`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  
  &::before {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 212, 255, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Bio = styled.div`
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 2rem;
    color: #ffffff;
    background: linear-gradient(45deg, #ffffff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #b0b0b0;
    margin-bottom: 1.5rem;
  }
`;

// Enhanced Experience Cards
const ExperienceCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  border-radius: 1.5rem;
  padding: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CompanyInfo = styled.div`
  h3 {
    color: #ffffff;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .position {
    color: #00d4ff;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const Period = styled.span`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #000000;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AchievementItem = styled(motion.li)`
  color: #b0b0b0;
  font-size: 0.95rem;
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
`;

// Enhanced Skills Section with Shade
const SkillsSection = styled(SectionWithShade)`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  
  &::before {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 212, 255, 0.08) 50%, rgba(0, 0, 0, 0.15) 100%);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  padding: 2rem;
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 212, 255, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
  }

  h3 {
    color: #00d4ff;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    color: #b0b0b0;
    margin-bottom: 0.8rem;
    font-size: 1rem;
    padding-left: 1.5rem;
    position: relative;
    transition: color 0.3s ease;

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: #00d4ff;
    }

    &:hover {
      color: #ffffff;
    }
  }
`;

// Enhanced Projects Section with Shade
const ProjectsSection = styled(SectionWithShade)`
  background: #000000;
  
  &::before {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 212, 255, 0.1) 50%, rgba(0, 0, 0, 0.2) 100%);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #000000;
  font-weight: bold;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  color: #b0b0b0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #000000;
  padding: 0.4rem 1rem;
  border-radius: 1.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 212, 255, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #00d4ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

// Enhanced Publications Section with Shade
const PublicationsSection = styled(SectionWithShade)`
  background: #000000;
  
  &::before {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 212, 255, 0.06) 50%, rgba(0, 0, 0, 0.1) 100%);
  }
`;

const PublicationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2.5rem;
`;

const PublicationCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  border-radius: 1.5rem;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const PublicationTitle = styled.h3`
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 1.2rem;
  line-height: 1.4;
`;

const PublicationJournal = styled.p`
  color: #00d4ff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const PublicationDate = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
  margin-bottom: 1.2rem;
`;

const PublicationDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const PublicationStatus = styled.span`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #000000;
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
`;

// Enhanced Contact Section with Shade
const ContactSection = styled(SectionWithShade)`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  
  &::before {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 212, 255, 0.1) 50%, rgba(0, 0, 0, 0.2) 100%);
  }
`;

const ContactContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  border-radius: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 212, 255, 0.1);
  }

  a {
    color: #00d4ff;
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 500;

    &:hover {
      color: #ffffff;
    }
  }
`;

// Add Navigation Header
const NavigationHeader = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`;

// Enhanced Navigation with Active State
const NavLink = styled(motion.a)`
  color: #b0b0b0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 204, 0.1) 100%);
    border-radius: 2rem;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #00d4ff;
    
    &::before {
      transform: scaleX(1);
    }
  }

  &.active {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
  }
`;

// Particle Animation Component
const InteractiveParticles: React.FC = () => {
  const particles = React.useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particles.current) {
      const time = state.clock.getElapsedTime();
      particles.current.rotation.x = time * 0.03;
      particles.current.rotation.y = time * 0.06;

      const positions = particles.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(time + positions[i]) * 0.003;
        positions[i + 1] += Math.cos(time + positions[i + 1]) * 0.003;
        positions[i + 2] += Math.sin(time + positions[i + 2]) * 0.003;
      }
      particles.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particleCount = 3000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

    colors[i * 3] = Math.random() * 0.5 + 0.5;
    colors[i * 3 + 1] = Math.random() * 0.5 + 0.5;
    colors[i * 3 + 2] = Math.random() * 0.5 + 0.5;
  }

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const AnimatedParticles: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <InteractiveParticles />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

const Portfolio: React.FC = () => {
  const skills = {
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

  const projects = [
    {
      title: "Expertise-Based Author Suggestion System",
      description: "ML-powered recommendation system using sentence transformers for semantic analysis. Achieved 91.24% accuracy in suggesting collaborators based on expertise matching. Integrated with MERN stack for real-time recommendations.",
      tech: ["ML", "Python", "MERN", "NLP", "Transformers"],
      github: "https://github.com/Krithiga-Balakrishnan/RP-24-25J-146/tree/develop-contributor-selection"
    },
    {
      title: "SmartNotes Chatbot",
      description: "LLM-powered chatbot using Mistral-7B-Instruct for answering CTSE lecture questions. Implemented TF-IDF vectorization and LangChain workflow orchestration in Jupyter Notebook environment.",
      tech: ["LLM", "Python", "Mistral-7B", "LangChain", "TF-IDF"],
      github: "https://github.com/IT21361036/CTSE_Assignment-2-LLM-ChatBot"
    },
    {
      title: "Microservices-Based Online Education Platform",
      description: "Scalable education platform with microservices architecture for course management, authentication, and real-time communication. Deployed on Azure with Kubernetes orchestration and React frontend.",
      tech: ["Java", "Spring Boot", "Kubernetes", "Azure", "React", "Docker"],
      github: "https://github.com/IT21361036/CTSE_Assignment-Y4S2"
    },
    {
      title: "E-Commerce Platform",
      description: "Advanced e-commerce platform with React-based management system and mobile app. Features real-time product, order, and inventory management with .NET backend and NoSQL database. Includes vendor ratings and order tracking.",
      tech: ["React", ".NET", "C#", "NoSQL", "Mobile App"],
      github: "https://github.com/IT21361036/ecommerce-ead-frontend"
    }
  ];

  const publications = [
    {
      title: "WRITEWIZARD: Collaborative Document Editing Tool",
      journal: "The 16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)",
      date: "2025",
      description: "Accepted and presented at ICCCNT 2025. The paper proposes a collaborative editing tool with expertise-based author suggestions using semantic similarity and ML models. Final version submitted for IEEE Xplore publication.",
      status: "To be published – Proceedings of ICCCNT 2025 (IEEE Xplore submission pending)"
    },
    {
      title: "Automated Code Analyzer Based on the ICB Metric",
      journal: "Tuijin Jishu/Journal of Propulsion Technology",
      date: "Nov 12, 2023",
      description: "Research Paper 'Automated Code Analyzer Based on the ICB Metric' published by the Tuijin Jishu/Journal of Propulsion Technology, Vol. 44, Issue 4, 2023.",
      status: "Published",
      link: "https://propulsiontechjournal.com/index.php/journal/article/view/1468"
    }
  ];

  const contactInfo = [
    { label: 'Email', value: 'saara.kaizer@gmail.com', link: 'mailto:saara.kaizer@gmail.com' },
    { label: 'Phone', value: '+94 71 789 3019', link: 'tel:+94717893019' },
    { label: 'Location', value: 'Malabe, Sri Lanka' },
     { label: 'LinkedIn', value: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/saara-kaizer-7b638b216/' },
    { label: 'GitHub', value: 'GitHub Profile', link: 'https://github.com/IT21361036' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add scroll spy functionality
  const [activeSection, setActiveSection] = React.useState('hero');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PortfolioContainer>
      {/* Navigation Header */}
      <NavigationHeader>
        <NavContainer>
          <NavLink
            onClick={() => scrollToSection('hero')}
            className={activeSection === 'hero' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => scrollToSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </NavLink>
          <NavLink
            onClick={() => scrollToSection('skills')}
            className={activeSection === 'skills' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </NavLink>
          <NavLink
            onClick={() => scrollToSection('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => scrollToSection('publications')}
            className={activeSection === 'publications' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Publications
          </NavLink>
          <NavLink
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </NavLink>
        </NavContainer>
      </NavigationHeader>

      {/* Hero Section */}
      <HeroSection id="hero">
        <CanvasContainer>
          <AnimatedParticles />
        </CanvasContainer>
        <Container>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title>Hi, I'm Saara Kaizer</Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Subtitle>Software Engineering Graduate | Sri Lanka Institute of Information Technology</Subtitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Subtitle>Passionate about DevOps, C#, .NET, Angular, Computer Vision, and MERN Stack Development</Subtitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More About Me
              </Button>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* About Section */}
      <AboutSection id="about">
        <Container>
          <AboutGrid>
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
                I am a Software Engineering graduate from Sri Lanka Institute of Information Technology with a strong foundation in both frontend and backend development. Currently working as a Trainee Software Engineer at IFS R&D International, I specialize in enterprise-level web application development.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                My expertise includes DevOps practices, C#, .NET, Angular, Computer Vision, and MERN Stack development. I am equipped with strong problem-solving, analytical thinking, and effective communication abilities, making me confident in my capacity to drive results and enhance team performance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 style={{ color: '#00d4ff', marginBottom: '1rem' }}>Education</h3>
                <p style={{ color: '#b0b0b0', lineHeight: '1.6' }}>
                  <strong>BSc (Hons) in Information Technology</strong> - Software Engineering<br/>
                  Sri Lanka Institute of Information Technology, Malabe, Sri Lanka<br/>
                  Year 4 Semester 2 GPA: 3.71<br/>
                  <span style={{ color: '#00d4ff', fontWeight: '600' }}>Dean's List - Fourth year, Second Semester - 2025</span>
                </p>
              </motion.div>
            </Bio>

            <div>
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
                      <h3>{exp.company}</h3>
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
            </div>
          </AboutGrid>
        </Container>
      </AboutSection>

      {/* Skills Section */}
      <SkillsSection id="skills">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ color: '#ffffff', fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
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
        </Container>
      </SkillsSection>

      {/* Projects Section */}
      <ProjectsSection id="projects">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ color: '#ffffff', fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
          >
            My Projects
          </motion.h2>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage>
                  {project.title.split(' ')[0]}
                </ProjectImage>
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
        </Container>
      </ProjectsSection>

      {/* Publications Section */}
      <PublicationsSection id="publications">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ color: '#ffffff', fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
          >
            Publications
          </motion.h2>
          <PublicationsGrid>
            {publications.map((publication, index) => (
              <PublicationCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => publication.link && window.open(publication.link, '_blank')}
              >
                <PublicationTitle>{publication.title}</PublicationTitle>
                <PublicationJournal>{publication.journal}</PublicationJournal>
                <PublicationDate>{publication.date}</PublicationDate>
                <PublicationDescription>{publication.description}</PublicationDescription>
                <PublicationStatus>{publication.status}</PublicationStatus>
                {publication.link && (
                  <div style={{ marginTop: '1rem' }}>
                    <Link href={publication.link} target="_blank" rel="noopener noreferrer">
                      View Publication →
                    </Link>
                  </div>
                )}
              </PublicationCard>
            ))}
          </PublicationsGrid>
        </Container>
      </PublicationsSection>

      {/* Contact Section */}
      <ContactSection id="contact">
        <Container>
          <ContactContainer>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ color: '#ffffff', fontSize: '3rem', marginBottom: '2rem' }}
            >
              Get In Touch
            </motion.h2>
            <ContactInfo>
              {contactInfo.map((item, index) => (
                <ContactItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <strong>{item.label}:</strong>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </ContactItem>
              ))}
            </ContactInfo>
          </ContactContainer>
        </Container>
      </ContactSection>
    </PortfolioContainer>
  );
};

export default Portfolio; 
