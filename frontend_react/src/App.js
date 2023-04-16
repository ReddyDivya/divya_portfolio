import React from 'react';
import {About, Header, Footer, Skills, Experience, Work, Testimonial} from "./container";
import {Navbar} from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Experience/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default App;