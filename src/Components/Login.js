import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = event => {
    event.preventDefault(); // stops the refresh
    // Login
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        // logged in successfully
        history.push('/');
      })
      .catch(e => alert(e.message));
  };
  const register = event => {
    event.preventDefault(); // stops the refresh
    // Register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // registered successfully and logged in
        history.push('/');
      })
      .catch(e => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://i.ibb.co/H4Z60HH/instashop-logo.png'
          alt='instashop_logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            type='email'
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            type='password'
          />
          <button type='submit' onClick={login} className='login__signInButton'>
            Continue
          </button>
        </form>
        <p>
          Test Instruction : Please input a random email account and random password
          then click "Create your InstaShop Account" !
        </p>
        <button onClick={register} className='login__registerButton'>
          Create your InstaShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
