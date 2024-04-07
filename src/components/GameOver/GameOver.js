import { Button } from '../../GlobalStyle';
import * as SC from './GameOver.styled';

const GameOver = ({ score, startNewGame }) => {
    return (
        <SC.GameOver>
            <h2>Game Over!</h2>
            <p>Your Score: {score}</p>
            <Button onClick={startNewGame}>Start New Game</Button>
        </SC.GameOver>
    );
};

export default GameOver;
