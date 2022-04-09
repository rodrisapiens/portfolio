import React,{useEffect} from 'react'
import "../styles/projectCard.css"
function ProjectCard({ info}) {
  return (
        
    <div className='projectCard'>
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
    </div>
  )
}

export default ProjectCard