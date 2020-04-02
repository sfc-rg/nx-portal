import React from "react";
import { Container, Row, MarginSparcer } from "../components/Grid";

import NavigationBar from "../pageComponents/NavBar/NavigationBar";

import TermDoc from "../components/Terms";

class LicenseDoc extends React.Component {
    render() {
        return (
            <>
                <NavigationBar>RG Portal</NavigationBar>

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
