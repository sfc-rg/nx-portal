import styled from "styled-components";

export const Heading = styled.h1`
    font-family: "Lora", serif;
    font-size: 4.5rem;
    font-weight: bold;
    color: #333;
    text-align: center;

    @media screen and (max-width: 800px) {
        margin-top: 140px;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
        width: 95%;
        margin-top: 20px;
        font-size: 3rem;
        text-align: left;
        padding-left: 20px;
    }

    @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
        font-size: 4rem;
    }

    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
        font-size: 4rem;
    }

    @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
        font-size: 4rem;
    }

    @media (prefers-color-scheme: dark) {
        color: white;
    }
`;
