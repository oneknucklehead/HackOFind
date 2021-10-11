import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import IconButton from '@mui/material/IconButton'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import img from '../../images/tinderLogo.png'
import './header.css'
import { logout } from '../../actions/userActions'
const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='header'>
        <IconButton>
          <button
            onClick={() => {
              if (userInfo) setOpen(!open)
            }}
          >
            {userInfo && open ? (
              <ArrowDropDownIcon className='header__icon' fontSize='large' />
            ) : (
              <PersonIcon className='header__icon' fontSize='large' />
            )}
          </button>
        </IconButton>
        {userInfo ? (
          open ? (
            <div className='dropDown'>
              <ul>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li>
                  <Link
                    to='/'
                    onClick={() => {
                      dispatch(logout())
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )
        ) : (
          ''
        )}
        <Link to={userInfo ? '/' : '/login'}>
          <img className='header__logo' src={img} alt='hackofind Logo'></img>
        </Link>
        <IconButton>
          <Link to='/chat'>
            <ForumIcon className='header__icon' fontSize='large' />
          </Link>
        </IconButton>
      </div>
    </>
  )
}

export default Header
