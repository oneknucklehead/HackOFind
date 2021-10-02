import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import img from '../../images/tinderLogo.png'
import './header.css'
const Header = ({ backButton }) => {
  const history = useHistory()
  return (
    <>
      <div className='header'>
        {backButton ? (
          <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon className='header__icon' fontSize='large' />
          </IconButton>
        ) : (
          <IconButton>
            <Link to='/login'>
              <PersonIcon className='header__icon' fontSize='large' />
            </Link>
          </IconButton>
        )}
        <Link to='/'>
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
