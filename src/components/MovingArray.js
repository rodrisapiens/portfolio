import React from 'react'
import { aboutMeText } from "../api"
import "../styles/movingarray.css";
function MovingArray() {
    return (
        <div className='movingArray'>
            <div className="infoBox">
                <p className="infoInside">
                    {aboutMeText.p5}
                </p>
            </div>
            <div className="infoBox">
                <p className="infoInside">
                    {aboutMeText.p2}
                </p>
            </div>
            <div className="infoBox">
                <p className="infoInside">
                    {aboutMeText.p3}
                </p>
            </div>
            <div className="infoBox">
                <p className="infoInside">
                    {aboutMeText.p4}
                </p>
            </div>
            <div className="infoBox">
                <p className="infoInside">
                    {aboutMeText.p6}
                </p>
            </div>
            <div className="infoBox">
                <p className="infoInside">
                    {aboutMeText.p1}
                </p>
            </div>
        </div>
    )
}

export default MovingArray