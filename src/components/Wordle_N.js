import React, { useEffect } from 'react'
import useWordle from '../hooks/Wordle_N'

export default function Wordle({ solution }) {
  const { currentGuess, userInput } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', userInput)

    return () => window.removeEventListener('keyup', userInput)
  }, [userInput])

  return (
    <div>
      <div>Current Guess - {currentGuess}</div>
    </div>
  )
}
