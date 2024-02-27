"use client";
import { Example } from "./example.types";
import HttpService from "@/common/services/http.service";

class ExampleApiService extends HttpService {
  constructor() {
    super({
      baseURL: "https://64c3cfbd67cfdca3b66051f9.mockapi.io/",
    });
  }
  getExamples() {
    return this.get<Example[]>("/product");
  }
  getExample(id: number) {
    return this.get<Example>(`/product/${id}`);
  }
  updateExample(example: Example) {
    return this.put<Example>(`/product/${example.id}`, example);
  }
}

const exampleApi = new ExampleApiService();

export default exampleApi;
