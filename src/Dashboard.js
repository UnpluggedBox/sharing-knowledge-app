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


export default function Dashboard() {
    const [materialsIncluded, setMaterials] = useState(['Functional Components (React Hooks)']);
    const [materialsNotIncluded, setUnMaterials] = useState([]);
    const [materialInput, setInputIncluded] = useState("");
    const [materialInputUnincluded, setInputUnincluded] = useState("");



    let handleSubmit = () => {
        setMaterials(materialsIncluded => [...materialsIncluded, materialInput])
        console.log(materialsIncluded)

    }

    let handleSubmitAlt = () => {
      setUnMaterials(materialsNotIncluded => [...materialsNotIncluded, materialInputUnincluded])
      console.log(materialsIncluded)

  }
    
    let handleChangeIncluded = ({target}) => {
        setInputIncluded(target.value)
    }

    let handleChangeUnincluded = ({target}) => {
        setInputUnincluded(target.value)
    }


    let submitHandler = e => {
        // Prevent form submission on Enter key
        e.preventDefault()
      }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logoReact} className="App-logo-static" alt="logo" />
          <div>
            Materi yang sudah tercakup di web-app ini adalah:
          </div>
          <div>
            <form onSubmit={submitHandler}>
                <label>
                    Materi :
                    <input type="text" name="name" value={materialInput} onChange={handleChangeIncluded} />
                </label>
                <input type="submit" value="Submit" onClick={handleSubmit} className="buttonSubmit"/>
            </form>
          </div>
          {materialsIncluded != null ? 
                        materialsIncluded.map((value, index) => {
                                                return (
                                                  <div>
                                                  {index+1}. {materialsIncluded[index]}
                                                  </div>
                                                )})
                        
                      
                  :
                  null
          }

          <hr style={{color: "red", width: "50%"}}></hr>
          <div>
            Materi yang masih perlu dipelajari adalah:
          </div>
          <div>
            <form onSubmit={submitHandler}>
                <label>
                    Materi :
                    <input type="text" name="name" value={materialInputUnincluded} onChange={handleChangeUnincluded} />
                </label>
                <input type="submit" value="Submit" onClick={handleSubmitAlt} className="buttonSubmit"/>
            </form>
          </div>
          {materialsNotIncluded != null ? 
                        materialsNotIncluded.map((value, index) => {
                                                return (
                                                  <div>
                                                  {index+1}. {materialsNotIncluded[index]}
                                                  </div>
                                                )})
                        
                      
                  :
                  null
          }
        </header>
      </div>
    );
  }