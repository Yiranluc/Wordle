import { useEffect, useState } from 'react'
import Wordle_Game from './components/Wordle_Com'

function Wordle() {
  const [solution, setSolution] = useState(null)
  const [difficulty, setDifficulty] = useState(6)
  const [gameRound, setGameRound] = useState(6)

  
  useEffect(() => {
    if (difficulty === 6) {
      fetch('http://localhost:3001/normal')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution)
      })
    }
    if (difficulty === 7) {
      fetch('http://localhost:3001/hard')
          .then(res => res.json())
          .then(json => {
            // random int between 0 & 14
            const randomSolution = json[Math.floor(Math.random()*json.length)]
            setSolution(randomSolution)
          })
    }
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle -  Yiran Wang, Bingfan Tian</h1>
      {solution && <Wordle_Game solution={solution} difficulty={difficulty} gameRound = {gameRound}/>}
    </div>
  )
}

export default Wordle
