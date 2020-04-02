import React from "react";
import NavigationBar from "../pageComponents/NavBar/NavigationBar";
import { Button } from "../components/Buttons";
import { withTranslation } from "react-i18next";
import { MarginSparcer, Container, Row } from "../components/Grid";
import TermDoc from "../components/Terms";
import PrivacyDoc from "../components/PrivacyPolicy";
import Animate from "animate.css-react";
import "animate.css/animate.css";

// Services
import { APIClient } from "../services/APIClient";
import { Validator, ValidationType } from "../services/Validator";

// Page Specific Components
import {
    AuthCard,
    AuthCardHeadings,
    ErrorMessage,
    Input,
    ScrollableDoc
} from "./SignUpComponent";

import { Link } from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: "email",
            currentMessage: "",
            input: "",
            email: "",
            password: "",
            agreement: false
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
                if (
                    !Validator.validate(ValidationType.Email, this.state.input)
                ) {
                    this.setState({
                        currentMessage: t("SignUp.Errors.EmailInvalid")
                    });
                    return;
                }

                APIClient.POST(
                    "/api/auth/exists",
                    { username: this.state.input },
                    data => {
                        if (data.exists)
                            this.setState({
                                currentMessage: t("SignUp.Errors.EmailExists")
                            });
                        else
                            this.setState({
                                email: this.state.input,
                                currentPage: "password",
                                input: "",
                                currentMessage: ""
                            });
                    }
                );
                break;

            case "password":
                // Password letter number check
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

                // Password policy conditions check
                if (
                    !Validator.validate(
                        ValidationType.PasswordLetterConditions,
                        this.state.input
                    )
                ) {
                    this.setState({
                        currentMessage: t(
                            "SignUp.Errors.PasswordInvalidCondition"
                        )
                    });
                    return;
                }

                this.setState({
                    password: this.state.input,
                    currentPage: nextTo,
                    currentMessage: ""
                });
                break;

            default:
                break;
        }
    }

    register() {
        APIClient.POST(
            "/api/auth/register",
            {
                email: this.state.email,
                password: this.state.password,
                agreeStatus: true
            },
            data => {
                if (data.detail === "success")
                    this.setState({ currentPage: "success" });
                else
                    this.setState({
                        currentMessage: "Failed to register account!"
                    });
            }
        );
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
                                    <h1>{t("SignUp.Title")}</h1>
                                    <p>{t("SignUp.Description")}</p>
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
                                    placeholder="Email"
                                    onChange={e =>
                                        this.onChange(e.target.value)
                                    }
                                />
                                <Button
                                    onClick={() => this.switchPage("password")}
                                >
                                    {t("SignUp.SubmitMail")}
                                </Button>
                            </AuthCard>
                        )}

                        {this.state.currentPage === "password" && (
                            <AuthCard>
                                <AuthCardHeadings>
                                    <h1>{t("SignUp.Title")}</h1>
                                    <p>{t("SignUp.DescriptionPass")}</p>
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
                                    type="password"
                                    onChange={e =>
                                        this.onChange(e.target.value)
                                    }
                                />
                                <Button
                                    onClick={() => this.switchPage("agreement")}
                                >
                                    {t("SignUp.SubmitPass")}
                                </Button>
                            </AuthCard>
                        )}

                        {this.state.currentPage === "agreement" && (
                            <AuthCard>
                                <AuthCardHeadings>
                                    <h1>{t("SignUp.TitleAgreement")}</h1>
                                    <p>{t("SignUp.DescriptionAgreement")}</p>
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
                                <ScrollableDoc>
                                    <TermDoc />
                                    <PrivacyDoc />
                                </ScrollableDoc>
                                <Button onClick={() => this.register()}>
                                    {t("SignUp.SubmitAgreement")}
                                </Button>
                            </AuthCard>
                        )}

                        {this.state.currentPage === "success" && (
                            <AuthCard>
                                <AuthCardHeadings>
                                    <h1>{t("SignUp.TitleSuccess")}</h1>
                                    <p>{t("SignUp.DescriptionSuccess")}</p>
                                </AuthCardHeadings>
                                <Button onClick={() => this.register()}>
                                    <Link to="/">
                                        {t("SignUp.SubmitSuccess")}
                                    </Link>
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

export default withTranslation("auth")(SignUp);
