import styled from "styled-components";
import mediaQuery from "styled-media-query";

/// Using media query break points
// ------------------------------------------------------------------------------
const mediaMobile = mediaQuery.lessThan("medium");

/// Page specific components
// ------------------------------------------------------------------------------
export const Container = styled.div`
    margin-left: 30px;
    margin-right: 30px;
`;

export const Heading1 = styled.h1`
    font-size: 3.1rem;
    margin-left: 15px;
    font-weight: 300;
`;
