import { render, screen } from "@testing-library/react";
import React from "react";
import Counter, { ICounter } from "./Counter";

describe("Given a Counter component", () => {
  describe("When it is intantiated", () => {
    test("then it should show a counters with 10 days, 22 hours, 15 minutes and 30 seconds", () => {
      const currentTime: ICounter = {
        days: 10,
        hours: 22,
        minutes: 15,
        seconds: 30,
      };

      const setUseState = jest.fn();
      const useStateMock: any = () => [currentTime, setUseState];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      render(<Counter />);

      const days = screen.getByText("10");
      const hours = screen.getByText("22");
      const minutes = screen.getByText("15");
      const seconds = screen.getByText("30");

      expect(days).toBeInTheDocument();
      expect(hours).toBeInTheDocument();
      expect(minutes).toBeInTheDocument();
      expect(seconds).toBeInTheDocument();
    });

    test("setTimout have been called", () => {
      const currentTime: ICounter = {
        days: 10,
        hours: 22,
        minutes: 15,
        seconds: 30,
      };

      const setUseState = jest.fn();
      const useStateMock: any = () => [currentTime, setUseState];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      jest.spyOn(global, "setTimeout");

      render(<Counter />);

      expect(setTimeout).toHaveBeenCalledTimes(1);
    });
    test("setUseState have been called", () => {
      jest.useFakeTimers();
      const currentTime: ICounter = {
        days: 10,
        hours: 22,
        minutes: 15,
        seconds: 30,
      };

      const setUseState = jest.fn();
      const useStateMock: any = () => [currentTime, setUseState];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      render(<Counter />);
      jest.advanceTimersByTime(2000);

      expect(setUseState).toHaveBeenCalled();
    });
  });
});
