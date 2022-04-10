import React, { useEffect } from 'react'
import "../styles/projectCard.css"
import { Link } from "react-router-dom";
import {useScroll} from "../context";
function ProjectCard({ info,hide }) {
  const {project,setProject} = useScroll();
  function handleClick() {
    console.log(typeof(setProject))
    setProject(info);
    console.log("hola")
  }

  return (

    <Link to={"/projectPage"} onClick={handleClick} className={info.bg === "#711A75" ? `projectCard Violet ${hide}` : info.bg === "#F10086" ? `projectCard pink ${hide}` : `projectCard ligthPink ${hide}`}>
      {info.photoRigth ?
        <>
          <div className='cardText'>
            <h1 className="cardTitle">{info.cardTitle}</h1>
            <p className="cardDescription">{info.cardDescription}</p>
          </div>
          <img src={info.cardImage} alt="" className="CardImage" />
        </>
        :
        <>
          <img src={info.cardImage} alt="" className="CardImage" />
          <div className='cardText'>
            <h1 className="cardTitle">{info.cardTitle}</h1>
            <p className="cardDescription">{info.cardDescription}</p>
          </div>
        </>
      }
    </Link>
  )
}

export default ProjectCard