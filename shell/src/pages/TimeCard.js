import React from "react";
import { withTranslation } from "react-i18next";
import { APIClient } from "../services/APIClient";
// import { AuthOnlyView } from "./services/Auth";

import TimeIcon from "../assets/icons/app_icon_timer.svg";

import {
    HeadingArea,
    HeadingCard,
    AnimationHeading,
    GlidingThumb,
    ArticleCard,
    AppContainer,
    Heading1
} from "../AppComponent";
import TopNavigation from "../pageComponents/Navigation";

import { Button } from "../components/Buttons";
import { Row } from "../components/Layout";

// Assets

import styled from "styled-components";

export const TimeButton = styled.button`
    appearance: none;
    outline: none;
    border: none;
    background: linear-gradient(25deg, #ed113d, #fa9e1e);
    height: 120px;
    line-height: 120px;
    width: 200px;
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    filter: drop-shadow(0px 1px 5px rgb(138, 138, 138));
    transform: translateZ(0); // Enable GPU rendering on iOS devices
    transition: 0.3s;
    border-radius: 30px;
    --smooth-corners: 4;
    mask-image: paint(smooth-corners);

    &:hover {
        filter: drop-shadow(0px 1px 10px rgb(79, 79, 79));
        background-position: right center;
    }

    &:active {
        filter: none;
    }
`;

const NavIcon = styled.object`
    height: 48px;
    width: 48px;
`;

// Page Componrnts
// ------------------------------------------------------------------------------
class TimeCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };
    }

    fetchAPI() {
        APIClient.GET("/api/articles", data => {
            this.setState({
                articles: data
            });
        });
    }

    componentDidMount() {
        this.fetchAPI();
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

    render() {
        const { t } = this.props;

        const { time } = this.state;

        return (
            <>
                <TopNavigation>
                    <NavIcon type="image/svg+xml" data={TimeIcon}></NavIcon>
                    Time
                </TopNavigation>
                <AppContainer>
                    <Heading1>Today</Heading1>
                    <p>{time.toLocaleDateString()}</p>
                    <TimeButton>{time.toLocaleTimeString()}</TimeButton>
                </AppContainer>
            </>
        );
    }
}

export default withTranslation()(TimeCard);
