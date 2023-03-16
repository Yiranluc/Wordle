import React from "react"

export default function End({isCorrect, round, solution}) {
  

    
    return (
        <div className="endGame">
            {isCorrect && (
                <div>
                    <h1>You Win!</h1>
                    <p className="solution">Solution - {solution}</p>
                    <p>You found the solution in {round} guesses! ^o^</p>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Sorry,You Lose!</h1>
                    <p className="solution">Solution - {solution}</p>
                    <p>You run out of all {round} guesses, bettter luck next time! ToT</p>
                </div>
            )}
        </div>
    )
}

// export default End