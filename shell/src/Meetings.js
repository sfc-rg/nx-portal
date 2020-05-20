import React from "react";
import { withTranslation } from "react-i18next";
import { APIClient } from "./services/APIClient";
// import { AuthOnlyView } from "./services/Auth";
import { GlidingThumb, AppContainer } from "./AppComponent";
import { Container, Heading1 } from "./CommonComponent";
import NavigationBar from "./pageComponents/NavBar/NavigationBar";
import { For } from "react-loops";

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

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ListCard = styled.a`
  background: white;
  filter: drop-shadow(0px 1px 5px rgb(212, 212, 212));
  transform: translateZ(0); // Enable GPU rendering on iOS devices
  padding: 15px;
  padding-right: 25px;
  padding-left: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-right: 25px;
  margin-left: 25px;
  margin-top: 15px;
  margin-bottom: 15px;
  text-decoration: none;
  color: #333;
`;


const ListTitle = styled.h2`
    margin: 0;
    width: 50%;
`;

const ListControlArea = styled.div`
    width: 50%;
`;

const list = [
    {
        "name": "第1回 RG NEW COMMER",
        "start_on": "2020/04/01"
    },
    {
        "name": "第2回 RG Account Setup",
        "start_on": "2020/04/02"
    },
    {
        "name": "第2回 RG Account Setup",
        "start_on": "2020/04/02"
    },
    {
        "name": "第2回 RG Account Setup",
        "start_on": "2020/04/02"
    },
    {
        "name": "第2回 RG Account Setup",
        "start_on": "2020/04/02"
    },
    {
        "name": "第2回 RG Account Setup",
        "start_on": "2020/04/02"
    }
]

// Page Componrnts
// ------------------------------------------------------------------------------
class Meetings extends React.Component {
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
                <NavigationBar>Meetings</NavigationBar>

                <Container>
                    <Heading1>{t("scheduledMeeting")}</Heading1>
                    <MeetingDirectory>
                        <ListContainer>
                        <For of={list} ifEmpty={<em>No meeting!</em>} as={item =>
                            <ListCard href="/">
                                <ListTitle>{item.name}</ListTitle>
                                <ListControlArea>
                        <p>{item.start_on}</p>
                                </ListControlArea>
                            </ListCard>
                        } />
                        </ListContainer>
                        
                    </MeetingDirectory>
                </Container>
            </>
        );
    }
}

export default withTranslation("meetings")(Meetings);
