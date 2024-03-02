import { Socket } from "socket.io-client";
const SOCKET = "SOCKET";
interface ISocketType {
  type: typeof SOCKET;
  payload: Socket;
}
const socketReducer = (state: any = null, action: ISocketType): any => {
  switch (action.type) {
    case SOCKET:
      return action.payload;
    default:
      return state;
  }
};
export default socketReducer;
