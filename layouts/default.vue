<script setup lang="ts">
import { useHead } from '#imports';
import SiteHeader from '~/components/SiteHeader.vue';

useHead({
  titleTemplate(title) {
    return `${title} - Nuxt Bridge Migration Example`;
  },
});
</script>
<template>
  <div>
    <SiteHeader />
    <slot />
  </div>
</template>
