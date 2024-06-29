"use client"
import React from "react";
import Countdown from 'react-countdown';
const CustomCountDown = () => {
  return (<span className="font-bold text-yellow-300 text-xl xl:text-5xl 5xl:text-7xl" ><Countdown  date={Date.now() + 1721779200 }
  intervalDelay={0}
  precision={3}/></span>)
};

export default CustomCountDown;