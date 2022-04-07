import React from 'react'
import Projects from "./Projects";
import Home from "./Home";
import AboutMe from "./AboutMe";
import SendMessage from "./SendMessage";
function MainPage() {
    return (
        <div className='mainPage'>
            <Home />
            <Projects />
            <AboutMe />
            <SendMessage />
        </div>
    )
}

export default MainPage