import styled from "styled-components";

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
  height: 40px;
  border: none;
  background: #e6e6e6;
  margin-top: 10px;
  transition: 0.3s;
  border-radius: 5px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.32);
    box-shadow: none;
    outline: none;
    filter: drop-shadow(0px 1px 10px rgb(79, 79, 79));
    transform: translateZ(0); // Enable GPU rendering on iOS devices
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;
