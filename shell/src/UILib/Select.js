import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  padding-right: 1em;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  appearance: none;
  padding: 0.4em 0.8em;
  border-radius: 5px;

  border: 1px solid rgba(0, 0, 0, 0.16);
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

  &:hover {
    filter: drop-shadow(0px 1px 10px rgb(79, 79, 79));
  }
`;
