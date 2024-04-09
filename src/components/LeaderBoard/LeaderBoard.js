import { useEffect, useState } from 'react';
import { getLeaderboardData } from '../../utils/api';
import * as SC from './LeaderBoard.styled';

const LeaderBoard = () => {
    const [leaderList, setLeaderList] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getLeaderboardData();
                setLeaderList(data);
            } catch (error) {
                console.error('Error fetching leaderboard data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {leaderList && (
                <SC.LeaderBoard>
                    <h3>Leaderboard:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderList.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.name}</td>
                                    <td>{record.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </SC.LeaderBoard>
            )}
        </>
    );
};

export default LeaderBoard;
