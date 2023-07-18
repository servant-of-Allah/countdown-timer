import React, { useState, useEffect } from "react";

const Timer = ({ time, name }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [displayTime, setDisplayTime] = useState(time);

  useEffect(() => {
    setShouldAnimate(true);

    setTimeout(() => {
      setShouldAnimate(false);
    }, 500);

    setTimeout(() => {
      setDisplayTime(time);
    }, 250);
  }, [time]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="relative bg-desatBlue text-red font-bold text-[2rem] md:text-[4.4rem] shadow inline-flex rounded-md flex-col">
        <span className="absolute text-center w-full h-full leading-normal py-3 ">
          {/* {time < 10 ? `0${time}` : time} */}
          {shouldAnimate && time}
        </span>
        <div
          className={`relative top py-3 px-4 md:w-[140px] h-[1.128em] md:h-[.92em] text-center overflow-hidden leading-normal bg-desatBlue rounded-t-md ${
            shouldAnimate ? "flip-top-anim" : ""
          }`}
        >
          {displayTime < 10 ? `0${displayTime}` : displayTime}
          <div className="absolute w-full h-full top-0 left-0 bg-[#0002] z-50 border-b-[1px] border-[#0002]"></div>
        </div>
        <div
          className={`relative bottom py-3 px-4 md:w-[140px] h-[1.128em] md:h-[.92em] text-center justify-center overflow-hidden leading-normal bg-desatBlue flex items-end rounded-b-md  ${
            shouldAnimate ? "flip-bottom" : ""
          }`}
        >
          {displayTime < 10 ? `0${displayTime}` : displayTime}
        </div>
      </div>
      <p className="text-grayishBlue hsl(237, 18%, 59%)] text-[12px] tracking-[3px] md:text-[13px] md:tracking-[5px] font-normal mt-3 ">
        {name}
      </p>
    </div>
  );
};

export default Timer;
