import React from "react";
import { Container, Row, MarginSparcer } from "../components/Grid";
import { Navigation, NavBrand } from "../components/Navigation";
import PlivacyDoc from "../components/PrivacyPolicy";

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <>
        <Navigation>
          <NavBrand>Privacy Policy</NavBrand>
        </Navigation>
        <MarginSparcer />
        <Container>
          <Row>
            <PlivacyDoc />
          </Row>
        </Container>
      </>
    );
  }
}

export default PrivacyPolicy;
