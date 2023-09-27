import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to) => {
  console.log('to.path', to.path);
  return navigateTo('/');
});
