import React, { useEffect,useRef } from 'react'
import Projects from "./Projects";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from './Contact';
import { useScroll } from "../context";
import { info } from '../api';
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
        animations(position);
    }
    function animations(position)
    {
        const infoBox= document.querySelectorAll(".infoBox");
        const p1=document.querySelector(".p1");
        const p2=document.querySelector(".p2");
        const p3=document.querySelector(".p3");
        const p4=document.querySelector(".p4");
        const p5=document.querySelector(".p5");
        const p6=document.querySelector(".p6");
        const title=document.querySelector(".aboutMeTextTitle")
        const cards =document.querySelectorAll(".projectCard")
        cards[2].classList.remove("cardAppear")
        cards[1].classList.remove("cardAppear")
        cards[0].classList.remove("cardAppear")
        if(position>=20)
        {
            //cards[0].classList.remove("cardHidenLeft")
            cards[0].classList.add("cardAppear")
        }
        if(position>=27)
        {
            //cards[1].classList.remove("cardHidenRigth")
            cards[1].classList.add("cardAppear")
        }
        if(position>=35)
        {
            cards[2].classList.add("cardAppear")
        }
        if(position>=50){
            console.log("50");
            for(let i=0;i<infoBox.length;i++)
            {
                console.log("hola")
                infoBox[i].style.transform=`translate(${position*6.5}vw,${0}vh)`
            }

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