import * as dotenv from "dotenv";
dotenv.config();

const development = process?.env.NODE_ENV !== "production";

// console.log("precess", process.env);/

// export const ENV_CONFIG = {
//   apiURL: process.env.API_URL_DEVELOPMENT!,
//   scopes: process.env.SCOPES,
//   grant_type: process.env.GRANT_TYPE,
//   client_id: process.env.CLIENT_ID,
//   client_secret: process.env.CLIENT_SECRET,
//   Retailer: process.env.RETAILER,
// };

export const CLOUDINARY_CONFIG = {
  name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET,
};

// export const EMAIL_CONFIG = {
//   public_id: process.env.EMAIL_SERVICE_PUBLIC_KEY,
//   service_id: process.env.EMAIL_SERVICE_ID,
//   template_id: process.env.EMAIL_TEMPLATE_ID,
// };
