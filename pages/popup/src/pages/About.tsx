import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate('/');
  };
  return (
    <div>
      <h2>About</h2>
      <h2>About</h2>
      <h2>About</h2>
      <h2>About</h2>
      <h2>About</h2>
      <h2>About</h2>
      <h2>About</h2>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default About;
