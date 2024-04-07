import { Button } from '../../GlobalStyle';
import * as SC from './Game.styled';

const GameBoard = ({ score, togglePause, paused, snake, food, playerName }) => {
    return (
        <SC.Game>
            <SC.ScoreBoard>
                <h3>
                    {playerName} score: {score}
                </h3>
                <Button onClick={togglePause}>{paused ? 'Resume' : 'Pause'}</Button>
            </SC.ScoreBoard>
            <SC.GameBoard>
                {snake.map((segment, index) => (
                    <SC.SnakeSegment key={index} x={segment.x} y={segment.y} />
                ))}
                <SC.FoodSegment x={food.x} y={food.y} />
            </SC.GameBoard>
        </SC.Game>
    );
};

export default GameBoard;
