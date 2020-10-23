import { FilterRequest } from "../requests/filter-request";

export class FilterResponse<T = any> {
  data: T[] = [];
  metadata = {
    ...new FilterRequest(),
    total: 0,
  };
}
