import styled from "styled-components";
import "@fontsource/oxanium";

const StyledCounter = styled.ul`
  height: 80vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: "oxanium", cursive;
  gap: 25px;

  .counter-input {
    display: flex;
    flex-direction: column;
    &__digit {
      background-color: #ffc700;
      border-radius: 20%;
      font-size: 3em;
      width: 150px;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__text {
      color: white;
      font-size: 2em;
      align-self: center;
    }
  }
`;

export default StyledCounter;
