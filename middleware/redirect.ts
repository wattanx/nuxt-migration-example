import { defineNuxtMiddleware } from '@nuxtjs/composition-api';

export default defineNuxtMiddleware(({ redirect, route }) => {
  console.log('route.path', route.path);
  return redirect('/');
});
