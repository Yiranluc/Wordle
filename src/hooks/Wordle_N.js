import { useState } from 'react'

const useWordle = (solution) => {
  const [time, setTime] = useState(0) // how many time the user guesses
  const [currentGuess, setCurrentGuess] = useState('') // 
  const [guesses, setGuesses] = useState([]) // each guess is an array with check result
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false) // 

  // format a guess into an array of letter objects with the ckeck result
  const formatGuess = () => {
    console.log("formatting your guess - ", currentGuess)
  }

  // add a new guess to the guesses state and add one to time state
  const addNewGuess = () => {

  }

  // track user input and current guess
  // if user presses enter, add the new guess
  const userInput = ({ key }) => {
    console.log('key pressed - ', key)
    // only letters, Enter and Backspace works
    if (key == 'Enter') {
      // no more than max guesses time
      if (time > 6) {
        console.log("You used all your guesses")
        return
      }
      // no duplicate guess
      if (history.includes(currentGuess)) {
        console.log("You already tried this word")
        return
      }
      // no too long ro too short
      if (currentGuess.length < 6) {
        console.log("Your guess is too short, word must be 6 characters long")
        return
      }
      if (currentGuess.length > 6) {
        console.log("Your guess is too long, word must be 6 characters long")
        return
      }
      formatGuess()
    }

    
    if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }

    if (/^[A-Za-z]$/.test(key)) {
      
        setCurrentGuess(prev => prev + key)
      
    }
  }

  return {time, currentGuess, guesses, isCorrect, userInput}
}

export default useWordle