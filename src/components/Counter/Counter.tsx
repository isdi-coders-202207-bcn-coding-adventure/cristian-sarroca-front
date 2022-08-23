import StyledCounter from "./StyledCounter";

const Counter = () => {
  return (
    <StyledCounter>
      <li className="counter-input">
        <div className="counter-input__digit">02</div>
        <div className="counter-input__text">days</div>
      </li>
      <li className="counter-input">
        <div className="counter-input__digit">20</div>
        <div className="counter-input__text">hours</div>
      </li>
      <li className="counter-input">
        <div className="counter-input__digit">34</div>
        <div className="counter-input__text">minutes</div>
      </li>
      <li className="counter-input">
        <div className="counter-input__digit">09</div>
        <div className="counter-input__text">seconds</div>
      </li>
    </StyledCounter>
  );
};
export default Counter;
