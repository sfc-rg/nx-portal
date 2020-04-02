import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const Navigation = styled.nav`
    z-index: 100;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    background: white;
    filter: drop-shadow(0px 0px 1px rgb(184, 184, 184));
    width: 100%;
    min-height: 60px;
    margin: 0;
    top: 0;

    @media screen and (max-width: 480px) {
        height: 60px;
    }

    @media (prefers-color-scheme: dark) {
        color: white;
        background: #232423;
        filter: drop-shadow(0px 0px 1px rgb(70, 70, 70));
    }
`;

export const NavBrand = styled.h1`
    font-family: "Lora", serif;
    font-size: 1.5rem;
    margin: 0;
    padding-left: 25px;

    @media screen and (max-width: 480px) {
        height: 60px;
        line-height: 60px;
        padding-left: 15px;
    }
`;

export const NavArea = styled.div`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 480px) {
        margin: 5px;
    }
`;

export const NavItems = styled.div`
    min-width: 150px;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;

    @media screen and (max-width: 480px) {
        min-width: 100px;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
    padding: 0.5em;
    border-radius: 0.3em;

    &:hover {
        background: #000;
        color: #fff;
    }

    @media screen and (max-width: 480px) {
        padding: 0.5em;
        border-radius: 0.3em;
    }

    @media (prefers-color-scheme: dark) {
        color: white;

        &:hover {
            background: #fff;
            color: #333;
        }
    }
`;
