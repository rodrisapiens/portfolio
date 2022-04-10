import React, { useState,useEffect} from 'react'
import "../styles/projects.css"
import ProjectCard from "./ProjectCard.js"
import { info } from "../api"
function Projects() {
  const [more, setMore] = useState(false);
  useEffect(() => {
  const cards= document.querySelectorAll(".projectCard")
  cards[0].getElementsByClassName.backgroundColor="#F10086"
  }, [more])
  return (
    <div className='projects' id="Projects">
      <h1 className="latestProjects">
        latest Projects
      </h1>
      <div className="cards">
        {more?
          info.map((element) => {
           return <ProjectCard info={element} hide={""}/>
          })
          :
          <>
            <ProjectCard info={info[0]} hide={"cardHidenLeft"} />
            <ProjectCard info={info[1]} hide={"cardHidenRigth"}/>
            <ProjectCard info={info[2]} hide={"cardHidenLeft"}/>
          </>
        }
  
      </div>
      <button className="more" onClick={() => { setMore(!more) }}>{more ? "Watch less projects" : "Watch more projects"}</button>
    </div>
  )
}

export default Projects