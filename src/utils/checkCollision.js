import { SCREEN_BORDER_X, SCREEN_BORDER_Y } from '../constants';

export const checkCollision = (snake, setGameOver) => {
    const head = snake[0];

    if (
        head.x < 0 ||
        head.x >= SCREEN_BORDER_X / 10 ||
        head.y < 0 ||
        head.y >= SCREEN_BORDER_Y / 10
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
