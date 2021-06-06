import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Wrapper = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
`

const Section = styled.section`
  height: 200px;
  width: 500px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderText = styled.h2`
  font-size: larger;
  font-weight: 900;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListRow = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  list-style: none;
`
const List_Item = styled.li`
  text-align: center;
  height: 100%;
  width: 125px;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    background-color: #3498db;
    border-bottom-left-radius: 9px;
  }
  &:nth-child(2) {
    background-color: #27ae60;
  }
  &:nth-child(3) {
    background-color: #9b59b6;
  }
  &:nth-child(4) {
    background-color: #f1c40f;
    border-bottom-right-radius: 9px;
  }
`
const Percentage = styled.span`
  font-size: 40px;
`
function Statistics({ stats }) {
  return (
    <Wrapper>
      <Section>
        <HeaderText>Upload stats</HeaderText>

        <ListRow>
          <List_Item>
            <span className='label'>{stats[0].label}</span>
            <Percentage>{stats[0].percentage}%</Percentage>
          </List_Item>
          <List_Item>
            <span className='label'>{stats[2].label}</span>
            <Percentage>{stats[2].percentage}%</Percentage>
          </List_Item>
          <List_Item>
            <span className='label'>{stats[1].label}</span>
            <Percentage>{stats[1].percentage}%</Percentage>
          </List_Item>
          <List_Item>
            <span className='label'>{stats[3].label}</span>
            <Percentage>{stats[3].percentage}%</Percentage>
          </List_Item>
        </ListRow>
      </Section>
    </Wrapper>
  )
}

export default Statistics
