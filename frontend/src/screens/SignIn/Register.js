import React, { useEffect, useState } from 'react'
import FormContainer from '../../components/FormContainer'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../actions/userActions'
import { Link } from 'react-router-dom'
import './Register.css'
import { Alert } from '@mui/material'

const Register = ({ history, location }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')

  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [userInfo, history, redirect])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(name, email, password, cPassword))
  }
  return (
    <>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <h2>Register</h2>
          <div className='userContainer'>
            <input
              type='text'
              name='name'
              required
              autoComplete='off'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            ></input>
            <label>Name</label>
          </div>
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
          <div className='userContainer'>
            <input
              type='password'
              name='cPassword'
              required
              autoComplete='off'
              value={cPassword}
              onChange={(e) => {
                setCPassword(e.target.value)
              }}
            ></input>
            <label>Confirm Password</label>
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
          Already a User? Login&nbsp;
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            <span>here</span>
          </Link>
        </div>
      </FormContainer>
    </>
  )
}

export default Register
