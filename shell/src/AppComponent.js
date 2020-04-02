import styled from "styled-components";
import mediaQuery from "styled-media-query";

/// Using media query break points
// ------------------------------------------------------------------------------
const mediaMobile = mediaQuery.lessThan("medium");

/// Page specific components
// ------------------------------------------------------------------------------
export const HeadingArea = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  align-items: center;
  overflow: hidden;
  &::after {
    content: "";
    background-color: rgba(255, 254, 242, 0.342);
    position: absolute;
    width: 100%;
    height: 520px;
  }
  ${mediaMobile`
    height: 250px;
  `}
`;

export const GlidingThumb = styled.img`
  height: 520px;
  object-fit: cover;

  ${mediaMobile`
    height: 250px;
  `}
`;

export const HeadingCard = styled.object`
  position: absolute;
  left: 100px;
  width: 460px;
  height: 460px;
  z-index: 3;

  ${mediaMobile`
    left: 20px;
    height: 220px;
    width: 220px;
  `}
`;

export const AnimationHeading = styled.div`
  height: 520px;
  display: flex;
  align-items: center;
  animation: loop 60s -25s linear infinite;

  ${mediaMobile`
    height: 250px;
  `}

  @keyframes loop {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
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
