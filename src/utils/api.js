import axios from 'axios';

export const getLeaderboardData = () => {
    axios
        .get('https://nodejs-homework-rest-api-7or0.onrender.com/score')
        .then(response => {
            return response.data;
        })
        .catch(error => console.error('Error fetching scores', error));
};

export const sendLeaderboardData = (playerName, score) => {
    axios
        .post('https://nodejs-homework-rest-api-7or0.onrender.com/score', {
            name: playerName,
            score: score,
        })
        .then(response => {
            console.log('Score added successfully');
        })
        .catch(error => console.error('Error adding score', error));
};
