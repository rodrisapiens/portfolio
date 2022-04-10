import React, { useEffect } from 'react'
import { useScroll } from '../context';
import { Link } from 'react-router-dom';
import "../styles/projectspage.css"
import {ReactComponent as Arrow} from "../images/Arrow.svg"
import { ReactComponent as Deployment } from "../images/deployment.svg"
import { ReactComponent as Git } from "../images/git.svg"
function ProjectsPage() {
  const { project, setProject } = useScroll();
  function handleGit()
  {
    window.open(project.git);
  }
  function handleDeploy()
  {
    window.open(project.deployment);
  }
  return (
    <div className='projectsPage'>
      <Link to={"/"} className='backBtn'><Arrow/>Back</Link>
      <img src={project.cardImage} alt="cardImage" className="projectPageImg" />
      <div className="projectsPageTexts">
        <h1 className='projectsPageTitle'>{project.cardTitle}</h1>
        <p className="projectsPageDesciption">{project.cardDescription}</p>
      </div>
      <div className="buttons">
        <button className="gitBtn" onClick={handleGit}><Git />want to see the code?</button>
        <button className="deployBtn" onClick={handleDeploy} ><Deployment />want to see the deployment?</button>
      </div>
    </div>
  )
}

export default ProjectsPage
