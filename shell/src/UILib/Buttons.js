import styled from "styled-components";

export const Button = styled.button`
    appearance: none;
    outline: none;
    border: none;
    background: linear-gradient(25deg, #ed113d, #fa9e1e);
    height: 60px;
    line-height: 60px;
    width: 150px;
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    filter: drop-shadow(0px 1px 5px rgb(186, 186, 186));
    transform: translateZ(0); // Enable GPU rendering on iOS devices
    transition: 0.3s;
    border-radius: 5px;

    &[data-level="primary"] {
        background: linear-gradient(25deg, #0046ff, #67ccff);
    }

    &[data-level="danger"] {
        background: linear-gradient(25deg, #ff342c, #ff7358);
    }

    &:hover {
        filter: drop-shadow(0px 1px 10px rgb(140, 140, 140));
        background-position: right center;
    }

    &:active {
        filter: none;
    }
`;
