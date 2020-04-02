import React from "react";
import { withTranslation } from "react-i18next";
import { APIClient } from "./services/APIClient";
// import { AuthOnlyView } from "./services/Auth";
import {
    HeadingCard,
    AnimationHeading,
    GlidingThumb,
    ArticleCard,
    AppContainer,
    Heading1
} from "./AppComponent";
import NavigationBar from "./pageComponents/NavigationBar";
import { Row } from "./components/Layout";

// Assets

import styled from "styled-components";

const FeaturedArticleCard = styled.div`
    width: 390px;
    height: 200px;
    background: #fff0f6;
    padding: 15px;
    padding-top: 3px;
    margin: 10px;
`;

// Page Componrnts
// ------------------------------------------------------------------------------
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            originUrl: "",
            articles: []
        };
    }

    fetchAPI() {
        APIClient.GET("/api/articles", data => {
            this.setState({
                articles: data
            });
        });
    }

    linkTo(path) {
        window.location.href = "/article/" + path;
    }

    composeArticleCard(value) {
        return (
            <Row>
                <ArticleCard>
                    <h1>{value[0].title}</h1>
                    <p>{value[0].description}</p>
                </ArticleCard>
                <ArticleCard>
                    <h1>{value[1].title}</h1>
                    <p>{value[1].description}</p>
                </ArticleCard>
            </Row>
        );
    }

    componentDidMount() {
        this.fetchAPI();
    }

    render() {
        const { t } = this.props;

        return (
            <>
                <NavigationBar>RG Portal</NavigationBar>

                <AppContainer></AppContainer>
            </>
        );
    }
}

export default withTranslation()(App);
