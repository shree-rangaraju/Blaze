import { useEffect, useState } from "react";

export default function CountDownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-4-20") - +new Date();
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
    <span className="fw-light fs-3" id="Timer">
      <span className="fw-bold fs-1" id="day">
        &nbsp;{timeLeft.days + " "}
      </span>
      &nbsp;Days :&nbsp;
      <span className="fw-bold fs-1" id="hour">
        {" " + timeLeft.hours + " "}
      </span>
      &nbsp;Hours
      <span id="split">{" : "}</span>
      <br className="timeBreak" />
      &nbsp;
      <span className="fw-bold fs-1" id="minute">
        {" " + timeLeft.minutes + " "}
      </span>
      &nbsp;Minutes :&nbsp;
      <span className="fw-bold fs-1" id="second">
        {" " + timeLeft.seconds + " "}
      </span>
      &nbsp;Seconds
    </span>
  );
}
