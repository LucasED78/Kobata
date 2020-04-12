import HttpMethods from "./HttpMethods";

interface IKobataHttp<T> {
  request(url: string, method: HttpMethods, data?: string, headers?: string): Promise<T>;
  get(url: string, headers?: string): Promise<T>;
  post(url: string, data?: string, headers?: string ): Promise<T>;
  put(url: string, data?: string, headers?: string ): Promise<T>;
  delete(url: string, headers?: string ): Promise<T>;
}

export default IKobataHttp;