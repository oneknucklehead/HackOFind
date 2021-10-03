import React, { useEffect } from 'react'
import IconButton from '@mui/material/IconButton'
import TinderCard from 'react-tinder-card'
import TwitterIcon from '@mui/icons-material/Twitter'
import BookIcon from '@mui/icons-material/Book'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../../actions/userActions.js'
import './TinderCard.css'

const TinderCards = () => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const swiped = (direction, user) => {
    console.log(user + ' got swiped ' + direction)
  }

  const outOfFrame = (user) => {
    console.log(user + ' got out of the list')
  }

  useEffect(() => {
    dispatch(listUsers())
  }, [dispatch])

  return (
    <div className='tinderCards'>
      <div className='tinderCards__container'>
        {loading ? (
          <h3>loading...</h3>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
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
        )}
      </div>
    </div>
  )
}
export default TinderCards
