import React from 'react';
import {Header, Footer, Skills, Experience, Work, Blogs} from "./container";
import {Navbar} from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
        <Navbar/>
        <Header/>
        <Work/>
        <Skills/>
        <Experience/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default App;