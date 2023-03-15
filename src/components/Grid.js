import React from "react";
import Row from "./Row";

export default function Grid({currentGuess, guesses, round, difficulty}) {
    return (
        <div>
            {/* {guesses.map((g, i) => {
                return <Row key={i} difficulty = {difficulty}/>
            })} */}
            {guesses.map((g, i) => {
                return <Row key = {i} guess = {g} difficulty = {difficulty}/>
            })}
        </div>
    )
}