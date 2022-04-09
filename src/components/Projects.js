import React, { useState } from 'react'
import "../styles/projects.css"
import ProjectCard from "./ProjectCard.js"
import { info } from "../api"
function Projects() {
  const [more, setMore] = useState(false);
  return (
    <div className='projects' id="Projects">
      <h1 className="latestProjects">
        latest Projects
      </h1>
      <div className="cards">
        {more?
          info.map((element) => {
           return <ProjectCard info={element} />
          })
          :
          <>
            <ProjectCard info={info[0]} />
            <ProjectCard info={info[1]} />
            <ProjectCard info={info[2]} />
          </>
        }
  
      </div>
      <button className="more" onClick={() => { setMore(!more) }}>{more ? "Watch less projects" : "Watch more projects"}</button>
    </div>
  )
}

export default Projects