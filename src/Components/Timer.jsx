import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const incHour = () => setHours(hours + 1);
  const decHour = () => {
    if (hours > 0) {
      setHours(hours - 1);
    }
  };

  const incMin = () => {
    if (minutes < 59) {
      setMinutes(minutes + 1);
    } else {
      setMinutes(0);
      incHour();
    }
  };

  const decMin = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    } else {
      if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
      }
    }
  };

  const incSec = () => {
    if (seconds < 59) {
      setSeconds(seconds + 1);
    } else {
      setSeconds(0);
      incMin();
    }
  };

  const decSec = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      decMin();
      setSeconds(59);
    }
  };

  const handlePlay = () => setIsPlaying(!isPlaying);

  const handleRemainingTime = (remainingTime) => {
    if (remainingTime <= 0) {
      return <div> Time's Up</div>;
    } else {
      let hours = Math.floor(remainingTime / 3600);
      let minutes = Math.floor((remainingTime % 3600) / 60);
      let seconds = Math.floor(remainingTime % 60);
      return (
        <div>
          {hours} : {minutes} : {seconds}
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <button onClick={incHour}>+1 Hour</button>
        <button onClick={decHour}>-1 Hour</button>
        <button onClick={incMin}>+1 Minutes</button>
        <button onClick={decMin}>-1 Minutes</button>
        <button onClick={incSec}>+1 Seconds</button>
        <button onClick={decSec}>-1 Seconds</button>
      </div>
      <div>
        <h2>
          {hours}H : {minutes}M : {seconds}S
        </h2>
        {isPlaying ? (
          <button onClick={handlePlay}>Pause</button>
        ) : (
          <button onClick={handlePlay}>Play</button>
        )}
      </div>
      <div>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={hours * 3600 + minutes * 60 + seconds}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            setIsPlaying(false);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
          }}
        >
          {({ remainingTime }) => handleRemainingTime(remainingTime)}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Timer;
