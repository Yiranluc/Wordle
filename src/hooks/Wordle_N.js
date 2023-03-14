import { useState } from 'react'

const useWordle = (solution) => {
  const [time, setTime] = useState(0) // how many time the user guesses
  const [currentGuess, setCurrentGuess] = useState('') // 
  const [guesses, setGuesses] = useState([]) // each guess is an array with check result
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false) // 

  // format a guess into an array of letter objects with the ckeck result
  const formatGuess = () => {
    
  }

  // add a new guess to the guesses state and add one to time state
  const addNewGuess = () => {

  }

  // track user input and current guess
  // if user presses enter, add the new guess
  const userInput = ({ key }) => {
    console.log('key pressed - ', key)

    if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key)
      }
    }
  }

  return {time, currentGuess, guesses, isCorrect, userInput}
}

export default useWordle