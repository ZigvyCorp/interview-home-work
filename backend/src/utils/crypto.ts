import CryptoJS from "crypto-js";

export function hashString(message: string) {
  return CryptoJS.SHA256(message).toString();
}
