import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ProfileScreen.css'
import Cropper from 'react-easy-crop'
import Slider from '@mui/material/Slider'
import { Button } from '@mui/material'

const ProfileScreen = () => {
  const inputRef = useRef()
  const triggerFileSelectPopup = () => inputRef.current.click()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  //profile details
  const { loading, error, userInfo } = userLogin
  const name = userInfo.name
  const email = userInfo.email
  const [bio, setBio] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [github, setGithub] = useState('')
  const [blogs, setBlogs] = useState('')
  const [twitter, setTwitter] = useState('')
  //image crop constants
  const profileDefault = userInfo.imageUrl
    ? userInfo.imageUrl
    : 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png'

  const [image, setImage] = useState(profileDefault)
  const [croppedArea, setCroppedArea] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  //crop image functions
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels)
  }
  const fileSelectHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <>
      <form className='profileForm'>
        {image ? (
          <div style={{ backgroundImage: `url(${image})` }} className='preview'>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <Slider
              size='small'
              defaultValue={70}
              aria-label='Small'
              valueLabelDisplay='auto'
            />
          </div>
        ) : (
          ''
        )}
        <input
          type='file'
          onChange={fileSelectHandler}
          accept='image/*'
          ref={inputRef}
          style={{ display: 'none' }}
        ></input>
        <Button
          variant='contained'
          color='secondary'
          onClick={triggerFileSelectPopup}
        >
          Upload
        </Button>
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
