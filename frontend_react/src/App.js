import React from 'react';
import {Header, Footer, Skills, Experience, Work, Blogs} from "./container";
import {Navbar} from "./components";
import "./App.scss";
import { ThemeProvider } from './context/theme-Context.js';

const App = () => {
  return (
    <ThemeProvider>
        <div className="app">
          <Navbar/>
          <Header/>
          <Work/>
          <Experience/>
          <Skills/>
          <Blogs/>
          <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App;