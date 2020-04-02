import styled from "styled-components";

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;

    display: inline-block;
    min-width: 180px;
    padding-left: 10px;
    padding-right: 10px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    color: white;
    border-radius: 15px;
    background: #d43333;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: "Roboto Condensed", sans-serif;
    margin: 25px;

    &:focus {
        outline: 0;
    }

    &:hover {
        letter-spacing: 1.5px;
        background: #333;
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    }

    @media screen and (max-width: 480px) {
        min-width: 140px;
        height: 55px;
        line-height: 55px;
        border-radius: 14px;
        font-size: 1.3rem;
    }
`;
