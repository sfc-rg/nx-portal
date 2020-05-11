import React from "react";

import {
    NavBrandArea,
    NavBrandLogo,
    Navigation,
    NavBrand,
    NavArea,
    NavItems,
    NavLink
} from "./NavigationBarCommon";
import { withTranslation } from "react-i18next";
import { AuthOnlyView } from "../../services/Auth";

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
                                <NavLink to="/m/signin">{t("signin")}</NavLink>
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

export default withTranslation("navbar")(InAppNavigationBar);
