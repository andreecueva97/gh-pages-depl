import React, {useState} from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

import {useHistory} from "react-router-dom";

import FormInput from '../components/FormInput';

import './App.css';

const mapStateToProps = (state) => {
  return {
    id: state.userDataReducer.id,
    name: state.userDataReducer.name,
    surname: state.userDataReducer.surname,
    email: state.userDataReducer.email,
    password: state.userDataReducer.password,
    isPending: state.userDataReducer.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(login(email, password))
  }
}

function Login(props) {
  let [state, setState] = useState({
    email: '',
    password: ''
  });

  let history = useHistory();
  
  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onLogin(state.email, state.password);
    setState({email: '', password: ''});
    history.push("/profile");
  };
  
  return (
    <div className="contenedor">
      <header className="header">
        <h2>HEADER</h2>
      </header>

      <div className="contenido"> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100%', flexDirection: 'column'}}>
      <h1 className='f1'>Login</h1>
      <form>
        <FormInput name='email' type='email' placeholder='email' handleChange={handleChange} required/>
        <FormInput name='password' type='password' placeholder='password' handleChange={handleChange} required/>
      </form>
      <button onClick={handleSubmit}>Login</button>
      <button type="button" onClick={() => history.push("/")}>Go to Home</button>
      <button type="button" onClick={() => history.push("/register")}>Go to Register</button>
    </div>
        
      </div>
      <div className="sidebar">
        {/* <h1>SIDEBAR</h1> */}
       
        <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        <br></br>
        </h3>
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
      
    </div>


    
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)