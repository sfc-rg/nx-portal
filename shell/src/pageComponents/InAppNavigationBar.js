import React from "react";

import {
    Navigation,
    NavBrand,
    NavArea,
    NavItems,
    NavLink
} from "../components/Navigation";
import { NavBrandArea, NavBrandLogo } from "./NavigationBarCommon";
import { withTranslation } from "react-i18next";
import { AuthOnlyView } from "../services/Auth";

class InAppNavigationBar extends React.Component {
    render() {
        const { t } = this.props;

        return (
            <Navigation style={this.props.extraStyle}>
                <NavBrandArea href="/">
                    <NavBrand>{this.props.children}</NavBrand>
                </NavBrandArea>
                <NavArea>
                    <NavItems>
                        <AuthOnlyView
                            elseComponent={
                                <NavLink to="/m/signin">
                                    {t("Top.Signin")}
                                </NavLink>
                            }
                        >
                            <NavLink to="/m/logout">{t("Top.Logout")}</NavLink>
                        </AuthOnlyView>
                    </NavItems>
                </NavArea>
            </Navigation>
        );
    }
}

export default withTranslation()(InAppNavigationBar);
