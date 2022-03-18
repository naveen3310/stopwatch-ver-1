import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

function Times(props) {
  const formatTime = () => {
    const getMiliSeconds = `0${props.seconds % 99}`.slice(-2);
    const seconds = `${Math.floor(props.seconds / 100)}`;
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}.${getMiliSeconds}`;
  };
  return (
    <div>
      <h1 className="sec">{formatTime()}</h1>
    </div>
  );
}

export default Times;
