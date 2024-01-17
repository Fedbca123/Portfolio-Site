import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://portfolio-backend-production-6c214.up.railway.app/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((projectObj) => (
          <ProjectContainer key={uniqid()} project={projectObj.project} />
        ))}
      </div>
    </section>
  )
}

export default Projects;