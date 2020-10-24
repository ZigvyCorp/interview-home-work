import { SET_EXPENDED_CMT } from '../constaints';

export const setExpendedCmt = ({ id, status }) => {
  return { type: SET_EXPENDED_CMT, payload: { id, status } };
};
