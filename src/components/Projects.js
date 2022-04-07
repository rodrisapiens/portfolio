import React from 'react'
import "../styles/projects.css"
import ProjectCard from "./ProjectCard.js"
function Projects() {
  return (
    <div className='projects' id="Projects">
      <h1 className="latestProjects">
        latest Projects
      </h1>
      <div className="cards">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
      <button className="more">Watch More projects</button>
    </div>
  )
}

export default Projects