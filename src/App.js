import './App.css'
import Profile from '../src/components/Profile'
import data from '../src/data/social-profile/user.json'
import styled from 'styled-components'
import stats from '../src/data/statistics/statistical-data.json'
import Statistics from './components/Statistics'
import friends from '../src/data/friend-list/friends.json'
import FriendList from '../src/components/FriendList/FriendList'
import TransactionsHistory from '../src/components/TransactionHistory'
import transactions from '../src/data/transaction-history/transactions.json'

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
    <>
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
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions}/>
    </>
  )
}

export default App
