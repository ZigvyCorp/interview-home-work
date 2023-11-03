import { createContext, useContext } from "react";

// Context should only hold user
// Initial state for the context should be undefined because we still not have access to User at this point
export const IsSearchContext = createContext<
  React.MutableRefObject<boolean> | undefined
>(undefined);

// We handle the problem if the Provider is undefined (not wrapped inside Provider or value mistakes)
// by throwing out the Error
export const useIsSearchContext = () => {
  const isSearch = useContext(IsSearchContext);

  if (isSearch === undefined) {
    throw new Error("IsSearch is undefined");
  }

  return isSearch;
};
