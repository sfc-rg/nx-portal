import styled from "styled-components";

export const Container = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;

    @media screen and (max-width: 480px) {
        margin-left: 8px;
        margin-right: 8px;
    }

    background: ${props => (props.debug ? "red" : "transparent")};
`;

export const Row = styled.div`
    width: 100%;
    margin: 10px;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content: ${props => (props.right ? "flex-end" : "space-around")};
    align-items: center;
    flex-wrap: wrap;

    background: ${props => (props.debug ? "blue" : "transparent")};
`;

export const MarginSparcer = styled.div`
    height: 10px;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 2em;
    padding: 2em;
    margin: 0 0 1em;
    margin-left: 50px;
    margin-right: 50px;

    > div {
        overflow: auto;
        min-width: 0;
        padding: 1.1em;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin-left: 8px;
        margin-right: 8px;
    }
`;
