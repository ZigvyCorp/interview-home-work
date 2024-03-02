import { useDispatch, useSelector } from "react-redux";
import { IComment, RootStore } from "../../utils/type.ts";
import { useEffect } from "react";

const SocketClient = () => {
  const { socketReducer } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!socketReducer) return;

    socketReducer.on("createComment", (data: IComment) => {
      dispatch({ type: "CREATE_COMMENT", payload: data });
    });

    return () => {
      socketReducer.off("createComment");
    };
  }, [socketReducer, dispatch]);

  // Reply Comment
  useEffect(() => {
    if (!socketReducer) return;

    socketReducer.on("replyComment", (data: IComment) => {
      dispatch({ type: "REPLY_COMMENT", payload: data });
    });

    return () => {
      socketReducer.off("replyComment");
    };
  }, [socketReducer, dispatch]);
  return <div></div>;
};

export default SocketClient;
