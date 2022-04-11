import React from 'react'
import { ReactComponent as C } from "../images/c.svg"
import { ReactComponent as Html } from "../images/html.svg"
import { ReactComponent as Css } from "../images/cssIcon.svg"
import { ReactComponent as Js } from "../images/js.svg"
import { ReactComponent as ReactIcon } from "../images/reactIcon.svg"
import { ReactComponent as Cplusplus } from "../images/cplusplus.svg"
import { ReactComponent as Matlab } from "../images/matlab.svg"
import "../styles/aboutme.css"
import { aboutMeText } from "../api";
import me from "../images/guy.png";
function AboutMe() {
  return (
    <div className='AboutMe' id='AboutMe'>
      <h1 className="aboutMeTitle">About Me</h1>
      <img src={me} alt="" className="me" />
      <div className="textConteiner">
        <h1 className="aboutMeTextTitle">
        {aboutMeText.title}
        </h1>
        <p className="aboutMeLittle">{aboutMeText.p1}</p>
        <p className="aboutMeLittle">{aboutMeText.p2}</p>
        <p className="aboutMeLittle">{aboutMeText.p3}</p>
        <p className="aboutMeLittle">{aboutMeText.p4}</p>
      </div>
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