import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days =
    Math.floor(countDown / (1000 * 60 * 60 * 24)) < 10
      ? `0${Math.floor(countDown / (1000 * 60 * 60 * 24))}`
      : Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours =
    Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10
      ? `0${Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`
      : Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes =
    Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)) < 10
      ? `0${Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))}`
      : Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds =
    Math.floor((countDown % (1000 * 60)) / 1000) < 10
      ? `0${Math.floor((countDown % (1000 * 60)) / 1000)}`
      : Math.floor((countDown % (1000 * 60)) / 1000);

  if (days.includes("-")) {
    return ["00", "00", "00", "00"];
  }

  return [days, hours, minutes, seconds];
};

export { useCountdown };
