import styled from '@emotion/styled';

export const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 50px;
`;

export const GameBoard = styled.div``;

export const ScoreBoard = styled.div`
    position: absolute;
    top: 20px;
    left: 50px;
    display: flex;
    gap: 20px;
`;

export const SnakeSegment = styled.div`
    width: 10px;
    height: 10px;
    background-color: green;
    position: absolute;
    top: ${props => Math.min(props.y * 10)}px;
    left: ${props => Math.min(props.x * 10)}px;
`;

export const FoodSegment = styled.div`
    width: 10px;
    height: 10px;
    background-color: green;
    position: absolute;
    top: ${props => Math.min(props.y * 10)}px;
    left: ${props => Math.min(props.x * 10)}px;
`;
