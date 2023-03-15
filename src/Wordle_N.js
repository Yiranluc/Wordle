import { useEffect, useState } from 'react'
import Wordle_Game from './components/Wordle_Com'

function Wordle_N() {
  const [solution, setSolution] = useState(null)
  const [difficulty, setDifficulty] = useState(6)
  const [gameRound, setGameRound] = useState(6)

  
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle -  Yiran Wang, Bingfan Tian</h1>
      {solution && <Wordle_Game solution={solution} difficulty={difficulty} gameRound = {gameRound}/>}
    </div>
  )
}

export default Wordle_N