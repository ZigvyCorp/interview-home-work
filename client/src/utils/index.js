import { HOOK_SVG, endpoint } from "../constant/constants";
import socketIOClient from "socket.io-client";

const HOOK_PATH = new Path2D(HOOK_SVG);
const circle = new Path2D();
const SCALE = 0.2;
const OFFSET = 90;

export function draw(ctx, location) {
  ctx.fillStyle = "deepskyblue";
  ctx.shadowColor = "dodgerblue";
  ctx.shadowBlur = 20;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.y / SCALE - OFFSET, location.x / SCALE - OFFSET); // ve len map, can dao nguoc lai
  // ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  circle.arc(100, 35, 25, 0, 2 * Math.PI);
  ctx.fill(circle);
  ctx.restore();
}

function drawDrone(ctx, location) {
  // ctx context, DOM cua SVG
  // location : Vi tri x, y
  ctx.fillStyle = "red"; // ve mau xanh
  ctx.shadowColor = "dodgerblue"; // ve shadow xanh
  ctx.shadowBlur = 20; // shadow mờ
  ctx.save();
  ctx.scale(SCALE, SCALE); // vẽ kích thước
  ctx.translate(location.y / SCALE - OFFSET, location.x / SCALE - OFFSET); // ve len map, can dao nguoc lai
  circle.arc(100, 35, 25, 0, 2 * Math.PI);
  ctx.fill(circle); // ve SVG
  ctx.restore(); // clean mới
}

export const sendDataToSocket = (socket, key, message) => {
  socket.emit(key, message); // change 'red' to this.state.color
};

export const getDataFromSocket = (socket, key) => {
  socket.on(key, msg => {
    console.log(msg);
    return msg
  }); // change 'red' to this.state.color
};
