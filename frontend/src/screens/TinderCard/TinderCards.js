import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
import TinderCard from 'react-tinder-card'
import TwitterIcon from '@mui/icons-material/Twitter'
import BookIcon from '@mui/icons-material/Book'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './TinderCard.css'

const TinderCards = () => {
  const [users, setUsers] = useState([])

  const swiped = (direction, user) => {
    console.log(user + ' got swiped ' + direction)
  }

  const outOfFrame = (user) => {
    console.log(user + ' got out of the list')
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/api/userDetails')
      setUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <div className='tinderCards'>
      <div className='tinderCards__container'>
        <div className='cardLast'>
          {users.map((user) => (
            <TinderCard
              className='swipe'
              key={user._id}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, user.name)}
              onCardLeftScreen={() => outOfFrame(user.name)}
            >
              <div className='card'>
                <div
                  className='profile'
                  style={{ backgroundImage: `url(${user.imageUrl})` }}
                />
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
                <div className='socials'>
                  {user.twitter ? (
                    <a href={user.twitter} target='_blank' rel='noreferrer'>
                      <IconButton>
                        <TwitterIcon fontSize='large' />
                      </IconButton>
                    </a>
                  ) : (
                    ''
                  )}
                  {user.blogs ? (
                    <a href={user.blogs} target='_blank' rel='noreferrer'>
                      <IconButton>
                        <BookIcon fontSize='large' />
                      </IconButton>
                    </a>
                  ) : (
                    ''
                  )}
                  {user.github ? (
                    <a href={user.github} target='_blank' rel='noreferrer'>
                      <IconButton>
                        <GitHubIcon fontSize='large' />
                      </IconButton>
                    </a>
                  ) : (
                    ''
                  )}
                  {user.linkedIn ? (
                    <a href={user.linkedIn} target='_blank' rel='noreferrer'>
                      <IconButton>
                        <LinkedInIcon fontSize='large' />
                      </IconButton>
                    </a>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </TinderCard>
          ))}
          <h3>No Matches Left!</h3>
        </div>
      </div>
    </div>
  )
}
export default TinderCards