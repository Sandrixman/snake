import { Button } from '../../GlobalStyle';
import { sendLeaderboardData } from '../../utils/api';
import * as SC from './GameOver.styled';

const GameOver = ({ score, startNewGame, playerName }) => {
    sendLeaderboardData(playerName, score);

    return (
        <SC.GameOver>
            <h2>Game Over!</h2>
            <p>Your Score: {score}</p>
            <Button onClick={startNewGame}>Start New Game</Button>
        </SC.GameOver>
    );
};

export default GameOver;
