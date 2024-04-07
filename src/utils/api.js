import axios from 'axios';

export const getLeaderboardData = async () => {
    try {
        const response = await axios.get(
            'https://nodejs-homework-rest-api-7or0.onrender.com/score'
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching scores', error);
    }
};

export const sendLeaderboardData = async (playerName, score) => {
    try {
        const response = await axios.post(
            'https://nodejs-homework-rest-api-7or0.onrender.com/score',
            {
                name: playerName,
                score: score,
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error adding score', error);
    }
};
