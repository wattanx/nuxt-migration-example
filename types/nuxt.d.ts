import { IHttpClient } from '~/types/IHttpClient';

declare module '#app' {
  interface NuxtApp {
    $client: IHttpClient;
    $store: any;
  }
}
