import styled from "styled-components";

export const CardBottom = styled.div`
    width: 80%;
    margin-top: 15vh;
    margin-right: 10%;
    margin-bottom: -20px;
    bottom: 0;
    margin-left: 10%;
    min-height: 350px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background: #fff;
    border-bottom: none;
    box-sizing: border-box;
    filter: drop-shadow(0px 1px 7px rgb(212, 212, 212));
    transform: translateZ(0); // Enable GPU rendering on iOS devices

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 30px;
    }

    @media (prefers-color-scheme: dark) {
        color: white;
        background: #2d2e2d;
        filter: drop-shadow(0px 1px 7px rgb(42, 42, 42));
    }
`;

export const CardCol = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 25px;
    margin-left: 25px;
    overflow: hidden;
    background: white;
    border-radius: 15px;
    min-height: 140px;
    filter: drop-shadow(0px 1px 5px rgb(212, 212, 212));
    transform: translateZ(0); // Enable GPU rendering on iOS devices

    > * {
        min-width: 0;
    }

    @media screen and (max-width: 480px) {
        margin-right: 15px;
        margin-left: 15px;
    }

    @media (prefers-color-scheme: dark) {
        color: white;
        background: #232423;
        filter: drop-shadow(0px 1px 7px rgb(42, 42, 42));
    }
`;

export const CardColPreviewImage = styled.img`
    width: auto;
    height: 146px;
    object-fit: cover;
    object-position: 100% 100%;
    flex-basis: 25%;

    @media screen and (max-width: 480px) {
        flex-basis: 50%;
        width: 105px;
        margin-right: 4px;
    }
`;

export const CardSiteDesctiption = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5px;
    padding-right: 5px;
    overflow-x: hidden;

    @media screen and (max-width: 480px) {
        flex-basis: 45%;
    }
`;

export const CardTitle = styled.h1`
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: nowrap;
    font-size: 2rem;
    overflow-x: hidden;
    line-clamp: 1;
    color: white !important;

    @media screen and (min-width: 481px) and (max-width: 835px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const CardDescription = styled.p`
    font-weight: bold;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: nowrap;
    overflow-x: hidden;
    color: white !important;

    @media screen and (max-width: 480px) {
        height: 65px;
        font-size: 0.7rem;
        white-space: normal;
        overflow-y: hidden;
    }
`;

export const CardControlArea = styled.div`
    flex-basis: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;
