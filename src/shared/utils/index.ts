export const getAccessToken = () => localStorage.getItem("access_token") || "";

export const getEnvs = () => ({
  API_DOMAIN: `http://localhost:8080`,
  SOURCE_DOMAIN: `http://localhost:3000`
});

export const formatTimeByHours = (
  time: number,
  format = {
    hh: ":",
    mm: ""
  }
) => {
  if (!time || isNaN(time) || typeof time !== "number") {
    return `00${format.hh}00${format.mm}`;
  }
  const today = new Date(time * 1000);
  const hh = String(today.getHours()).padStart(2, "0");
  const mm = String(today.getMinutes()).padStart(2, "0"); //January is 0!
  return `${hh}${format.hh}${mm}${format.mm}`;
};

export const formatTimeByDate = (
  time: number,
  format = {
    dd: "/",
    MM: "/"
  }
) => {
  if (!time || isNaN(time) || typeof time !== "number") {
    return `00${format.dd}00${format.MM}00`;
  }
  const today = new Date(time);
  const dd = String(today.getDate()).padStart(2, "0");
  const MM = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const YYYY = today.getFullYear();
  return `${dd}${format.dd}${MM}${format.MM}${YYYY}`;
};

export const formatCurrency = (cur: number) => {
  if (!cur || isNaN(cur) || typeof cur !== "number") {
    return `0 ₫`;
  }
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(cur);
};

export const genValFromArr = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];
