import React from 'react';
import { useHistory } from "react-router-dom";

import './App.css';

function Home() {
  let history = useHistory();

  return (
    <div className="contenedor">
      <header className="header">
        <h2>HEADERRRRR</h2>
      </header>

      <div className="contenido"> 
        <h1>Contenido</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        <br></br>
        Ut eget quam molestie justo at nibh lacus, euismod purus eu sem sit amet pede. In accumsan orci. Proin aliquam enim ut leo. In hac habitasse platea dictumst. Duis neque ac erat. Integer eros vulputate at, bibendum vel, wisi. Mauris eros diam magna neque, fringilla et, erat. Sed eros. Mauris aliquet quis, justo. Vivamus posuere dui. In congue fringilla id, elementum eleifend, ligula. Ut eget magna. Donec tempus nulla. Aliquam gravida eros sagittis malesuada. Donec nonummy, mi. Donec in faucibus ligula. Ut sit amet, sodales dui at metus.
        </p>
      </div>
      <div className="sidebar">
        <h1>SIDEBAR</h1>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100%', flexDirection: 'column'}}>
      <h1 className='f1'>Home</h1>
      <button type="button" onClick={() => history.push("/login")}>Go Login</button>
      <button type="button" onClick={() => history.push("/register")}>Go Register</button>
    </div>
      </div>
      <div className="widget1">
        <h3>widget1</h3>
      </div>
      <div className="widget2">
        <h3>widget2</h3>
      </div>
      <footer className="footer">
        <h3>footer</h3>
      </footer>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100%', flexDirection: 'column'}}>
      <h1 className='f1'>Home</h1>
      <button type="button" onClick={() => history.push("/login")}>Go Login</button>
      <button type="button" onClick={() => history.push("/register")}>Go Register</button>
    </div>
    </div>
  );
}

export default (Home)