import { useEffect } from 'react';

export const HandleKeyDown = (direction, setDirection) => {
    useEffect(() => {
        const onKeyDown = event => {
            switch (event.key) {
                case 'ArrowUp':
                    if (direction !== 'down') setDirection('up');
                    break;
                case 'ArrowDown':
                    if (direction !== 'up') setDirection('down');
                    break;
                case 'ArrowLeft':
                    if (direction !== 'right') setDirection('left');
                    break;
                case 'ArrowRight':
                    if (direction !== 'left') setDirection('right');
                    break;
                default:
                    break;
            }
        };
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [direction, setDirection]);
};
