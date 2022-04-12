import React, { useState } from 'react'
import "../styles/word.css"
import {ReactComponent as BulletHole} from "../images/bulletHole.svg"
function Word({word}) {
    const [shot,setShot]=useState(false);
    function  handleClick()
    {
        const wordConteiner=document.querySelector(".wordConteiner")
        setShot(true);
        setTimeout(()=>{
            setShot(false)
        },1000)
    }
  return (
    <div className={shot?'wordConteiner wordOn':'wordConteiner wordOff'} onClick={handleClick}>
        <h1 className="word">
            {word}
        </h1>
        {
            shot&&<BulletHole className='bulletHole'/>
        }
    </div>
  )
}

export default Word