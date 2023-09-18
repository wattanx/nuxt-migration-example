<template>
  <div>not render</div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#imports';

export default defineNuxtComponent({
  middleware: ['redirect'],
});
</script>
