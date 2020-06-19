import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.win ? "#282c34" : "white"};
  border: 2px solid #282c34;
  color: ${props => props.win ? "white" : "#282c34"};
  font-size: 1.8em;
  font-weight: ${props => props.win ? "600" : "100"};
  line-height: 50px;
  height: 50px;
  margin-right: -2px;
  margin-top: -2px;
  padding: 0;
  text-align: center;
  width: 50px;
  :focus {
    outline: none;
  }
`

function Square(props) {
  return(
    <Button>
      X
    </Button>
  )
}

export default Square