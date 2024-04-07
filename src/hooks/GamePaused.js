import { useEffect } from 'react';
import { updateSnakePosition } from '../utils/updateSnakePosition';
import { checkCollision } from '../utils/checkCollision';

export const GamePaused = (
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
) => {
    useEffect(() => {
        if (!paused && startGame && !gameOver) {
            const timer = setInterval(() => {
                checkCollision(snake, setGameOver);
                updateSnakePosition(snake, setSnake, direction, food, setFood, setScore);
            }, speed);

            return () => clearInterval(timer);
        }
    }, [
        snake,
        direction,
        paused,
        gameOver,
        speed,
        startGame,
        food,
        setGameOver,
        setSnake,
        setFood,
        setScore,
    ]);
};
