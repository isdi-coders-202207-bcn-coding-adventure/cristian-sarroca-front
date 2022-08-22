import styled from "styled-components";
import "@fontsource/oxanium";

const StyledCounter = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "oxanium", cursive;
  gap: 5px;

  .counter-input {
    display: flex;
    flex-direction: column;
  }

  .counter-input__digit {
    background-color: #ffc700;
    border-radius: 20%;
    font-size: 3em;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .counter-input__text {
    color: white;
    font-size: 2em;
    align-self: center;
  }
`;

export default StyledCounter;
