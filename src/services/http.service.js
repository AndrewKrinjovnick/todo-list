import { BASE_URL } from "../config/api";
import { AxiosClient } from "./axios.service";

export class HttpClient {
  constructor(Client, baseUrl, headers) {
    this.instance = new Client(baseUrl, headers);
  }

  async get(url, options) {
    return await this.instance.get(url, options);
  }

  async post(url, body, options) {
    return await this.instance.post(url, body, options);
  }

  async delete(url, options) {
    return await this.instance.delete(url, options);
  }

  async patch(url, body, options) {
    return await this.instance.patch(url, body, options);
  }
}

export const http = new HttpClient(AxiosClient, BASE_URL);
