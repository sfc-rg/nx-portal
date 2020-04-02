import styled from "styled-components";

export const AuthCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: solid 2px #dedede;
  border-radius: 15px;
  width: 45%;
  min-height: 500px;
  padding: 15px;
  padding-top: 0;
  margin-top: 90px;

  @media screen and (max-width: 480px) {
    width: 100%;
    min-height: 400px;
    border: none;
    margin-top: 30px;
  }
`;

export const AuthCardHeadings = styled.div`
  h1,
  p {
    font-weight: bold;
    text-align: center;
  }

  h1 {
    font-size: 2.7rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #fc033d;
`;

export const Input = styled.input`
  appearance: none;
  background-color: transparent;
  background-image: none;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 0;
  color: inherit;
  font-family: inherit;
  font-size: 1em;
  font-weight: bold;
  padding: 0.4em 0.8em;
  width: 60%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: #e6e6e6;
  margin-top: 10px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.32);
    box-shadow: none;
    outline: none;
    border: solid 3px #3b79ff;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const ScrollableDoc = styled.div`
  height: 200px;
  overflow-y: scroll;
  background: #ededed;
  border-radius: 10px;
  padding: 4px;

  @media screen and (max-width: 480px) {
    height: 300px;
  }

  @media (prefers-color-scheme: dark) {
    background: #2b2b2b;
  }
`;
