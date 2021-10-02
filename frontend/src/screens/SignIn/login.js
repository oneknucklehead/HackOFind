import React from 'react'
import './login.css'
const login = () => {
  return (
    <>
      <div className='formElement'>
        <div className='loginContainer'>
          <form>
            <h2>Login</h2>
            <div className='userContainer'>
              <input type='text' name='email' required></input>
              <label>Email-Id</label>
            </div>
            <div className='userContainer'>
              <input type='password' name='password' required></input>
              <label>Password</label>
            </div>
            <button class='button' type='submit' value='Submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default login
