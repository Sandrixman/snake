export const SPEED = 200;

export const SCREEN_BORDER_X = Math.floor(window.innerWidth);
export const SCREEN_BORDER_Y = Math.floor(window.innerHeight);

// параметри екрану з урахуванням розміру змійки 10px
export const CENTER_X = Math.floor(SCREEN_BORDER_X / 20);
export const CENTER_Y = Math.floor(SCREEN_BORDER_Y / 20);
export const GAME_BORDER = {
    x_start: CENTER_X - CENTER_X / 2,
    x_end: CENTER_X + CENTER_X / 2,
    y_start: CENTER_Y - CENTER_Y / 2,
    y_end: CENTER_Y + CENTER_Y / 2,
};

export const START_SNAKE_POSITION = {
    x: CENTER_X,
    y: CENTER_Y,
};
