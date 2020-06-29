import React, {useEffect, useState} from 'react'
import {calculateWinner} from './helpers'
import Header from './componets/header'
import Board from './componets/board'
import Status from './componets/status'
import History from './componets/history'

function App() {
  
  const [useIsNextPlay, setIsNextPlay] = useState(true)
  const [useThereWinner, setThereWinner] = useState(false)
  const [useStatus, setStatus] = useState({
    turn: 'X',
    winner: null
  })
  const [useStep, setStep] = useState(0)
  const [useHistory, setHistory] = useState([{
    squaresList: Array(9).fill(null),
    squareSelected: null
  }])

  function handleClick(i) {
    const selected = useHistory[useStep].squaresList[i]
    if(useThereWinner || selected) return

    const history = useHistory.slice(0, setStep(useStep + 1))
    const current = history[history.length - 1]
    const squares = current.squaresList.slice()
    squares[i] = useIsNextPlay ? 'X':'O'

    setHistory(history.concat({
      squaresList: squares,
      squareSelected:i
    }))
    setIsNextPlay(!useIsNextPlay)
  }

  function handleToStep(step) {
    console.log(step)
  }

  useEffect(() => {
    const current = useHistory[useStep]
    const winner = calculateWinner(current.squaresList)
    if(winner) {
      setThereWinner(winner.lines)
      setStatus({winner: winner.winner})
    } else {
      setThereWinner(false)
      if(useStep > 8) {
        setStatus({winner: 'Dead heat'})
      } else {
        setStatus({turn: useIsNextPlay ? 'X' : 'O'})
      }
    }
  }, [useHistory, useStep, useIsNextPlay]);

  return (
    <>
      <Header/>
      <Status status={useStatus} />
      <Board
        squaresList={useHistory[useStep].squaresList}
        winner={useThereWinner}
        onClick={(i) => handleClick(i)}
      />
      <History 
        history={useHistory}
        onClick={(move) => handleToStep(move)}
      />
    </>
  );
}

export default App;
