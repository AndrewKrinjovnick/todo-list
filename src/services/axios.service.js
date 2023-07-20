import axios from "axios";

export class AxiosClient {
  constructor(baseURL, headers) {
    const newHeaders = headers ?? {};
    this.instance = axios.create({
      baseURL,
      headers: newHeaders,
    });
  }

  async get(url, options) {
    try {
      const { data } = await this.instance({
        method: "GET",
        url,
        ...options,
      });

      return data;
    } catch (err) {
      throw err.message;
    }
  }

  async post(url, body, options) {
    try {
      const { data } = await this.instance({
        method: "POST",
        url,
        data: body,
        ...options,
      });

      return data;
    } catch (err) {
      throw err.message;
    }
  }

  async delete(url, options) {
    try {
      const { data } = await this.instance({
        method: "DELETE",
        url,
        ...options,
      });

      return data;
    } catch (err) {
      throw err.message;
    }
  }

  async patch(url, body, options) {
    try {
      const { data } = await this.instance({
        method: "PATCH",
        url,
        data: body,
        ...options,
      });

      return data;
    } catch (err) {
      throw err.message;
    }
  }
}
