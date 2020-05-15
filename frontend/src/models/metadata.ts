import { FilterRequest } from "./requests/filter-request";

export interface Metadata extends FilterRequest {
  total: number;
}
