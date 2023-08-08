import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export type RequestConfig = AxiosRequestConfig;

export type Response<TResponse> = AxiosResponse<TResponse>;

export interface IHttpClient {
  get: <TResponse>(
    url: string,
    config?: RequestConfig
  ) => Promise<Response<TResponse>>;
  post: <TRequest, TResponse>(
    url: string,
    data: TRequest
  ) => Promise<Response<TResponse>>;
}
