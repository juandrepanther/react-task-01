import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  padding: 0;
  display: flex;
  justify-content: center;
`
const Table = styled.table`
  border: 1px rgba(99, 99, 99, 0.2) solid;
  border-collapse: collapse;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 300px;
  margin: 0;
  padding: 0;
`
const Headers = styled.thead`
  background-color: #7ed6df;
  margin: 0;
  padding: 0;
`
const Items = styled.tbody`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  /* &:last-child {
    border-bottom-left-radius: 10px;
  } */
`
function TransactionHistory(props) {
  return (
    <Wrapper>
      <Table>
        <Headers>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </Headers>
        {props.transactions.map((item) => {
          return (
            <Items key={item.id}>
              <tr>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            </Items>
          )
        })}
      </Table>
    </Wrapper>
  )
}

export default TransactionHistory
