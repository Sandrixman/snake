import { useEffect, useState } from 'react';

export const SpeedIncrease = (score, setSpeed) => {
    const [checkPoint, setCheckPoint] = useState(50);

    useEffect(() => {
        if (score > checkPoint) {
            setCheckPoint(prevCheckPoint => prevCheckPoint + 50);
            setSpeed(previosSpeed => previosSpeed / 1.5);
        }
    }, [score, checkPoint, setSpeed]);
};
