import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField } from '@mui/material'
import './ProfileScreen.css'
const ProfileScreen = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const name = userInfo.name
  const email = userInfo.email
  const [bio, setBio] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [github, setGithub] = useState('')
  const [blogs, setBlogs] = useState('')
  const [twitter, setTwitter] = useState('')

  return (
    <>
      <form className='profileForm'>
        <input type='file'></input>
        <h2>Details:</h2>
        <div className='profileContainer'>
          <input
            type='text'
            name='name'
            autoComplete='off'
            value={name}
            disabled
            placeholder={userInfo.name}
          ></input>
          <label>Name:</label>
        </div>
        <div className='profileContainer'>
          <input
            type='email'
            name='email'
            value={email}
            disabled
            placeholder={userInfo.email}
          ></input>
          <label>E-mail:</label>
        </div>
        <div className='profileContainer'>
          <input
            type='text'
            name='bio'
            autoComplete='off'
            value={bio}
            onChange={(e) => {
              setBio(e.target.value)
            }}
            placeholder='Enter your bio'
          ></input>
          <label>Bio:</label>
        </div>
        <h2>Links:</h2>
        <div className='profileContainer'>
          <input
            type='text'
            name='linkedIn'
            autoComplete='off'
            value={linkedIn}
            onChange={(e) => {
              setLinkedIn(e.target.value)
            }}
            placeholder='Enter profile link'
          ></input>
          <label>LinkedIn:</label>
        </div>
        <div className='profileContainer'>
          <input
            type='text'
            name='github'
            autoComplete='off'
            value={github}
            onChange={(e) => {
              setGithub(e.target.value)
            }}
            placeholder='Enter profile link'
          ></input>
          <label>Github:</label>
        </div>
        <div className='profileContainer'>
          <input
            type='text'
            name='Blogs'
            autoComplete='off'
            value={blogs}
            onChange={(e) => {
              setBlogs(e.target.value)
            }}
            placeholder='Enter profile link'
          ></input>
          <label>Blogs:</label>
        </div>
        <div className='profileContainer'>
          <input
            type='text'
            name='twitter'
            autoComplete='off'
            value={twitter}
            onChange={(e) => {
              setTwitter(e.target.value)
            }}
            placeholder='Enter profile link'
          ></input>
          <label>Twitter:</label>
        </div>
      </form>
    </>
  )
}

export default ProfileScreen
