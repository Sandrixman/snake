import { GAME_BORDER } from '../constants';

export const checkCollision = (snake, setGameOver) => {
    const head = snake[0];

    //
    if (
        head.x < GAME_BORDER.x_start ||
        head.x >= GAME_BORDER.x_end ||
        head.y < GAME_BORDER.y_start ||
        head.y >= GAME_BORDER.y_end
    ) {
        setGameOver(true);
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            setGameOver(true);
            break;
        }
    }
};
