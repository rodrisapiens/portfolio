import React, { useEffect } from "react";
import WebFont from 'webfontloader';
import './styles/app.css';
import MobileNavBar from "./components/MobileNavBar";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage.js";
import ProjectsPage from "./components/ProjectsPage";
import {ScrollContextProvider} from "./context";
function App() {
  useEffect(() => {
    WebFont.load({
      Fonts: {
        families: ['Eina']
      }
    });
  }, [])
  return (
    <BrowserRouter>
    <ScrollContextProvider>
    <div className="app">
      {window.innerWidth<600?<MobileNavBar/>:<NavBar/>}
      <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/projectPage" element={<ProjectsPage />} />
        </Routes>
    </div>
    </ScrollContextProvider>
    </BrowserRouter>
  );
}

export default App;
