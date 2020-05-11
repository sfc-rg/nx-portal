import React from "react";

// Page Componrnts
// ------------------------------------------------------------------------------
class LinkElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            originUrl: "",
            articles: []
        };
    }

    toLink = () => {
        window.location.href = this.props.linkURL;
    };

    render() {
        const { t } = this.props;

        return <span onClick={this.toLink} />;
    }
}

export default LinkElement;
