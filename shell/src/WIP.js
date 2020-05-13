import React from "react";
import { withTranslation } from "react-i18next";
import { APIClient } from "./services/APIClient";
// import { AuthOnlyView } from "./services/Auth";
import { GlidingThumb, AppContainer, Heading1 } from "./AppComponent";
import NavigationBar from "./pageComponents/NavBar/NavigationBar";
import {
    AppDirectory,
    AppDirItem,
    AppDirItemIcon,
    AppLabel
} from "./pageComponents/AppDirectory/AppDirectory";

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

const MeetingDirectory = styled.div`
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
class WIP extends React.Component {
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

    componentDidMount() {
        this.fetchAPI();
    }

    render() {
        const { t } = this.props;

        return (
            <>
                <NavigationBar>WIP</NavigationBar>

                <AppContainer>
                    <h1>現在開発中です.</h1>
                    <MeetingDirectory></MeetingDirectory>
                </AppContainer>
            </>
        );
    }
}

export default withTranslation("meetings")(WIP);
