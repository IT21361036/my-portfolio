import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #000000;
  color: #ffffff;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const ContactInfo = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: #1a1a1a;
  border-radius: 0.5rem;
  
  a {
    color: #ffffff;
    text-decoration: none;
    
    &:hover {
      color: #e0e0e0;
    }
  }
`;

const Contact: React.FC = () => {
  const contactInfo = [
    { label: 'Email', value: 'saara.kaizer@gmail.com', link: 'mailto:saara.kaizer@gmail.com' },
    { label: 'Phone', value: '+94 71 789 3019', link: 'tel:+94717893019' },
    { label: 'Location', value: 'Malabe, Sri Lanka' },
    { label: 'LinkedIn', value: 'LinkedIn Profile', link: '#' },
    { label: 'GitHub', value: 'GitHub Profile', link: '#' },
  ];

  return (
    <ContactSection>
      <ContactContainer>
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactInfo>
          {contactInfo.map((item, index) => (
            <ContactItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
    </ContactSection>
  );
};

export default Contact; 