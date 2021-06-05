import './App.css'
import Profile from '../src/components/Profile'
import data from '../src/data/social-profile/user.json'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      {data.map((data) => {
        return (
          <Profile
            key={data.id}
            name={data.name}
            tag={data.tag}
            location={data.location}
            avatar={data.avatar}
            stats={data.stats}
          />
        )
      })}
    </Container>
  )
}

export default App
