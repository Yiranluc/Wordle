import { useEffect, useState } from 'react'
import Wordle_Game from '../components/Wordle_Com'
import { Link } from 'react-router-dom';

function Wordle_H() {
  const [solution, setSolution] = useState(null)
  const [difficulty, setDifficulty] = useState(7)
  const [gameRound, setGameRound] = useState(5)

  useEffect(() => {
      fetch('http://localhost:3001/hard')
          .then(res => res.json())
          .then(json => {
            // random int between 0 & 14
            const randomSolution = json[Math.floor(Math.random()*json.length)]
            setSolution(randomSolution)
          })
  }, [setSolution])

  return (
    <div className="App">
      <h1 className='title'> Wordle -  Yiran Wang, Bingfan Tian</h1>
      {solution && <Wordle_Game solution={solution} difficulty={difficulty} gameRound = {gameRound}/>}
      <Link className='back-link' to='/home'> Back to home </Link>
    </div>
  )
}

export default Wordle_H