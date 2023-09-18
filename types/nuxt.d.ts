import { IHttpClient } from '~/types/IHttpClient';

declare module '@nuxt/types' {
  interface Context {
    $client: IHttpClient;
  }
}

declare module '@nuxt/bridge-schema' {
  interface Nuxt2Context {
    $client: IHttpClient;
  }
}
