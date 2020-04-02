import styled from "styled-components";

export const Input = styled.input`
    appearance: none;
    border: none;
    height: 60px;
    width: 400px;
    border-radius: 14px;
    padding-left: 30px;
    letter-spacing: 0;
    font-size: 1.5rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    background: #ebebeb;

    &:focus {
        outline: 0;
        border: splid 2px red;
    }

    @media screen and (max-width: 480px) {
        width: 85%;
        height: 50px;
        padding-left: 20px;
        font-size: 1.2rem;
        letter-spacing: 0;
        border-radius: 15px;
    }
`;
