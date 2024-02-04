import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <form>
        <label htmlFor="username">Username:</label><br />
        <input type='text' id='username'  name='username' required/><br />

        <label htmlFor="password">password:</label><br />
        <input type='password' id='password'  name='password' required/><br />

        <button type='submit'>Login</button>

      </form>
    </div>
  )
}

export default Login