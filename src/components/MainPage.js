import React, { useEffect,useRef } from 'react'
import Projects from "./Projects";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from './Contact';
import { useScroll } from "../context";
function MainPage() {
    const { scrollTo, setScrollTo } = useScroll();
    const positions = useRef([0, 0])//[0]is actual position,[1],prev.
    const direction = useRef("down");
    useEffect(() => {

        const contact = document.getElementById("Contact");
        const home = document.getElementById("Home");
        const projects = document.getElementById("Projects");
        const aboutMe = document.getElementById("AboutMe");
        if (scrollTo === "Contact") {
            contact.scrollIntoView({ behavior: 'smooth' })
        }
        if (scrollTo === "Home") {
            home.scrollIntoView({ behavior: 'smooth' })
        }
        if (scrollTo === "AboutMe") {
            aboutMe.scrollIntoView({ behavior: 'smooth' })
        }
        if (scrollTo === "Projects") {
            projects.scrollIntoView({ behavior: 'smooth' })
        }
    }, [scrollTo])
    useEffect(() => {
        window.addEventListener("scroll", HandleScroll);
    }, [])
    function HandleScroll() {//hay un bug, y el scrollY al 100% no coincide con el clientHeigth.aca voy a hacer cuentas para arreglarlo
        const mainPage=document.querySelector(".mainPage")
        const navBar=window.innerWidth>600?document.querySelector(".navBar"):document.querySelector(".mobileNavBar");
        const convertion = (100 / (mainPage.clientHeight));//as a linear function, let's calculate the convertion factor
        const converion1 = 100 / 80;//80 es el maximo que llega position
        const position = ((window.scrollY) * convertion) * converion1//valor de 0 a 100
        positions.current[0] = position;
        if (positions.current[0] - positions.current[1] > 0)//si estoy bajando
        {
            direction.current = "down";
            navBar.style.transition="transform .5s ease"
            navBar.style.transform = `translateY(-100%)`//hide
        }
        else {//si frene o subo
            if (positions.current[0] - positions.current[1] === 0) {
            }
            else {//si subo
                navBar.style.transition="transform .5s ease"
                navBar.style.transform = `translateY(0)`//appear
                direction.current = "up";
            }

        }
        positions.current[1] = positions.current[0];
        if (position === 0) {
            navBar.style.transform = `translateY(0)`//appear
        }
        console.log(position);
    }
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