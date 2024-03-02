const baseUrl = "http://localhost:6030";
export const postApi = async (url: string, data: object) => {
  return await fetch(baseUrl + url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: token as string,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
export const getApi = async (url: string) => {
  return await fetch(baseUrl + url, {}).then((res) => res.json());
};
// interface IToken {
//   exp: number;
//   iat: number;
//   id: string;
// }
// export const checkTokenExp = async (token: string) => {
//   const decoded: IToken = jwtDecode(token);
//   if (decoded.exp >= Date.now() / 1000) return;
//   const res = await fetch("/api/rf-token").then((res) => res.json());
//   return res.data.access_token;
// };
