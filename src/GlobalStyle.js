import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import 'modern-normalize';

const globalStyles = css`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
            Cantarell, 'Helvetica Neue', sans-serif;
        color: #212121;
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: auto;
    }
    body::-webkit-scrollbar {
        width: 12px;
    }

    body::-webkit-scrollbar-track {
        background: #ccc;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #1976d2;
        border-radius: 20px;
        border: 2px solid #ccc;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        border: none;
    }

    table {
        border-collapse: collapse;
        width: 50%;
    }
    th,
    td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }

    .overflow {
        overflow: hidden;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border-radius: 10px;
    background-color: greenyellow;
`;

export const GlobalStyle = () => <Global styles={globalStyles} />;
