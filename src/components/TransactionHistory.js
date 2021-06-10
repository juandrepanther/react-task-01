import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  padding: 0;
  display: flex;
  justify-content: center;
`



function TransactionHistory(props) {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {props.transactions.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </Wrapper>
  )
}

export default TransactionHistory
