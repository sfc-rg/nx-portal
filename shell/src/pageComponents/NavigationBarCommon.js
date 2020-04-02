import styled from "styled-components";

export const NavBrandArea = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #333;
    &:visited {
        text-decoration: none;
        color: #333;
    }
`;

export const NavBrandLogo = styled.object`
    width: 40px;
    height: 40px;
    margin: 7px;
    margin-left: 20px;
    margin-right: 0;
    transition: transform 0.8s ease-in-out;

    &:hover {
        transform: rotate(360deg);
    }
`;
