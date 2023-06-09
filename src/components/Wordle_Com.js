import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/Wordle_Hooks'
import End from './End'
import Grid from './Grid'
import Button from './Button'

export default function Wordle({ solution, difficulty, gameRound }) {
  const { round, currentGuess, guesses, isCorrect, message, userInput } = useWordle(solution, difficulty, gameRound)
  const [endGame, setEndGame] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', userInput)

    if (isCorrect) {
      setTimeout(() => setEndGame(true), 2000)
      window.removeEventListener('keyup', userInput)
    }

    if (round === gameRound)  {
      setTimeout(() => setEndGame(true), 2000)
      window.removeEventListener('keyup', userInput)
    }

    return () => window.removeEventListener('keyup', userInput)
  }, [userInput])

  return (
    <div>
      <h3 className='guess-title'>Current Guess: {currentGuess} </h3>
      {message && <p className='message'> {message} </p>}
      <Button id='resetButton' onClick={() => window.location.reload(false)}> Restart A Game </Button>
      <Grid currentGuess = {currentGuess} guesses = {guesses} round = {round} difficulty={difficulty}/>
      {endGame && <End isCorrect = {isCorrect} round = {round} solution = {solution}/>}
    </div>
  )
}
