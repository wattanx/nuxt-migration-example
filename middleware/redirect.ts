import type { Middleware } from '@nuxt/types';

export default <Middleware>(({ redirect, route }) => {
  console.log('route.path', route.path);
  return redirect('/');
});
