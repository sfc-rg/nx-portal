import React from "react";
import styled from "styled-components";

export const AppDirectory = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
`;

export const AppDirItem = styled.div`
    width: 90px;
    height: 90px;
    margin: 5px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    &:hover {
        background: #dbdbdb;
    }
`;

export const AppDirItemIcon = styled.object`
    width: 80px;
    height: 80px;
    margin: 5px;
    margin-top: 0;
`;

export const AppLabel = styled.span`
    width: 100%;
    text-align: center;
`;
