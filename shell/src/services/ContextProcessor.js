import React, { Children } from "react";
import styled from "styled-components";
import { AudioPlay } from "../components/AudioPlay";

const WidgetContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WarningView = styled.div`
    width: 100%;
    background: pink;
    border-radius: 20px;
    padding: 20px;
    border: solid 4px red;
    min-height: 80px;
    margin-bottom: 10px;
    overflow: scroll;

    * {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

export class ContextProcessor extends React.Component {
    constructor(props) {
        super(props);
    }

    abstraction() {
        let convertContent = "";

        Children.map(this.props.children, child => {
            switch (typeof child) {
                case "string":
                    convertContent += child;
                default:
                    return;
            }
        });

        let tmp = [];
        convertContent.split(/(\[.*?(?: .+?)?\])/g).forEach(elm => {
            switch (true) {
                case elm.match(/\[youtube.*?(?: .+?)?\]/) != null:
                    tmp.push(this.youtube(elm));
                    break;
                case elm.match(/\[apple.*?(?: .+?)?\]/) != null:
                    tmp.push(this.apple(elm));
                    break;
                case elm.match(/\[sound.*?(?: .+?)?\]/) != null:
                    tmp.push(this.sound(elm));
                    break;
                default:
                    tmp.push(elm);
                    break;
            }
        });

        return tmp;
    }

    youtube(code) {
        try {
            let playbackURL =
                "https://www.youtube.com/embed/" +
                code
                    .match(/id\=\".*?(?: .+?)?\"/g)[0]
                    .replace(/id\=\"/g, "")
                    .replace('"', "");

            return (
                <iframe
                    width="100%"
                    height="470"
                    src={playbackURL}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            );
        } catch (e) {
            return (
                <WarningView>
                    <h5>埋め込まれたショートコードに構文エラーがあります.</h5>
                    <label>使用されたショート構文:</label>
                    <p>{code}</p>
                </WarningView>
            );
        }
    }

    apple(code) {
        try {
            let playbackURL =
                "https://embed.music.apple.com/jp/album/" +
                code
                    .match(/url\=\".*?(?: .+?)?\"/g)[0]
                    .replace(/url\=\"/g, "")
                    .replace('"', "")
                    .split("album/")[1] +
                "&at=1001lqeA";

            return (
                <WidgetContainer>
                    <iframe
                        allow="autoplay *; encrypted-media *;"
                        frameborder="0"
                        height="150"
                        style={{
                            width: "100%",
                            maxWidth: "660px",
                            overflow: "hidden",
                            background: "transparent"
                        }}
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src={playbackURL}
                    />
                </WidgetContainer>
            );
        } catch (e) {
            return (
                <WarningView>
                    <h5>埋め込まれたショートコードに構文エラーがあります.</h5>
                    <label>使用されたショート構文:</label>
                    <p>{code}</p>
                </WarningView>
            );
        }
    }

    sound(code) {
        // let playbackURL = code.match(/url\=\".*?(?: .+?)?\"/g)[0].replace( /url\=\"/g , "").replace("\"", "")

        try {
            return <AudioPlay />;
        } catch (e) {
            return (
                <WarningView>
                    <h5>埋め込まれたショートコードに構文エラーがあります.</h5>
                    <label>使用されたショート構文:</label>
                    <p>{code}</p>
                </WarningView>
            );
        }
    }

    render() {
        const elms = this.abstraction();

        return (
            <>
                {elms.map(value => (
                    <>{value}</>
                ))}
            </>
        );
    }
}
