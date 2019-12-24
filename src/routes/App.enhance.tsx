import React from "react";
import { useDispatch } from "react-redux";
import { actionAuth } from "src/auth/auth.actions";
import { ACTION_FETCH } from "src/auth/auth.constant";

export const withAuth = (Comp: any) => (props: any) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const auth = !!localStorage.getItem("access_token");
    dispatch(actionAuth(auth));
  }, []);
  return <Comp {...props} />;
};

export const withProfile = (Comp: any) => (props: any) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: ACTION_FETCH
    });
  }, []);
  return <Comp {...props} />;
};
