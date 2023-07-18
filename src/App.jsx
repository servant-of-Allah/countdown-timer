import React, { useState, useEffect } from "react";
import Timer from "./components/timer";
import SocialLinks from "./components/SocialLinks";
import { calculateTime } from "./calculateTime";

const totalTimeInSeconds = ((8 * 24 + 23) * 60 + 55) * 60 + 41;

function App() {
  const [remainingTime, setRemainingTime] = useState(totalTimeInSeconds);

  const { days, hours, minutes, seconds } = calculateTime(remainingTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="font-redhat main min-h-screen overflow-x-hidden flex flex-col justify-between items-center p-12">
      <section className="w-full flex flex-col gap-8 items-center justify-center mt-16">
        <div>
          <h1 className="text-white text-[1rem] md:text-[1.5rem] tracking-[7px] text-center">
            WE'RE LAUNCHING SOON
          </h1>
        </div>

        <div className="w-full flex gap-4 md:gap-8 items-center justify-center mt-12 md:mt-16">
          <Timer time={days} name="DAYS" />
          <Timer time={hours} name="HOURS" />
          <Timer time={minutes} name="MINUTES" />
          <Timer time={seconds} name="SECONDS" />
        </div>
      </section>

      <SocialLinks />
    </div>
  );
}

export default App;
