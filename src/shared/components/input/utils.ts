import { getEnvs } from "src/shared/utils";

export const ShowPasswordGrayIcon = () =>
  `${getEnvs().SOURCE_DOMAIN}/images/icons/show-password-gray.svg`;
export const HidePasswordGrayIcon = () =>
  `${getEnvs().SOURCE_DOMAIN}/images/icons/hide-password-gray.svg`;
