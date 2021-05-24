import logo from './mostrans_logo_v2.png';
import logoReact from './logo.svg';
import './App.css';
import Home from './Home.js'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function About() {
    const membersName = ['Kevin', 'Theo', 'Virgi', 'Rubin']
    const [membersIndex, setIndex] = useState(0);
  
    let handleClick = () => {
      if (membersIndex < 3) {
        setIndex(membersIndex + 1)
      } else {
        setIndex(0)
      }
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="Mostrans-logo" alt="logo" />
          <div>
            About MOSTRANS.
          </div>
          <div>
            Developer MOSTRANS: {membersName[membersIndex]}
          </div>
          <div className="buttonWrapper">
          <button className="buttonDeveloper" onClick={() => handleClick()}>
            Change Current Developer
          </button>
          </div>
          <a
            className="App-link"
            href="https://mostrans.co.id"
            target="_blank"
            rel="noopener noreferrer"
            style={{paddingTop: 10}}
          >
            Visit Web MOSTRANS
          </a>
        </header>
      </div>
    );
  }