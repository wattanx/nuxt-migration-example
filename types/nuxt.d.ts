import { IHttpClient } from '~/types/IHttpClient';

declare module '@nuxt/types' {
  interface Context {
    $client: IHttpClient;
  }
}
