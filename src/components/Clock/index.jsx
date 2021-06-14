import React from "react";
import useClock from "../../hooks/useClock";
import "./Clock.scss";
// Clock.propTypes = {};

function Clock() {
  const {timeString} = useClock();

  return (
    <div className="better-clock">
      <p style={{fontSize: "42px"}} className="better-clock__time">
        {timeString}
      </p>
    </div>
  );
}

export default Clock;
