import { generateFood } from './generateFood';
import { pointsForFood } from './pointsForFood';

export const updateSnakePosition = (snake, setSnake, direction, food, setFood, setScore) => {
    const updatedSnake = [...snake];

    let newHead = { ...updatedSnake[0] };

    switch (direction) {
        case 'up':
            newHead.y -= 1;
            break;
        case 'down':
            newHead.y += 1;
            break;
        case 'left':
            newHead.x -= 1;
            break;
        case 'right':
            newHead.x += 1;
            break;
        default:
            break;
    }

    // Перевірка зіткнення голови змійки з їжею
    if (newHead.x === food.x && newHead.y === food.y) {
        const newSegment = { x: newHead.x, y: newHead.y };
        updatedSnake.unshift(newSegment);
        generateFood(snake, setFood);
        pointsForFood(setScore);
    } else {
        updatedSnake.unshift(newHead);
        updatedSnake.pop();
    }

    setSnake(updatedSnake);
};
