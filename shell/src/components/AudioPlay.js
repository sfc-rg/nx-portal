import React from "react";
import styled from "styled-components";

const PlayButton = styled.button`
    appearance: none;
    outline: none;
    border: none;
    position: absolute;
    width: 50px;
    height: 50px;
    right: 100px;
    transform: translateY(50%);
    background: transparent;
    z-index: 5;
`;

export class AudioPlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            play: true
        };

        this.url = "https://www.dropbox.com/s/719rb4yw684eu67/bgm4.mp3?dl=1";
        this.audio = new Audio(this.url);
        this.audio.loop = true;
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.setState({
            play: !this.state.play
        });

        this.state.play ? this.audio.play() : this.audio.pause();
    }

    render() {
        return (
            <>
                <PlayButton id="" onClick={this.togglePlay}></PlayButton>
            </>
        );
    }
}
