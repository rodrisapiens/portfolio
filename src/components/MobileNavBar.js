import React, { useState, useEffect, useContext } from 'react'
import { ReactComponent as Logo } from "../images/rodriSapiensLogo.svg"
import "../styles/mobileNavBar.css"
import { ReactComponent as NavBarIcon } from "../images/navBarIcon.svg"
import { Link } from "react-router-dom";
import { useScroll } from '../context';
function MobileNavBar() {
  const [first, setFirts] = useState(true);
  const [clicked, setClicked] = useState(false);
  const {scrollTo,setScrollTo}=useScroll();
  useEffect(() => {
    setFirts(true);
  }, [])
  useEffect(()=>{
console.log(scrollTo)
  },[scrollTo])

  function handleClick() {
    setClicked(!clicked);
    setFirts(false);
  }
  return (
    <div className={first ? "mobileNavBar first" : clicked ? 'mobileNavBar mnvon' : 'mobileNavBar mnvoff'}>
      <div className={first ? "staticContent firtsStatic" : "staticContent"}>
        <div className="rodriSapiensAndLogo">
          <Logo className="logo" />
          <h1 className="rodriSapiens">rodriSapiens</h1>
        </div>
        <NavBarIcon className={first ? "navBarIcon" : clicked ? "navBarIcon nbion" : "navBarIcon nbioff"} onClick={handleClick} />
      </div>
      <div className={clicked?"links":"links loff"}>
        <Link to={"/"} onClick={()=>{setScrollTo("Home");setClicked(false)}} >Home</Link>
        <Link to={"/"} onClick={()=>{setScrollTo("Projects");setClicked(false)}}>Projects</Link>
        <Link to={"/"} onClick={()=>{setScrollTo("AboutMe");setClicked(false)}}>About Me</Link>
        <Link to={"/"} onClick={()=>{setScrollTo("Contact");setClicked(false)}}>Contact</Link>
      </div>
    </div>
  )
}

export default MobileNavBar