import React from 'react'
import { ReactComponent as C } from "../images/c.svg"
import { ReactComponent as Html } from "../images/html.svg"
import { ReactComponent as Css } from "../images/cssIcon.svg"
import { ReactComponent as Js } from "../images/js.svg"
import { ReactComponent as ReactIcon } from "../images/reactIcon.svg"
import { ReactComponent as Cplusplus } from "../images/cplusplus.svg"
import { ReactComponent as Matlab } from "../images/matlab.svg"
import MovingArray from './MovingArray'
import "../styles/aboutme.css"
import { aboutMeText } from "../api";
import me from "../images/meme.webp";
function AboutMe() {
  return (
    <div className='AboutMe' id='AboutMe'>
      <h1 className="aboutMeTitle">About Me</h1>
      <div className="shapesConteiner p0">
        <div className="rectangle"></div>
        <div className="circle"></div>
        <p className="aboutMeText">
          {aboutMeText.title}
        </p>
      </div>
      <div className="shapesConteiner p1">
        <div className="rectangle"></div>
        <div className="circle"></div>
        <p className="aboutMeText">
          {aboutMeText.p1}
        </p>
      </div>
      <div className="shapesConteiner p2">
        <div className="rectangle"></div>
        <div className="circle"></div>
        <p className="aboutMeText">
          {aboutMeText.p6}
        </p>
      </div>
      <div className="shapesConteiner p3">
        <div className="rectangle"></div>
        <div className="circle"></div>
        <p className="aboutMeText">
          {aboutMeText.p3}
        </p>
      </div>
      <div className="shapesConteiner p4">
        <div className="rectangle"></div>
        <div className="circle"></div>
        <p className="aboutMeText">
          {aboutMeText.p4}
        </p>
      </div>
      <div className="shapesConteiner p5">
        <div className="rectangle"></div>
        <div className="circle"></div>
        <p className="aboutMeText">
          {aboutMeText.p5}
        </p>
      </div>
      <img src={me} alt="" className="me" />
      <div className="icons">
        <Html className='html icon' />
        <Css className='css icon' />
        <Js className='js icon' />
        <ReactIcon className='reactIcon icon' />
        <C className='c icon' />
        <Cplusplus className='cplusplus icon' />
        <Matlab className='matlab icon' />
      </div>
    </div>

  )
}

export default AboutMe