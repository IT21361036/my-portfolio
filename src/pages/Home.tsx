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

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ffffff;
  background: linear-gradient(45deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #b0b0b0;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: #ffffff;
  color: #000000;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #e0e0e0;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
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
`;

const AnimatedSphere: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group>
        {/* Main body - Joy (Yellow) */}
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.3}
            roughness={0.4}
            transparent
            opacity={0.9}
          />
        </Sphere>
        
        {/* Eyes */}
        <group position={[0.3, 0.2, 0.8]}>
          <Sphere args={[0.15, 32, 32]}>
            <meshStandardMaterial color="#000000" />
          </Sphere>
        </group>
        <group position={[-0.3, 0.2, 0.8]}>
          <Sphere args={[0.15, 32, 32]}>
            <meshStandardMaterial color="#000000" />
          </Sphere>
        </group>

        {/* Smile */}
        <group position={[0, -0.2, 0.8]}>
          <Sphere args={[0.2, 32, 32]}>
            <meshStandardMaterial color="#000000" />
          </Sphere>
        </group>

        {/* Hair/Head details */}
        <group position={[0, 0.8, 0]}>
          <Sphere args={[0.3, 32, 32]}>
            <meshStandardMaterial
              color="#FFD700"
              metalness={0.3}
              roughness={0.4}
            />
          </Sphere>
        </group>

        {/* Floating emotions */}
        {[...Array(10)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i) * 2,
              Math.cos(i) * 2,
              Math.sin(i * 0.5) * 2,
            ]}
          >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'][i % 5]}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={1}
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
        ease: "easeOut"
      }
    }
  };

  return (
    <HeroSection>
      <Content>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <Title>
            Hi, I'm <motion.span style={{ display: 'inline-block' }}>Saara Kaizer</motion.span>
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Subtitle>
            Full Stack Developer specializing in modern web technologies
          </Subtitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button>View My Work</Button>
        </motion.div>
      </Content>
      <CanvasContainer>
        <AnimatedSphere />
      </CanvasContainer>
    </HeroSection>
  );
};

export default Home; 