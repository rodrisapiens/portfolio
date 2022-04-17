import React, { useEffect } from 'react'
import "../styles/projectCard.css"
import { Link } from "react-router-dom";
import { useScroll } from "../context";
function ProjectCard({ info, hide }) {
  const { project, setProject } = useScroll();
  function handleClick() {
    console.log(typeof (setProject))
    setProject(info);
    console.log("hola")
  }
  function handleHover(e) {
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    const event_offsetX = e.pageX - currentTargetRect.left;
    const event_offsetY = e.pageY - currentTargetRect.bottom;
    const horizontal = event_offsetX - e.currentTarget.clientWidth / 2;
    const vertical = event_offsetY-e.currentTarget.clientHeight-e.currentTarget.clientHeight/ 2;
    console.log(e.currentTarget.clientHeight,"clientHeight")
    console.log(event_offsetY,"event_offsetY")
    e.currentTarget.style.transform = `rotateY(${horizontal/30}deg) rotateX(${vertical/10}deg)`;
  }
  function handleMouseLeave(e)
  {
    e.currentTarget.style.transition="all .5s ease-in-out";
    e.currentTarget.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
  }
  function handleMouseEnter(e){
    e.currentTarget.style.transition = `none`;
  }

  return (

    <Link to={"/projectPage"} onMouseEnter={(e)=>{handleMouseEnter(e)}} onClick={handleClick} onMouseLeave={(e)=>{handleMouseLeave(e)}} onMouseMove={(e) => { handleHover(e) }} className={info.bg === "#711A75" ? `projectCard Violet ${hide}` : info.bg === "#F10086" ? `projectCard pink ${hide}` : `projectCard ligthPink ${hide}`}>
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