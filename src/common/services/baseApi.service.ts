import Http from "@/common/services/http.service";

class BaseApiService {
  protected httpClient: Http;

  constructor() {
    this.httpClient = new Http({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }
}

export default BaseApiService;
