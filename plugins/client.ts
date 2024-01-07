import { defineNuxtPlugin } from '#app';
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import type { IHttpClient } from '~/types/IHttpClient';

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
