import { defineNuxtPlugin } from '@nuxtjs/composition-api';
import axios, { AxiosRequestConfig } from 'axios';
import { IHttpClient } from '~/types/IHttpClient';

export default defineNuxtPlugin((_, inject) => {
  const client: IHttpClient = {
    get: <TResponse>(url: string, config?: AxiosRequestConfig) =>
      axios.get<TResponse>(url, config),
    post: <TRequest, TResponse>(url: string, data: TRequest) =>
      axios.post<TResponse>(url, data),
  };

  inject('client', client);
});