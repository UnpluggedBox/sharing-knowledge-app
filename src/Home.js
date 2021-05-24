import logo from './mostrans_logo_v2.png';
import logoReact from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logoReact} className="App-logo" alt="logo" />
          <div>
            Learning <code>React App</code>.
          </div>
          <div>
            For MOSTRANS Project
          </div>
        </header>
      </div>
    );
  }