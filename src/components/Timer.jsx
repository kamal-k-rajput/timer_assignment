import { useState, useEffect } from "react";
export const Timer = ({ timer }) => {
  const [starttime, setstarttime] = useState(timer.starttimer);
  const endtime = timer.endtimer;
  const [state, setstate] = useState(false);
  useEffect(() => {
    let id = setTimeout(() => {
      setstarttime(starttime + 1);
    }, 1000);
    if (starttime === endtime) {
      clearInterval(id);
      setstate(true);
    }

    setstarttime(starttime);
  }, [starttime, endtime]);
  //   useEffect(() => {
  //     console.log("calling useeffect endtimer");
  //     setendtime(endtime);
  //   }, [endtime]);
  return (
    <div>
      <div>Start Timer:{starttime}</div>
      <div>End Timer:{endtime}</div>
      <h2>{state ? "Time Up" : "time is running"}</h2>
    </div>
  );
};
