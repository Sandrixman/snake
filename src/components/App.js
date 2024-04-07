import { useState } from 'react';

import { generateFood } from '../utils/generateFood';
import { HandleKeyDown } from '../hooks/HandleKeyDown';
import { SpeedIncrease } from '../hooks/SpeedIncrease';
import { GamePaused } from '../hooks/GamePaused';

import GamePanel from './GamePanel/GamePanel';
import Game from './GameBoard/Game';
import GameOver from './GameOver/GameOver';
import LeaderBoard from './LeaderBoard/LeaderBoard';

import { SPEED, START_SNAKE_POSITION } from '../constants';

const App = () => {
    const [snake, setSnake] = useState([START_SNAKE_POSITION]);
    const [food, setFood] = useState({});
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(SPEED);
    const [playerName, setPlayerName] = useState('');
    const [startGame, setStartGame] = useState(false);
    const [paused, setPaused] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [direction, setDirection] = useState('right');

    HandleKeyDown(direction, setDirection);
    SpeedIncrease(score, setSpeed);
    GamePaused(
        paused,
        startGame,
        gameOver,
        setGameOver,
        snake,
        setSnake,
        direction,
        food,
        setFood,
        setScore,
        speed
    );

    const togglePause = () => {
        setPaused(!paused);
    };

    const handleNameChange = event => {
        setPlayerName(event.target.value);
    };

    const startNewGame = () => {
        setSnake([START_SNAKE_POSITION]);
        setStartGame(true);
        setGameOver(false);
        setScore(0);
        setSpeed(SPEED);
        generateFood(snake, setFood);
    };

    return (
        <>
            {!startGame && (
                <>
                    <GamePanel
                        startNewGame={startNewGame}
                        playerName={playerName}
                        handleNameChange={handleNameChange}
                        setGameOver={setGameOver}
                        setScore={setScore}
                    />
                    <LeaderBoard />
                </>
            )}
            {startGame && !gameOver && (
                <>
                    <Game
                        score={score}
                        togglePause={togglePause}
                        paused={paused}
                        snake={snake}
                        food={food}
                        playerName={playerName}
                    />
                </>
            )}
            {gameOver && <GameOver score={score} gameOver={gameOver} startNewGame={startNewGame} />}
        </>
    );
};

export default App;
