import { CENTER_X, CENTER_Y } from '../constants';

export const generateFood = (snake, setFood) => {
    let collidedWithSnake = false;
    let foodX, foodY;

    do {
        const tempFoodX = Math.floor(Math.random() * CENTER_X);
        const tempFoodY = Math.floor(Math.random() * CENTER_Y);
        collidedWithSnake = snake.some(
            segment => segment.x === tempFoodX && segment.y === tempFoodY
        );
        if (!collidedWithSnake) {
            foodX = tempFoodX + CENTER_X / 2;
            foodY = tempFoodY + CENTER_Y / 2;
        }
    } while (collidedWithSnake);

    setFood({ x: foodX, y: foodY });
};
