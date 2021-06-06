import React from 'react'
import styled from 'styled-components'
import FriendListItem from './FriendListItem'

const List = styled.ul`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 30px 0px;
  padding: 0;
`
function FriendList(props) {
  return (
    <List>
      <FriendListItem friends={props.friends} />
    </List>
  )
}

export default FriendList
