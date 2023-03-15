import { useEffect, useState } from 'react'
import Wordle_N from './components/Wordle_N'

function Wordle() {
  const [solution, setSolution] = useState(null)
  
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
      {solution && <Wordle_N solution={solution} />}
    </div>
  )
}

export default Wordle