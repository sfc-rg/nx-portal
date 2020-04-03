import styled from "styled-components";
import mediaQuery from "styled-media-query";

/// Using media query break points
// ------------------------------------------------------------------------------
const mediaMobile = mediaQuery.lessThan("medium");

/// Page specific components
// ------------------------------------------------------------------------------
export const GlidingThumb = styled.img`
    height: 520px;
    object-fit: cover;

    ${mediaMobile`
    height: 250px;
  `}
`;

export const ArticleCard = styled.div`
    background: white;
    width: auto;
    min-height: 130px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: solid 1px #c4c4c4;
    flex-grow: 1;
    padding: 10px;
`;

export const AppContainer = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    padding-top: 30px;
`;

export const Heading1 = styled.h1`
    font-size: 4rem;
    margin-left: 15px;
    font-weight: 300;
`;
