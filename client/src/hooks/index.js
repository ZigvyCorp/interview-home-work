import { useState, useEffect, useRef } from "react";

import { getDataFromSocket } from "../utils";
import { event_drone } from "../constant/constants";

export function usePersistentState(init) {
  const [locations, setLocations] = useState(
    JSON.parse(localStorage.getItem("draw-app")) || init
  );

  useEffect(() => {
    localStorage.setItem("draw-app", JSON.stringify(locations));
  });

  return [locations, setLocations];
}

export function usePersistentCanvas() {
  const [locations, setLocations] = usePersistentState([]);
  const [drone, setDrone] = useState([{}]);
  const [message, setMessage] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("Effect 1");
    const socket = socketIOClient(endpoint);
    console.log("Connect IO ");
    const msg = getDataFromSocket(socket, event_drone);
    setMessage(msg);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    locations.forEach(location => draw(ctx, location));
    draw(ctx, drone);
    // draw(ctx);
  }, [locations]);

  useEffect(() => {
    console.log("Effect 2");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (drone.length === 0) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      locations.forEach(location => draw(ctx, location));
    } else if (drone[0].x) {
      drone.forEach(location => drawDrone(ctx, location));
    }

    // draw(ctx);
  }, [drone]);

  return [
    locations,
    setLocations,
    canvasRef,
    drone,
    setDrone,
    message,
    setMessage
  ];
}
