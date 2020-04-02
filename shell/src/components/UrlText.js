import React from "react";
import styled from "styled-components";

export const UrlText = styled.h1`
    height: 60px;
    width: 400px;
    overflow: hidden;
    line-height: 60px;
    font-size: 1.5rem;

    @media screen and (max-width: 1155px) {
        display: none;
    }
`;

const UrlTextLinkableStyle = styled.a`
    height: 60px;
    width: 400px;
    overflow: hidden;
    line-height: 60px;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: blue;

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
        width: 70%;

        display: none;
    }

    @media (prefers-color-scheme: dark) {
        color: #3f81fc;
    }
`;

const UrlTextCopyableStyle = styled.button`
    display: none;
    appearance: none;
    background: none;
    border: none;
    height: 60px;
    width: 400px;
    overflow: hidden;
    line-height: 60px;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: blue;

    @media screen and (max-width: 480px) {
        display: block;
        font-size: 1.5rem;
        width: 70%;
    }

    @media (prefers-color-scheme: dark) {
        color: #3f81fc;
    }
`;

export class UrlTextLinkable extends React.Component {
    render() {
        return (
            <UrlTextLinkableStyle href={this.props.children} target="_blank">
                {this.props.children}
            </UrlTextLinkableStyle>
        );
    }
}

export class UrlTextCopyable extends React.Component {
    saveToClipboard(str) {
        let textArea = document.createElement("textarea");
        textArea.style.cssText = "position:absolute; left:-100%";
        document.body.appendChild(textArea);
        textArea.value = str;
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        if (navigator.share) {
            navigator.share({
                title: "lin9 URL Share",
                text: "This is your shortened link!",
                url: str
            });
        } else {
            alert("Web Share API is not supported!!");
        }
    }

    render() {
        return (
            <UrlTextCopyableStyle
                onClick={() => this.saveToClipboard(this.props.urlString)}
            >
                {this.props.urlString}
            </UrlTextCopyableStyle>
        );
    }
}
