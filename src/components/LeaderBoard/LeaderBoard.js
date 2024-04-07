import { useEffect, useState } from 'react';
import { getLeaderboardData } from '../../utils/api';
import * as SC from './LeaderBoard.styled';

const LeaderBoard = () => {
    const [leaderList, setLeaderList] = useState([{ playerName: 'test', score: 0 }]);

    useEffect(() => {
        const leaderList = getLeaderboardData();
        if (leaderList) {
            setLeaderList(leaderList);
        }
    }, []);

    return (
        <SC.LeaderBoard>
            <h3>Leaderboard:</h3>
            <ul>
                {leaderList.map((record, index) => (
                    <li key={index}>
                        {record.playerName}: {record.score}
                    </li>
                ))}
            </ul>
        </SC.LeaderBoard>
    );
};

export default LeaderBoard;
