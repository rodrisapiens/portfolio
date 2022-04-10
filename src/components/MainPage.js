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
        const home = document.getElementById("header");
        const projects = document.getElementById("Projects");
        const aboutMe = document.getElementById("AboutMe");
        if (scrollTo === "Contact") {
            contact.scrollIntoView()
        }
        if (scrollTo === "Home") {
            window.scrollTo(0,0)
            //home.scrollIntoView({ behavior: 'smooth' })
        }
        if (scrollTo === "AboutMe") {
            aboutMe.scrollIntoView()
        }
        if (scrollTo === "Projects") {
            projects.scrollIntoView()
        }
    }, [scrollTo])
    useEffect(() => {
        window.addEventListener("scroll", HandleScroll);

    }, [])
    function HandleScroll() {
        const mainPage=document.querySelector(".mainPage")
        const allHeigth=mainPage.clientHeight;
        const convertionn=window.innerHeight*((window.scrollY+window.innerHeight)/allHeigth);
        const movingHeigth=window.scrollY+convertionn;
        const navBar=window.innerWidth>600?document.querySelector(".navBar"):document.querySelector(".mobileNavBar");
        const position =(movingHeigth/mainPage.clientHeight)*100;//valor de 0 a 100
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
        if (position <6) {
            navBar.style.transform = `translateY(0)`//appear
        }
        console.log(position,"position")
        animations(position);
    }
    function animations(position)
    {
        const cards =document.querySelectorAll(".projectCard")
        if(position>=15)
        {
            //cards[0].classList.remove("cardHidenLeft")
            cards[0].classList.add("cardAppear")
        }
        if(position>=20)
        {
            //cards[1].classList.remove("cardHidenRigth")
            cards[1].classList.add("cardAppear")
        }
        if(position>=25)
        {
            //cards[2].classList.remove("cardHidenLeft")
            cards[2].classList.add("cardAppear")
        }

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