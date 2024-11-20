import { GLOBAL_PARAMS_NAME } from "./common";

export const VALIDATE_QUERYPARAMS = [GLOBAL_PARAMS_NAME.brands, GLOBAL_PARAMS_NAME.category];

export const CATALOUGE_FIELD = [
  {
    name: "name",
    require: true,
  },
  {
    name: "brands",
    require: true,
  },
  {
    name: "category",
    require: true,
  },
  {
    name: "download_url",
    require: true,
  },
  {
    name: "thumbnail",
    require: true,
  },
  {
    name: "detail_thumbnail",
    require: true,
  },
  {
    name: "description",
    require: false,
  },
  {
    name: "cloud_link",
    require: true,
  },
];
