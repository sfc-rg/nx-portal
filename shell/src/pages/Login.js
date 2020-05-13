import React from "react";
import styled from "styled-components";
import NavigationBar from "../pageComponents/NavBar/NavigationBar";
import { Button } from "../components/Buttons";
import { withTranslation } from "react-i18next";
import { MarginSparcer, Container, Row } from "../components/Grid";
import Animate from "animate.css-react";
import "animate.css/animate.css";

import { APIClient } from "../services/APIClient";
import { Authenticator } from "../services/Auth";
import { Validator, ValidationType } from "../services/Validator";

const AuthCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: solid 2px #dedede;
    border-radius: 15px;
    width: 45%;
    min-height: 500px;
    padding: 15px;
    padding-top: 0;
    margin-top: 90px;
    background: white;

    @media screen and (max-width: 480px) {
        width: 100%;
        min-height: 400px;
        border: none;
        margin-top: 30px;
    }
`;

const AuthCardHeadings = styled.div`
    h1,
    p {
        font-weight: bold;
        text-align: center;
    }

    h1 {
        font-size: 2.7rem;
    }
`;

const ErrorMessage = styled.p`
    color: #fc033d;
`;

const Input = styled.input`
    appearance: none;
    background-color: transparent;
    background-image: none;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 0;
    color: inherit;
    font-family: inherit;
    font-size: 1em;
    font-weight: bold;
    padding: 0.4em 0.8em;
    width: 60%;
    height: 40px;
    border-radius: 10px;
    border: none;
    background: #e6e6e6;
    margin-top: 10px;

    &:focus {
        border: 1px solid rgba(0, 0, 0, 0.32);
        box-shadow: none;
        outline: none;
        border: solid 3px #3b79ff;
    }

    @media screen and (max-width: 480px) {
        width: 80%;
    }
`;

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: "email",
            currentMessage: "",
            input: "",
            email: "",
            password: ""
        };
    }

    onChange = value => {
        this.setState({ input: value });
    };

    switchPage(nextTo) {
        const { t } = this.props;

        // Empty check
        if (!Validator.validate(ValidationType.Empty, this.state.input)) {
            this.setState({ currentMessage: t("SignUp.Errors.Empty") });
            return;
        }

        switch (this.state.currentPage) {
            case "email":
                APIClient.POST(
                    "/api/auth/exists",
                    { username: this.state.input },
                    data => {
                        if (data.exists)
                            this.setState({
                                email: this.state.input,
                                currentPage: "password",
                                input: "",
                                currentMessage: ""
                            });
                        else
                            this.setState({
                                currentMessage: t("SignIn.Errors.NotExists")
                            });
                    }
                );
                break;

            case "password":
                if (
                    !Validator.validate(
                        ValidationType.Password,
                        this.state.input
                    )
                ) {
                    this.setState({
                        currentMessage: t("SignUp.Errors.PasswordInvalid")
                    });
                    return;
                }

                APIClient.POST(
                    "/api/auth/jwt/create",
                    { username: this.state.email, password: this.state.input },
                    data => {
                        if (
                            data.detail !==
                            "No active account found with the given credentials"
                        ) {
                            localStorage.setItem("RefreshToken", data.refresh);
                            localStorage.setItem("AccessToken", data.access);

                            window.location.href = "/";

                            this.setState({
                                email: this.state.input,
                                currentPage: "password",
                                input: "",
                                currentMessage: ""
                            });
                        } else
                            this.setState({
                                currentMessage: t(
                                    "SignIn.Errors.PasswordInvalid"
                                )
                            });
                        return;
                    }
                );

                break;

            default:
                break;
        }
    }

    render() {
        const { t } = this.props;

        return (
            <>
                <NavigationBar>RG Portal</NavigationBar>
                <Container>
                    <Row>
                        {this.state.currentPage === "email" && (
                            <AuthCard>
                                <AuthCardHeadings>
                                    <h1>{t("SignIn.Title")}</h1>
                                    <p>{t("SignIn.Description")}</p>
                                    {this.state.currentMessage !== "" && (
                                        <Animate
                                            appear="bounceIn"
                                            durationAppear={800}
                                            component="div"
                                        >
                                            <ErrorMessage>
                                                {this.state.currentMessage}
                                            </ErrorMessage>
                                        </Animate>
                                    )}
                                </AuthCardHeadings>
                                <Input
                                    placeholder="Email or Username"
                                    autoComplete="username"
                                    onChange={e =>
                                        this.onChange(e.target.value)
                                    }
                                />
                                <Button
                                    onClick={() => this.switchPage("password")}
                                >
                                    {t("SignIn.Next")}
                                </Button>
                            </AuthCard>
                        )}

                        {this.state.currentPage === "password" && (
                            <AuthCard>
                                <AuthCardHeadings>
                                    <h1>{t("SignIn.Title")}</h1>
                                    <p>{t("SignIn.DescriptionPass")}</p>
                                    {this.state.currentMessage !== "" && (
                                        <Animate
                                            appear="bounceIn"
                                            durationAppear={800}
                                            component="div"
                                        >
                                            <ErrorMessage>
                                                {this.state.currentMessage}
                                            </ErrorMessage>
                                        </Animate>
                                    )}
                                </AuthCardHeadings>
                                <Input
                                    placeholder="Password"
                                    autoComplete="password"
                                    type="Password"
                                    onChange={e =>
                                        this.onChange(e.target.value)
                                    }
                                />
                                <Button
                                    onClick={() => this.switchPage("login")}
                                >
                                    {t("SignIn.Submit")}
                                </Button>
                            </AuthCard>
                        )}
                    </Row>
                </Container>
                <MarginSparcer />
            </>
        );
    }
}

export default withTranslation("auth")(Login);
