import './App.css';
import React from 'react'

function App() {

  const usernameRef = React.useRef();
  const lastnameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(
      usernameRef.current.value,
      lastnameRef.current.value,
      emailRef.current.value, 
      passwordRef.current.value);
    }



  return (
    <div className="App">
      <h1>Personal information</h1>
      <form className='app_form'>
        <label for='name'>First name</label>
        <input type='text' name='name'  ref={usernameRef}></input>
        <label for='lname'>Last name</label>
        <input type='text' name='lname' ref={lastnameRef}></input>
        <label for='email'>Email</label>
        <input type='email' name='email' ref={emailRef}></input>
        <label for='password'>Password</label>
        <input type='password' name='password' ref= {passwordRef}></input>
        <button type='submit' onClick={onSubmit}>Save information</button>
      </form>
    </div>
  );
}

export default App;
