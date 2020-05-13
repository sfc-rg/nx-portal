import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export const AppDirectory = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
`;

export const AppDirItem = styled(Link)`
    width: 90px;
    height: 90px;
    margin: 5px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    color: #333;
    text-decoration: none;

    &:hover {
        background: #dbdbdb;
        border-radius: 8px;
    }
`;

export const AppDirItemExternal = styled.a`
    width: 90px;
    height: 90px;
    margin: 5px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    color: #333;
    text-decoration: none;

    &:hover {
        background: #dbdbdb;
        border-radius: 8px;
    }
`;

export const AppDirItemIcon = styled.object`
    width: 80px;
    height: 80px;
    margin: 5px;
    margin-top: 0;
    pointer-events: none;
`;

export const AppLabel = styled.span`
    width: 100%;
    text-align: center;
    font-weight: 500;
`;
