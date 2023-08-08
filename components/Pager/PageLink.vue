<template>
  <NuxtLink :to="`/issues?page=${pageNumber}&per_page=10`">
    <button
      class="h-10 min-w-[2.5rem] bg-green-300"
      v-show="current === pageNumber"
      bg="vue.200"
    >
      {{ pageNumber }}
    </button>
    <button
      class="h-10 min-w-[2.5rem] bg-none"
      v-show="current !== pageNumber"
      bg="none"
    >
      {{ pageNumber }}
    </button>
  </NuxtLink>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      default: 1,
    },
  },
});
</script>
