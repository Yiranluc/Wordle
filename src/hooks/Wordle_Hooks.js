import { useEffect, useState } from 'react'

const useWordle = (solution, difficulty, gameRound) => {
  const [solutions, setSolutions] = useState(null)
  const [round, setRound] = useState(0) // how many time the user guesses
  const [currentGuess, setCurrentGuess] = useState('') // 
  const [guesses, setGuesses] = useState([...Array(gameRound)]) // each guess is an array with check result
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false) // 
  
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        setSolutions(json)
      })
  }, [setSolutions])

  // format a guess into an array of letter objects with the ckeck result
  const submitGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((letter) => {
      return {key: letter, color: 'grey'} // default color is grey
    })

    // find green letter, remove from solution array if there is any green letter
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formattedGuess[i].color = 'green'
        // match and remove
        solutionArray[i] = null
      }
    })

    // find yellow letter, remove from solution array if there is any yellow letter
    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        formattedGuess[i].color = 'yellow'
        // match and remove
        solutionArray[solutionArray.indexOf(letter.key)] = null
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state and add one to round state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      // mark user win the game
      setIsCorrect(true)
    }
    // update the guess result history
    setGuesses((preGuesses) => {
      let newGuesses = [...preGuesses]
      newGuesses[round] = formattedGuess
      return newGuesses
    })
    // update the guess history
    setHistory((preHistory) => {
      return[...preHistory, currentGuess]
    })
    // update round counter
    setRound((preRound) => {
      return preRound+1
    })
    // set current guess to empty
    setCurrentGuess('')
  }

  // track user input and current guess
  // if user presses enter, add the new guess
  const userInput = ({ key }) => {
    // only letters, Enter and Backspace works
    if (key == 'Enter') {
      // no more than max guesses rounds
      if (round > gameRound) {
        console.log("You used all your guesses")
        return
      }
      // no duplicate guess
      if (history.includes(currentGuess)) {
        console.log("You already tried this word")
        return
      }
      // no too long ro too short
      if (currentGuess.length < difficulty) {
        console.log("Your guess is too short, word must be 6 characters long")
        return
      }
      if (currentGuess.length > difficulty) {
        console.log("Your guess is too long, word must be 6 characters long")
        return
      }

      // check if current guess is a valid word
      if (!solutions.includes(currentGuess)) {
        console.log("Your guess is not a valid word")
        return
      }
      
      const formattedGuess = submitGuess()
      addNewGuess(formattedGuess)
    }

    
    if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }

    if (/^[A-Za-z]$/.test(key)) {
      setCurrentGuess(prev => prev + key)
    }
  }

  return {round, currentGuess, guesses, isCorrect, userInput}
}

export default useWordle