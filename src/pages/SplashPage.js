import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Popup from '../components/Popup';
import Button from '../components/Button';

export default function SplashPage() {
    const [buttonRules, setButtonRules] = useState(false);
    const [buttonStartGame, setButtonStartGame] = useState(false);
    const navigate = useNavigate();
	const startAHardGame = () => {
		navigate('/game/hard', {replace: true});
	}
    const startANormalGame = () => {
		navigate('/game/normal', {replace: true});
	}

    return (
        <div className="App">
          <h1>Wordle -  Yiran Wang, Bingfan Tian</h1>
          <div>
                <div className='buttons-div'>
                    <div>
                        <Button onClick={() => setButtonRules(true)}> Rules </Button>
                    </div>
                    <div>
                        <Button onClick={() => setButtonStartGame(true)}> Start A Game </Button>
                    </div>
                </div>
                <Popup trigger={buttonRules} setTrigger={setButtonRules}>
                    <div>
                        <h1>Rules</h1>
                        <p className='rule-text'> In this game, you will have several chances to guess an English word randomly selected by us. You will know
                            the number of chances you will have by counting the rows of the board at the center of the game screen. 
                            You should press enter after finish typing. If the word you entered is too short or 
                            too long, or is not a valid English word, we are going to prompt you with an message and we will not
                            deduct one from your total number of chances. If you have entered a valid English word, you will see 
                            the word on the board. On the board, we will give you some hints about the correctness of the letters
                            of each word entered by you.
                        </p>
                        <p className='rule-text'>
                            For instance, say the correct word is “faces” but the user submits “eats”, then you show “EATER”.  
                            In this situation, the one E is in the word but not in the correct spot will be marked as yellow; 
                            the A is in the word AND in the correct spot, so this will be marked by green.  Notice that the second ‘E’ 
                            is going to be marked in gray like the other missing letters: since E only appears once in the word, we will only 
                            highlight it once (if it were to appear twice, both would be highlighted.)
                        </p>
                        <p className='rule-text'>
                            You can select the difficulty of the game after you press "Start A Game" button on our home page. 
                            There are 2 levels of difficulty: Hard and normal. In a hard game, you have 5 chances to guess a 7-letter 
                            word correctly, while in a normal game, you can have 6 chances to guess a 6-letter word correctly.
                        </p>
                    </div>
                </Popup>
                <Popup trigger={buttonStartGame} setTrigger={setButtonStartGame}>
                    <div className='difficulty-div'>
                        <p> Select the difficulty of your game: </p>
                        <Button onClick={startAHardGame}> Hard </Button>
                        <Button onClick={startANormalGame}> Normal </Button>
                    </div>
                </Popup>
          </div>
        </div>
      )
}