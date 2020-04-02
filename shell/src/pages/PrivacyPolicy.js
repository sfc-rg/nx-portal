import React from "react";
import { Container, Row, MarginSparcer } from "../components/Grid";

import NavigationBar from "../pageComponents/NavBar/NavigationBar";
import PlivacyDoc from "../components/PrivacyPolicy";

class PrivacyPolicy extends React.Component {
    render() {
        return (
            <>
                <NavigationBar>Privacy Policy</NavigationBar>
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
