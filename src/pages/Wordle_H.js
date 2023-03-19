import { useEffect, useState } from 'react'
import Wordle_Game from '../components/Wordle_Com'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'

export default function Wordle_H() {
  const [solution, setSolution] = useState(null)
  const [difficulty, setDifficulty] = useState(7)
  const [gameRound, setGameRound] = useState(5)
  const navigate = useNavigate();
	const backToHome = () => {
		navigate('/home', {replace: true});
	}

  useEffect(() => {
      fetch('https://upset-gold-stockings.cyclic.app/hard')
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
      <Button onClick={backToHome}> Back To Home </Button>
    </div>
  )
}