import styled from "styled-components";

export default styled.button`
  width: 100%;
  max-width: 200px;
  height: 52px;
  border: none;
  background-color: #1e7bff;
  font-size: 16px;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: #fff;
    color: #1e7bff;
  }

  &:active {
    background-color: darkblue;
    color: #fff;
  }
`;
