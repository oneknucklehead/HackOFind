import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import { login } from '../../actions/userActions'
import './Login.css'
import { Alert } from '@mui/material'

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <h2>Login</h2>
          <div className='userContainer'>
            <input
              type='email'
              name='email'
              required
              autoComplete='off'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            ></input>
            <label>Email-Id</label>
          </div>
          <div className='userContainer'>
            <input
              type='password'
              name='password'
              required
              autoComplete='off'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            ></input>
            <label>Password</label>
          </div>

          <button className='button' type='submit' value='submit'>
            {loading ? 'loading...' : 'Sign In'}
          </button>
        </form>
        {error ? (
          <Alert className='error' severity='error'>
            {error}
          </Alert>
        ) : (
          ''
        )}
        <div className='redirect'>
          New User? Register&nbsp;
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            <span>here</span>
          </Link>
        </div>
      </FormContainer>
    </>
  )
}

export default Login
