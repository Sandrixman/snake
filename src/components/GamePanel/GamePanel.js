import { Button } from '../../GlobalStyle';
import * as SC from './GamePanel.styled';

const GamePanel = ({ playerName, handleNameChange, startNewGame }) => {
    return (
        <SC.GamePanel>
            <SC.InputName
                type="text"
                placeholder="Enter your name"
                value={playerName}
                onChange={handleNameChange}
            />
            <Button onClick={startNewGame}>Start New Game</Button>
        </SC.GamePanel>
    );
};

export default GamePanel;
