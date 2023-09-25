import { defineNuxtPlugin } from '#app';
import axios, { AxiosRequestConfig } from 'axios';
import { IHttpClient } from '~/types/IHttpClient';

export default defineNuxtPlugin((nuxtApp) => {
  const client: IHttpClient = {
    get: <TResponse>(url: string, config?: AxiosRequestConfig) =>
      axios.get<TResponse>(url, config),
    post: <TRequest, TResponse>(url: string, data: TRequest) =>
      axios.post<TResponse>(url, data),
  };

  return {
    provide: {
      client,
    },
  };
});
