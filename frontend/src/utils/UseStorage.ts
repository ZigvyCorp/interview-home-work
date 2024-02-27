import Cookies from "universal-cookie";

export const KEY = "accessToken";

const addUserLocalStorage = (token: any, userInfo: any) => {
  try {
    const oneDayInMilliseconds = new Date().getTime() + 24 * 60 * 60 * 1000;
    const cookies = new Cookies();

    // Lưu token vào cookies với thời gian expire
    cookies.set(
      KEY,
      { token: "Bearer " + token },
      { path: "/", maxAge: oneDayInMilliseconds }
    );

    // Lưu userLogin vào localStorage
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ ...userInfo, expires: oneDayInMilliseconds })
    );
  } catch (error) {
    console.error("Error adding user information:", error);
  }
};

const addUserToCookies = (token: any, dateExpires: any) => {
  const cookies = new Cookies();
  cookies.set(
    KEY,
    { token: "Bearer " + token },
    { expires: dateExpires, path: "/" }
  );
};

const clearUserFromCookies = () => {
  const cookies = new Cookies();
  cookies.remove(KEY, { path: "/" });
};
const getUserLogin = () => {
  const cookies = new Cookies();

  const userCookies = cookies.get(KEY);
  if (userCookies) {
    return userCookies;
  }
  return null;
};

export {
  addUserLocalStorage,
  addUserToCookies,
  clearUserFromCookies,
  getUserLogin,
};
