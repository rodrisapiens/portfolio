import React from 'react'
import { ReactComponent as Logo } from "../images/rodriSapiensLogo.svg"
import { ReactComponent as Arrow } from "../images/Arrow.svg"
import "../styles/navbar.css"
import { Link } from "react-router-dom";
import { useScroll } from "../context";
function NavBar() {
    const { scrollTo, setScrollTo } = useScroll();
    function handleClick() {
    }
    return (
        <div className={"navBar"}>
            <div className={"staticContentDesk"}>
                <div className="rodriSapiensAndLogo">
                    <Logo className="logo" />
                    <h1 className="rodriSapiens">rodriSapiens</h1>
                </div>
                <div className={"navBarLinks"}>
                    <Link to={"/"} onClick={() => { setScrollTo("Home"); }} className="navBarBtn">Home</Link>
                    <Link to={"/"} onClick={() => { setScrollTo("Projects"); }} className="navBarBtn">Projects</Link>
                    <Link to={"/"} onClick={() => { setScrollTo("AboutMe"); }} className="navBarBtn">About Me</Link>
                </div>
                <Link to={"/"} onClick={() => { setScrollTo("Contact"); }} className="navBarBtn contact"><Arrow className='arrow'/>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar