// import { serviceReducer, testReducer } from "@/stores/slice";

import { authReducer } from "@/modules/auth";

export const rootReducer = {
  auth: authReducer,
  //   service: serviceReducer,
};
