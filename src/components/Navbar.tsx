import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: #2563eb;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #2563eb;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #f8fafc;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: #f8fafc;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 100;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 99;
`;

const MobileNavLink = styled(motion(Link))`
  color: #f8fafc;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const linkVariants = {
    hover: { scale: 1.1 }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <Nav
      as={motion.nav}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <Logo to="/">Portfolio</Logo>
        <NavLinks>
          <NavLink
            to="/"
            variants={linkVariants}
            whileHover="hover"
            style={{ color: location.pathname === '/' ? '#2563eb' : undefined }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            variants={linkVariants}
            whileHover="hover"
            style={{ color: location.pathname === '/about' ? '#2563eb' : undefined }}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            variants={linkVariants}
            whileHover="hover"
            style={{ color: location.pathname === '/projects' ? '#2563eb' : undefined }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            variants={linkVariants}
            whileHover="hover"
            style={{ color: location.pathname === '/contact' ? '#2563eb' : undefined }}
          >
            Contact
          </NavLink>
        </NavLinks>
        <MobileMenuButton
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavContainer>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <MobileNavLink
              to="/"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              to="/about"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              to="/projects"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink
              to="/contact"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar; 