import React from "react";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { APIClient } from "./services/APIClient";
// import { AuthOnlyView } from "./services/Auth";

import { GlidingThumb, AppContainer, Heading1 } from "./AppComponent";
import NavigationBar from "./pageComponents/NavBar/NavigationBar";
import {
    AppDirectory,
    AppDirItem,
    AppDirItemExternal,
    AppDirItemIcon,
    AppLabel
} from "./pageComponents/AppDirectory/AppDirectory";

import Animate from "animate.css-react";
import "animate.css/animate.css";

import LinkElement from "./UILib/LinkElement";

import { Row } from "./components/Layout";

// Assets
import BlogIcon from "./assets/icons/BlogIcon.svg";
import FileIcon from "./assets/icons/FileIcon.svg";
import WIPIcon from "./assets/icons/WIPIcon.svg";
import TermIcon from "./assets/icons/TermIcon.svg";
import MTGICon from "./assets/icons/MTGICon.svg";
import ProfileIcon from "./assets/icons/ProfileIcon.svg";
import ThesisIcon from "./assets/icons/ThesisIcon.svg";
import RGRootIcon from "./assets/icons/RGRootIcon.svg";
import MailIcon from "./assets/icons/MailIcon.svg";
import styled from "styled-components";

const ArticleDirectory = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
`;

const ArticleCard = styled.div`
    width: 390px;
    height: 200px;
    background: white;
    padding: 15px;
    padding-top: 3px;
    margin: 10px;
    border-radius: 10px;
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

    toMeeting = () => {
        this.props.history.push("/");
    };

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

    componentDidMount() {
        this.fetchAPI();
    }

    toMeeting = () => {
        this.props.history.push("/meetings");
    };

    render() {
        const { t } = this.props;

        return (
            <>
                <NavigationBar>RG Portal</NavigationBar>

                <AppContainer>
                    <h2>{t("app")}</h2>
                    <AppDirectory>
                        <AppDirItem to="/blog">
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
                        <AppDirItem to="/thesis">
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={ThesisIcon}
                            />
                            <AppLabel>Thesis</AppLabel>
                        </AppDirItem>
                        <AppDirItem to="/wip">
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={WIPIcon}
                            />
                            <AppLabel>WIP</AppLabel>
                        </AppDirItem>
                        <AppDirItem to="/term">
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={TermIcon}
                            />
                            <AppLabel>TERM</AppLabel>
                        </AppDirItem>

                        <AppDirItem to="/meetings">
                            <AppDirItemIcon
                                onClick={this.toMeeting}
                                type="image/svg+xml"
                                data={MTGICon}
                            />
                            <AppLabel>Meetings</AppLabel>
                        </AppDirItem>

                        <AppDirItemExternal
                            href={"https://dash.sfc.wide.ad.jp/"}
                        >
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={RGRootIcon}
                            />
                            <AppLabel>RGRoot Portal</AppLabel>
                        </AppDirItemExternal>

                        <AppDirItemExternal
                            href={"https://mail.sfc.wide.ad.jp/"}
                        >
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={MailIcon}
                            />
                            <AppLabel>RG Mail</AppLabel>
                        </AppDirItemExternal>

                        <AppDirItem>
                            <AppDirItemIcon
                                type="image/svg+xml"
                                data={ProfileIcon}
                            />
                            <AppLabel>My Account</AppLabel>
                        </AppDirItem>
                    </AppDirectory>

                    <h1>{t("update")}</h1>

                    <ArticleDirectory>
                        <ArticleCard>
                            <h3>新しいポータルについて</h3>
                            <p>
                                RGポータルはリニューアルしました。詳しい使い方は後ほど載せますうん
                            </p>
                        </ArticleCard>
                        <ArticleCard>
                            <h3>新しいポータルについて</h3>
                            <p>
                                RGポータルはリニューアルしました。詳しい使い方は後ほど載せますうん
                            </p>
                        </ArticleCard>
                        <ArticleCard>
                            <h3>新しいポータルについて</h3>
                            <p>
                                RGポータルはリニューアルしました。詳しい使い方は後ほど載せますうん
                            </p>
                        </ArticleCard>
                        <ArticleCard>
                            <h3>新しいポータルについて</h3>
                            <p>
                                RGポータルはリニューアルしました。詳しい使い方は後ほど載せますうん
                            </p>
                        </ArticleCard>
                    </ArticleDirectory>
                </AppContainer>
            </>
        );
    }
}

export default withRouter(withTranslation()(App));
