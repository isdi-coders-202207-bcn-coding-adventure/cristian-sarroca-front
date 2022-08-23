import StyledCounter from "./StyledCounter";
import { useEffect, useState } from "react";
import limitDate from "../../data/limitDate";

const Counter = () => {
  const initialState = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const [timeLeft, setTimeLeft] = useState(initialState);

  const calculateTimeLeft = () => {
    const difference = +new Date(limitDate) - +new Date();
    const timeCalculated = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    setTimeLeft(timeCalculated);
  };

  useEffect(() => {
    setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
  });

  return (
    <StyledCounter>
      <li className="counter-input">
        <div className="counter-input__digit">{timeLeft.days}</div>
        <div className="counter-input__text">days</div>
      </li>
      <li className="counter-input">
        <div className="counter-input__digit">{timeLeft.hours}</div>
        <div className="counter-input__text">hours</div>
      </li>
      <li className="counter-input">
        <div className="counter-input__digit">{timeLeft.minutes}</div>
        <div className="counter-input__text">minutes</div>
      </li>
      <li className="counter-input">
        <div className="counter-input__digit">{timeLeft.seconds}</div>
        <div className="counter-input__text">seconds</div>
      </li>
    </StyledCounter>
  );
};
export default Counter;
