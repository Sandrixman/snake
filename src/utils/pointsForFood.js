export const pointsForFood = setScore => {
    const foods = [
        { type: 'apple', points: 1 },
        { type: 'banana', points: 5 },
        { type: 'orange', points: 10 },
    ];
    const randomFoods = foods[Math.floor(Math.random() * foods.length)];

    const addScore = currentScore => {
        return currentScore + randomFoods.points;
    };

    setScore(prevScore => addScore(prevScore));
};
