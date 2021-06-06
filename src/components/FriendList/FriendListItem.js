import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const OnlineUser = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
  background-color: green;
  margin: 0px 10px;
`
const OfflineUser = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
  background-color: red;
  margin: 0px 10px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ListItem = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 9px;
  margin: 3px 0px;
  padding: 5px 0px;
`
const Image = styled.img`
  width: 48px;
  border-radius: 9px;
  margin-right: 10px;
`
function FriendListItem(props) {
  return (
    <Wrapper>
      {Array.from(props.friends).map((item) => {
        return (
          <ListItem key={item.id}>
            {item.isOnline ? <OnlineUser /> : <OfflineUser />}
            <Image src={item.avatar} alt='' />
            <p className='name'>{item.name}</p>
          </ListItem>
        )
      })}
    </Wrapper>
  )
}

FriendListItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      name: propTypes.string,
      isOnline: propTypes.bool,
      id: propTypes.number,
    })
  ),
}

export default FriendListItem
