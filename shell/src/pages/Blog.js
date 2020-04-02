import React from "react";
import { withTranslation } from "react-i18next";
import { APIClient } from "../services/APIClient";
// import { AuthOnlyView } from "./services/Auth";
import {
    HeadingCard,
    AnimationHeading,
    GlidingThumb,
    ArticleCard,
    AppContainer,
    Heading1
} from "../AppComponent";
import NavigationBar from "../pageComponents/NavBar/NavigationBar";
import {
    AppDirectory,
    AppDirItem,
    AppDirItemIcon,
    AppLabel
} from "../pageComponents/AppDirectory/AppDirectory";

import { Row } from "../components/Layout";

// Assets
import BlogIcon from "./assets/icons/BlogIcon.svg";
import FileIcon from "./assets/icons/FileIcon.svg";
import WIPIcon from "./assets/icons/WIPIcon.svg";
import TermIcon from "./assets/icons/TermIcon.svg";
import MTGICon from "./assets/icons/MTGICon.svg";
import ProfileIcon from "./assets/icons/ProfileIcon.svg";
import ThesisIcon from "./assets/icons/ThesisIcon.svg";

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
class Blog extends React.Component {
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

                <AppContainer>
                    <h1>Apps</h1>
                    <AppDirectory>
                        <AppDirItem>
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={BlogIcon}
                            ></AppDirItemIcon>
                            <AppLabel>Blog</AppLabel>
                        </AppDirItem>
                        <AppDirItem>
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={FileIcon}
                            />
                            <AppLabel>Upload Files</AppLabel>
                        </AppDirItem>
                        <AppDirItem>
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={ThesisIcon}
                            />{" "}
                            <AppLabel>Thesis</AppLabel>
                        </AppDirItem>
                        <AppDirItem>
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={WIPIcon}
                            />
                            <AppLabel>WIP</AppLabel>
                        </AppDirItem>
                        <AppDirItem>
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={TermIcon}
                            />
                            <AppLabel>TERM</AppLabel>
                        </AppDirItem>

                        <AppDirItem>
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={MTGICon}
                            />
                            <AppLabel>Meetings</AppLabel>
                        </AppDirItem>

                        <AppDirItem>
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={ProfileIcon}
                            />
                            <AppLabel>My Account</AppLabel>
                        </AppDirItem>
                    </AppDirectory>

                    <h1>Information</h1>
                    <p>
                        徳田・村井・楠本・中村・高汐・バンミーター・植原・三次・中澤・武田合同研究プロジェクト(RG)のポータルサイトです。
                        毎週木曜日の4限(2:45PM~4:15PM)と5限(4:30PM~6:00PM)にι23教室でRG全体授業を行っています。
                    </p>
                    <h1>Update</h1>
                </AppContainer>
            </>
        );
    }
}

export default withTranslation()(Blog);
