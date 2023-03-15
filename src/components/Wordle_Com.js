import React, { useEffect } from 'react'
import useWordle from '../hooks/Wordle_Hooks'
import Grid from './Grid'

export default function Wordle({ solution, difficulty, gameRound }) {
  const { round, currentGuess, guesses, isCorrect, userInput } = useWordle(solution, difficulty, gameRound)

  useEffect(() => {
    window.addEventListener('keyup', userInput)

    return () => window.removeEventListener('keyup', userInput)
  }, [userInput])

  useEffect(() => {
    console.log(round, guesses, isCorrect)
  }, [guesses, round, isCorrect])


  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid currentGuess = {currentGuess} guesses = {guesses} round = {round} difficulty={difficulty}/>
    </div>
  )
}
