import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  padding: 2rem 0 2rem 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
  background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  opacity: 0.8;
`;

const AnimatedSphere: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group>
        {/* Outer sphere */}
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            color="#2563eb"
            metalness={0.7}
            roughness={0.2}
            wireframe
            transparent
            opacity={0.8}
          />
        </Sphere>
        {/* Inner sphere */}
        <Sphere args={[0.7, 32, 32]}>
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.5}
            roughness={0.3}
            transparent
            opacity={0.6}
          />
        </Sphere>
        {/* Core sphere */}
        <Sphere args={[0.4, 16, 16]}>
          <meshStandardMaterial
            color="#60a5fa"
            metalness={0.3}
            roughness={0.4}
            transparent
            opacity={0.8}
          />
        </Sphere>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i) * 2,
              Math.cos(i) * 2,
              Math.sin(i * 0.5) * 2,
            ]}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial
              color="#93c5fd"
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={1.5}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

const Home: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <HeroSection>
      <Content>
        <Title
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {"Hi, I'm Saara Kaizer".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              style={{ display: 'inline-block' }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Full Stack Developer specializing in modern web technologies
        </Subtitle>
        <Button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </Button>
      </Content>
      <CanvasContainer>
        <AnimatedSphere />
      </CanvasContainer>
    </HeroSection>
  );
};

export default Home; 