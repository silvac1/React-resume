import React from 'react'
import Layout from './components/Layout'
import { browserHistory, Router, Route } from 'react-router';

import About from './components/About';
import Resume from './components/Resume';
import ProjectsIndexContainer from './containers/ProjectsIndexContainer';
import ProjectShowContainer from './containers/ProjectShowContainer';

const App = (props) => {
  const hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== '') {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  };

  return (
    <Router history={browserHistory} onUpdate={hashLinkScroll}>
      <Route component={Layout}>
        <Route path="/" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={ProjectsIndexContainer} />
        <Route path="/projects/:id" component={ProjectShowContainer} />
      </Route>
    </Router>
  );
}

export default App;