import React from "react";
import { withTranslation } from "react-i18next";
import { APIClient } from "../services/APIClient";
import { AudioPlay } from "../components/AudioPlay";
import TopNavigation from "../pageComponents/Navigation";
import { Row } from "../components/Layout";

import styled from "styled-components";

const Card = styled.div`
    width: 400px;
    height: 250px;
`;

const Front = styled.div`
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 13px;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);
    backface-visibility: hidden;
    background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#111),
        to(#555)
    );
    background-image: linear-gradient(to right, #111, #555);
    overflow: hidden;
    transform: translateZ(0);
`;

const StripBottom = styled.div`
    position: absolute;
    right: 0;
    height: inherit;
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#ff6767),
        to(#ff4545)
    );
    background-image: linear-gradient(to bottom, #ff6767, #ff4545);
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
    width: 200px;
    transform: skewX(-15deg) translateX(50px);
`;

const Logo = styled.svg`
    position: absolute;
    top: 30px;
    right: 25px;
`;

const Investor = styled.div`
    position: relative;
    top: 30px;
    left: 25px;
    text-transform: uppercase;
`;

const Chip = styled.div`
    position: relative;
    top: 60px;
    left: 25px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 50px;
    height: 40px;
    border-radius: 5px;
    background-image: -webkit-gradient(
        linear,
        right top,
        left bottom,
        from(#ffecc7),
        to(#d0b978)
    );
    background-image: linear-gradient(to bottom left, #ffecc7, #d0b978);
    overflow: hidden;

    .chip-line {
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #333;
    }
    .chip-line:nth-child(1) {
        top: 13px;
    }
    .chip-line:nth-child(2) {
        top: 20px;
    }
    .chip-line:nth-child(3) {
        top: 28px;
    }
    .chip-line:nth-child(4) {
        left: 25px;
        width: 1px;
        height: 50px;
    }

    .chip-main {
        width: 20px;
        height: 25px;
        border: 1px solid #333;
        border-radius: 3px;
        background-image: -webkit-gradient(
            linear,
            right top,
            left bottom,
            from(#efdbab),
            to(#e1cb94)
        );
        background-image: linear-gradient(to bottom left, #efdbab, #e1cb94);
        z-index: 1;
    }
`;

const Wave = styled.svg`
    position: relative;
    top: 20px;
    left: 100px;
`;

const CardNumber = styled.div`
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 40px 25px 10px;
    font-size: 23px;
    font-family: "cc font", monospace;
`;

const End = styled.div`
    margin-left: 25px;
    text-transform: uppercase;
    font-family: "cc font", monospace;

    .end-text {
        font-size: 9px;
        color: rgba(255, 255, 255, 0.8);
    }
`;

const CardHolder = styled.div`
    margin: 10px 25px;
    text-transform: uppercase;
    font-family: "cc font", monospace;
`;

const Master = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: -webkit-box;
    display: flex;

    .circle {
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }

    .master-red {
        background-color: #eb001b;
    }

    .master-yellow {
        margin-left: -10px;
        background-color: rgba(255, 209, 0, 0.7);
    }
