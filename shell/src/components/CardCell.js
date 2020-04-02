import styled from "styled-components";

export const CardCell = styled.div`
    min-height: 470px;
    background: white;
    background-image: url();
    background-size: cover;
    border-radius: 20px;
    filter: drop-shadow(0px 1px 7px rgb(212, 212, 212));
    transform: translateZ(0); // Enable GPU rendering on iOS devices
    overflow: hidden;
    padding: 20px;

    h1,
    p {
        color: #333;
    }

    h1 {
        font-size: 2rem;
        margin: 0;
    }

    p {
        width: 100%;
        font-weight: bold;
    }

    @media (prefers-color-scheme: dark) {
        color: white;
        background: #242424;
        filter: drop-shadow(0px 1px 7px rgb(24, 24, 24));

        h1,
        p {
            color: white;
        }
    }
`;

export const ShortCardCell = styled.div`
    min-height: 300px;
    background: white;
    background-image: url();
    background-size: cover;
    border-radius: 20px;
    filter: drop-shadow(0px 1px 7px rgb(212, 212, 212));
    transform: translateZ(0); // Enable GPU rendering on iOS devices
    overflow: hidden;
    padding: 20px;

    h1,
    p {
        color: #333;
    }

    h1 {
        font-size: 2rem;
        margin: 0;
    }

    p {
        width: 100%;
        font-weight: bold;
    }

    @media (prefers-color-scheme: dark) {
        color: white;
        background: #242424;
        filter: drop-shadow(0px 1px 7px rgb(24, 24, 24));

        h1,
        p {
            color: white;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 64px;
    margin-left: 64px;
`;

export const CardsCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;

    * {
        margin-bottom: 20px;
    }
`;
