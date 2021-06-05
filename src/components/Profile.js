import React from 'react'
import styled from 'styled-components'

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
  margin: 0px 15px;
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

function Profile(props) {
  return (
    <OneProfile>
      <Description>
        <Image
          src={props.avatar}
          alt='Аватар пользователя'
          className='avatar'
        />
        <Name>{props.name}</Name>
        <TagLoc>@{props.tag}</TagLoc>
        <TagLoc>{props.location}</TagLoc>
      </Description>

      <Stats>
        <List>
          <Labels className='label'>Followers</Labels>
          <Values className='quantity'>{props.stats.followers}</Values>
        </List>
        <List>
          <Labels className='label'>Views</Labels>
          <Values className='quantity'>{props.stats.views}</Values>
        </List>
        <List>
          <Labels className='label'>Likes</Labels>
          <Values className='quantity'>{props.stats.likes}</Values>
        </List>
      </Stats>
    </OneProfile>
  )
}

export default Profile
