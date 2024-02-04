import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div className="login">
      <div className="login-cart">
        <form className="form">
        <h1 className='heading'>Login</h1>
        <label htmlFor='username' id='username'>Username :</label>
        <input type='username ' placeholder='Enter your username'></input><br/>
        <label htmlFor='password' id='password'>Password :</label>
        <input type='username ' placeholder='Enter your password'></input><br/>

        <button type='button' id='btn' className='btn'>Login</button>
      <p>Forget Your Password ! <Link to='/'>Click Here.</Link></p>
      <p>Dont Have an Account !<Link to=''>Register.</Link></p>

        <h3>Or Signup Using...</h3>

        </form>
      </div>
    </div>
  )
}

export default Login