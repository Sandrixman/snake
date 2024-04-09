import axios from 'axios';

export const getLeaderboardData = async () => {
    try {
        const response = await axios.get('https://backend-on-postgresql.onrender.com/score');
        return response.data;
    } catch (error) {
        console.error('Error fetching scores', error);
        return null;
    }
};

export const sendLeaderboardData = async (playerName, score) => {
    try {
        await axios.post('https://backend-on-postgresql.onrender.com/score', {
            name: playerName,
            score: score,
        });
        console.log('Score added successfully');
    } catch (error) {
        console.error('Error adding score', error);
    }
};
