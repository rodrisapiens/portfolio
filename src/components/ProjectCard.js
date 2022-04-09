import React,{useEffect} from 'react'
import "../styles/projectCard.css"
import {Link} from "react-router-dom";
function ProjectCard({ info}) {
  useEffect(() => {
  }, [])
  
  return (
        
    <Link to={"/projectPage"} className={info.bg==="#711A75"?'projectCard Violet':info.bg==="#F10086"?"projectCard pink":"projectCard ligthPink"}>
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