import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getTimeDiff } from "../../utils/timeDiff";
import "./style.css";


const paintColors = ["#72c7f5", "#1fc13a", "#df4401"];
const totalLanes = paintColors.length;
const canvasWaitoutFlushTime = 5 * 1000;
const leftMargin = 50;

const IOsavings = () => {
  const canvasRef = useRef(null);
  const [startTime, setStartTime] = useState(0);

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvasRef.current = ctx;
    canvasRef.current.canvas.width = window.innerWidth - 250
  }, []);

  useEffect(() => {
    flush();
  });

  const flush = () => {
    canvasRef.current.fillStyle = "#ffffff";
    canvasRef.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    canvasRef.current.font = "200 18px Roboto,Helvetica,Arial";
    canvasRef.current.fillStyle = paintColors[0];
    canvasRef.current.fillText("Regular", 0, 100);

    canvasRef.current.fillStyle = paintColors[1];
    canvasRef.current.fillText("Debounce", 0, 300);

    canvasRef.current.fillStyle = paintColors[2];
    canvasRef.current.fillText("Throttle", 0, 500);
  };

  const paint = (lane, time) => {
    if (time > canvasWaitoutFlushTime) {
      setStartTime(time + startTime);
      time = 0;
      flush();
    }

    setStartTime(new Date().getTime());

    const diff = new Date().getTime() - startTime;

    canvasRef.current.fillStyle = paintColors[lane];
    console.log(time);
    const x =
      ((canvasRef.current.canvas.width - leftMargin) / canvasWaitoutFlushTime) *
      diff +
      leftMargin;
    const y = (canvasRef.current.canvas.height / totalLanes) * lane;
    const height = canvasRef.current.canvas.height / totalLanes;
    const width = 1;
    // console.log(x);
    canvasRef.current.fillRect(x, y, width, height);
  };

  const debounceHandler = () => {
    paint(1, getTimeDiff());
  };

  const thorttleHandler = () => {
    paint(2, getTimeDiff());
  };

  const regularHandler = () => {
    paint(0, getTimeDiff());
  };

  const handleMouseMove = (e) => {
    regularHandler();
    debounceHandler();
    thorttleHandler();
    console.log(e);
  };

  return (
    <>
        <div className="io-saving">
          <div className="io-mouse-pad" onMouseMove={handleMouseMove}>
            Move your mouse over here
          </div>
          <canvas width="600" height="600" id="canvas"></canvas>
        </div>
    </>
  );
};

export default IOsavings;
