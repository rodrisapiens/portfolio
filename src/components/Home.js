import React from 'react'
import "../styles/home.css"
import Word from './Word'
import { ReactComponent as NoteBook } from "../images/noteBook.svg"
function Home() {
    return (
        <div className='home' id='Home'>
            <div className="header" id='header'>
                <div className="headerText">
                    <div className="headerTitle">
                        <Word word={"R"}/>
                        <Word word={"O"}/>
                        <Word word={"D"}/>
                        <Word word={"R"}/>
                        <Word word={"I"}/>
                        <Word word={"G"}/>
                        <Word word={"O"}/>
                        <Word word={"N"}/>
                        <Word word={"I"}/>
                        <Word word={"V"}/>
                        <Word word={"E"}/>
                        <Word word={"Y"}/>
                        <Word word={"R"}/>
                        <Word word={"O"}/>
                    {/* <h1 className="headerTitle">
                        Rodrigo Niveryo
                    </h1> */}</div>
                    <h3 className="headerSubtitle">
                        Front end   software developer
                    </h3>
                </div>
            </div>
            <div className="heroSection">
                <NoteBook className='noteBook' />
                <div className="heroTexts">
                    <h2 className="heroText A">
                        I believe true virtue resides in
                    </h2>
                    <h2 className="heroText B">
                        the willigness to feel fool
                    </h2>
                    <h2 className="heroText C">
                        in order to learn.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Home