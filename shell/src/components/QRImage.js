import styled from "styled-components";

export const QRImage = styled.img`
    width: 85px;
    height: 85px;
    padding: 15px;
    border-radius: 13px;
    background: white;
    margin-right: 17px;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;
