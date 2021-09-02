import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // onGetData: (id) => dispatch(getData(id)),
//     // onPostData: (title, body, id) => dispatch(postData(title, body, id)),
//     // onPutData: (id, title, body, id) => dispatch(putData(id, title, body, id)),
//     // onDeleteData: (id) => dispatch(deleteData(id))
//   }
// }

function Profile(props) {
  let history = useHistory();
  
  return (
    <div className="contenedor">
      <header className="header">
        <h2>HEADER</h2>
      </header>

      <div className="contenido"> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100%', flexDirection: 'column'}}>
      <button type="button" onClick={() => history.push("/")}>Go Home</button>
      <h1 className='f1'>Profile</h1>
      <h2>id: {props.id}</h2>
      <h2>Name: {props.name}</h2>
      <h2>surname: {props.surname}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Password: {props.password}</h2>
      <h2>IsPending: {(props.isPending).toString()}</h2>
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

export default connect(mapStateToProps)(Profile)