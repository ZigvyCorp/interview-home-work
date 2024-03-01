import moment from "moment";

export const formatDate = (val: any) => {
  return moment(val).format("LL");
};
