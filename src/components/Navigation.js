import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton';

const Navigation = () => {
  return (
    <ul className="vertical medium-horizontal menu">
      <li><BackButton /></li>
      <li><Link to="/">About</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/projects">Projects</Link></li>
    </ul>
  );
};

export default Navigation;