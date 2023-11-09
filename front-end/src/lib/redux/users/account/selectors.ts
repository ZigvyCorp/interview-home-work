// Utilities
import cloneDeep from "lodash/cloneDeep";
import type { ReduxState } from 'lib/redux';

// Interface
import { Account } from "./interface.ts"

export const getAccount = (state: ReduxState): Account => {
  return cloneDeep(state.account.account);
}