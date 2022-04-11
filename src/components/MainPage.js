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
        animations(position);
    }
    function animations(position)
    {
        const p1=document.querySelector(".p1");
        const p2=document.querySelector(".p2");
        const p3=document.querySelector(".p3");
        const p4=document.querySelector(".p4");
        const p5=document.querySelector(".p5");
        const p6=document.querySelector(".p6");
        const title=document.querySelector(".aboutMeTextTitle")
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
        if(position>=50){
            console.log("50");
            p1.style.transform=`translate(${-position/3}rem,${-position/2.1}rem)`
            p2.style.transform=`translate(${-position/3.2}rem,${-position/2.6}rem)`
            p3.style.transform=`translate(${-position/3.4}rem,${-position/3.5}rem)`
            p4.style.transform=`translate(${-position/4.3}rem,${-position/5}rem)`
            p5.style.transform=`translate(${-position/8}rem,${-position/6}rem)`
            p6.style.transform=`translate(${-position/50}rem,${-position/7}rem)`
            title.style.transform=`translate(${0}rem,${-position/30}rem)`

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