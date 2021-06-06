import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Image = styled.img`
  border-radius: 50%;
  height: 5rem;
  margin: 30px 0px;
`

const OneProfile = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 7px;
  margin: 0px 20px;
  width: 240px;
`
const Name = styled.div`
  font-size: large;
  font-weight: 700;
  margin-bottom: 10px;
`
const Description = styled.div`
  text-align: center;
`
const Stats = styled.ul`
  height: 5rem;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`
const List = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  border-top: 1px rgba(208, 208, 208, 0.5) solid;
  &:not(:last-child) {
    border-right: 1px rgba(208, 208, 208, 0.5) solid;
  }
`

const Labels = styled.span`
  color: #a9a9a9;
`
const Values = styled.span`
  font-weight: 900;
  margin-top: 10px;
`

const TagLoc = styled.p`
  color: #a9a9a9;
  margin-bottom: 10px;
`

function Profile({ name, avatar, tag, location, stats }) {
  return (
    <OneProfile>
      <Description>
        <Image src={avatar} alt='Аватар пользователя' className='avatar' />
        <Name>{name}</Name>
        <TagLoc>@{tag}</TagLoc>
        <TagLoc>{location}</TagLoc>
      </Description>

      <Stats>
        <List>
          <Labels className='label'>Followers</Labels>
          <Values className='quantity'>{stats.followers}</Values>
        </List>
        <List>
          <Labels className='label'>Views</Labels>
          <Values className='quantity'>{stats.views}</Values>
        </List>
        <List>
          <Labels className='label'>Likes</Labels>
          <Values className='quantity'>{stats.likes}</Values>
        </List>
      </Stats>
    </OneProfile>
  )
}

Profile.defaultProps = {
  name: 'unknown.not loaded yet',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  tag: 'unknown tag',
  location: 'not known',
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
}

Profile.propTypes = {
  name: propTypes.string,
  avatar: propTypes.string.isRequired,
  tag: propTypes.string,
  location: propTypes.string,
  stats: {
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
  },
}

export default Profile
