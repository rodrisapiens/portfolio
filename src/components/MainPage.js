import React,{useEffect} from 'react'
import Projects from "./Projects";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from './Contact';
import {useScroll} from "../context";
function MainPage() {
    const {scrollTo,setScrollTo}=useScroll();

    useEffect(() => {
        const contact=document.getElementById("Contact");
        const home=document.getElementById("Home");
        const projects=document.getElementById("Projects");
        const aboutMe=document.getElementById("AboutMe");
        if(scrollTo==="Contact")
        {
            contact.scrollIntoView({behavior:'smooth'})
        }
        if(scrollTo==="Home")
        {
            home.scrollIntoView({behavior:'smooth'})
        }
        if(scrollTo==="AboutMe")
        {
            aboutMe.scrollIntoView({behavior:'smooth'})
        }
        if(scrollTo==="Projects")
        {
            projects.scrollIntoView({behavior:'smooth'})
        }
    }, [scrollTo])
    
    return (
        <div className='mainPage'>
            <Home />
            <Projects />
            <AboutMe />
            <Contact />
        </div>
    )
}

export default MainPage