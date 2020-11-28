import React, { useEffect, useRef, useState } from "react";

const EventTimer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("December 1 2020 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <section className="timer-container">
      <section className="timer">
        <div className="text-left">
          <h5 className="custom-description">
            Advancing knowledge and understanding about people management and
            development
          </h5>
          <span className="font-14 float-right font-italic">
            <b>Event Date:</b> 19/11/2020
          </span>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p>
              <small className="custom-color">Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small className="custom-color">Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small className="custom-color">Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p>
              <small className="custom-color">Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};
export default EventTimer;
