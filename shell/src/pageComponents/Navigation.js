import React from "react";

import {
  Navigation,
  NavBrand,
  NavArea,
  NavItems,
  NavLink
} from "../components/Navigation";
import { withTranslation } from "react-i18next";
import { AuthOnlyView } from "../services/Auth";
import styled from "styled-components";

export const NavBrandArea = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #333;
  &:visited {
    text-decoration: none;
    color: #333;
  }
`;

export const NavBrandLogo = styled.object`
  width: 40px;
  height: 40px;
  margin: 7px;
  margin-left: 20px;
  margin-right: 0;
  transition: transform 0.8s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`;

class TopNavigation extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <Navigation style={this.props.extraStyle}>
        <NavBrandArea href="/">
          {this.props.children}
        </NavBrandArea>
        <NavArea>
          <NavItems>
            <AuthOnlyView
              elseComponent={
                <NavLink to="/m/signin">{t("Top.Signin")}</NavLink>
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

export default withTranslation()(TopNavigation);
