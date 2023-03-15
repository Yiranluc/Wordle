import React from "react";

export default function Row({guess, difficulty}) {

    if (difficulty === 6) {

    }

    if (guess) {
        return (
            <div className="row past">
                {guess.map((l, i) => (
                    <div key={i} className={l.color}>{l.key}</div>
                ))}
            </div>
        )
    }

    return (
        <div>
            {difficulty === 6 &&
                <div className="row">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
            {difficulty === 7 &&
                <div className="row">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
        </div>
    )
}