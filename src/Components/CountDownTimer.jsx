import { useEffect, useState } from "react";

export default function CountDownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-4-19") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <span className="fw-light fs-3">
      <span className="fw-light fs-1" id="day">
        {timeLeft.days + " "}
      </span>
      Days :
      <span className="fw-light fs-1" id="hour">
        {" " + timeLeft.hours + " "}
      </span>
      Hours :
      <span className="fw-light fs-1" id="minute">
        {" " + timeLeft.minutes + " "}
      </span>
      Minutes :
      <span className="fw-light fs-1" id="second">
        {" " + timeLeft.seconds + " "}
      </span>
      Seconds
    </span>
  );
}
