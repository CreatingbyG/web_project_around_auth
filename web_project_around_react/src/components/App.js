import React from 'react';
import "../vendor/normalize.css"
import "../fonts/inter.css"
import "./index.css"
import  AppHeader from './Header.js' 
import AppMain from './Main.js';
import AppFooter from './Footer.js';

function App() {
  return (
    <>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
    </>
  );
}

export default App;