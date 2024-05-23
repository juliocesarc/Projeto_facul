import styled from "styled-components";

export default styled.input`
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px; //altura
  border-radius: 4px;
  border: 2px solid #fff;
  outline: none;
  padding: 0 16px; //0 top bottom e 16 left right
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  margin-bottom: 20px;

  &:focus {
    border: 2px solid;
    border-color: #8234e9;
  }
`;
