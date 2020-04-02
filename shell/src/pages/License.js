import React from "react";
import { Container, Row, MarginSparcer } from "../components/Grid";
import { Navigation, NavBrand } from "../components/Navigation";
import TermDoc from "../components/Terms";

class LicenseDoc extends React.Component {
  render() {
    return (
      <>
        <Navigation>
          <NavBrand>Terms and Conditions</NavBrand>
        </Navigation>
        <MarginSparcer />
        <Container>
          <Row>
            <TermDoc />
          </Row>
        </Container>
      </>
    );
  }
}

export default LicenseDoc;