`;

const Back = styled.div`
    position: absolute;
    width: inherit;
    height: inherit;
    background: #9e9e9e !important;
    border-radius: 13px;
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);

    .strip-black {
        position: absolute;
        top: 30px;
        left: 0;
        width: 100%;
        height: 50px;
        background: #000;
    }

    .ccv {
        position: absolute;
        top: 110px;
        left: 0;
        right: 0;
        height: 36px;
        width: 90%;
        padding: 10px;
        margin: 0 auto;
        border-radius: 5px;
        text-align: right;
        letter-spacing: 1px;
        color: #000;
        background: #fff;
    }

    .ccv label {
        display: block;
        margin: -30px 0 15px;
        font-size: 10px;
        text-transform: uppercase;
        color: #fff;
    }

    .terms {
        position: absolute;
        top: 150px;
        padding: 20px;
        font-size: 10px;
        text-align: justify;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const CardArea = styled.div`
    height: 80vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const InputArea = styled.div`
    height: 80vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const PurchaseItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const ItemCard = styled.div`
    background: white;
    margin-bottom: 15px;
    width: 500px;
    padding-right: 15px;
    padding-left: 15px;
    filter: drop-shadow(0px 1px 5px rgb(212, 212, 212));
    transform: translateZ(0); // Enable GPU rendering on iOS devices
`;

// Page Componrnts
// ------------------------------------------------------------------------------
class Payment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    fetchAPI() {
        let slug = this.props.match.params;

        APIClient.GET("/api/article/" + slug.slug, data => {
            this.setState({
                article: data[0]
            });
        });
    }

    componentDidMount() {
        this.fetchAPI();
    }

    render() {
        const { t } = this.props;

        return (
            <>
                <TopNavigation />

                <Container>
                    <CardArea>
                        <Card>
                            <Front>
                                <StripBottom />
                                <Logo
                                    width="40"
                                    height="40"
                                    viewbox="0 0 17.5 16.2"
                                >
                                    <path
                                        d="M3.2 0l5.4 5.6L14.3 0l3.2 3v9L13 16.2V7.8l-4.4 4.1L4.5 8v8.2L0 12V3l3.2-3z"
                                        fill="white"
                                    ></path>
                                </Logo>
                                <Investor>RG PORTAL</Investor>
                                <Chip>
                                    <div class="chip-line"></div>
                                    <div class="chip-line"></div>
                                    <div class="chip-line"></div>
                                    <div class="chip-line"></div>
                                    <div class="chip-main"></div>
                                </Chip>
                                <Wave
                                    viewBox="0 3.71 26.959 38.787"
                                    width="26.959"
                                    height="38.787"
                                    fill="white"
                                >
                                    <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
                                    <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
                                    <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
                                </Wave>
                                <CardNumber>
                                    <div class="section">1234</div>
                                    <div class="section">5678</div>
                                    <div class="section">0910</div>
                                    <div class="section">3245</div>
                                </CardNumber>
                                <End>
                                    <span class="end-text">exp. end:</span>
                                    <span class="end-date"> 11/22</span>
                                </End>
                                <CardHolder>SHOTA SHIMAZU</CardHolder>
                                <Master>
                                    <div class="circle master-red"></div>
                                    <div class="circle master-yellow"></div>
                                </Master>
                            </Front>
                        </Card>

                        <Card>
                            <Back>
                                <div class="strip-black"></div>
                                <div class="ccv">
                                    <label>ccv</label>
                                    <div>123</div>
                                </div>
                                <div class="terms">
                                    <p>
                                        このカードはイメージです.実際とデザインや記載事項が異なることがあります.
                                    </p>
                                    <p>
                                        裏面に署名のないカードはご使用になれません.サインをしてからご使用ください.
                                    </p>
                                </div>
                            </Back>
                        </Card>
                    </CardArea>

                    <InputArea>
                        <div>
                            <label for="name">決済額</label>
                            <h1 style={{ fontSize: "7rem", marginTop: "0" }}>
                                ¥1000
                            </h1>
                        </div>
                        <PurchaseItems>
                            <ItemCard>
                                <h1>Lesson Ticket - ¥500</h1>
                                <p>1 day lesson ticket</p>
                            </ItemCard>
                            <ItemCard>
                                <h1>Lesson Ticket - ¥300</h1>
                                <p>1 day lesson ticket</p>
                            </ItemCard>
                            <ItemCard>
                                <h1>Lesson Ticket - ¥200</h1>
                                <p>1 day lesson ticket</p>
                            </ItemCard>
                        </PurchaseItems>
                    </InputArea>
                </Container>
            </>
        );
    }
}

export default withTranslation()(Payment);
