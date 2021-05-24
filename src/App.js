import logo from './mostrans_logo_v2.png';
import logoReact from './logo.svg';
import './App.css';
import Home from './Home.js'
import About from './About.js'
import Dashboard from './Dashboard.js'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from "react-sidebar";


export default function PageRouter() {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  let onSetSidebarOpen = (open) => {
    setSideBarOpen(open)
  }

  return (

    <Router>
      <Sidebar
      sidebar={
        
        <div className="App-sidebar">
          
              <Link className="App-link" to="/">Home</Link>
              <Link className="App-link" to="/about">About</Link>
              <Link className="App-link" to="/dashboard">Dashboard</Link>

        </div>

      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "white" } }}
      >

      <div className="App-header">

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <button className="App-sidebar-button" onClick={() => setSideBarOpen(true)}>
      Open sidebar
      </button>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
      </Sidebar>

    </Router>

  );
}


