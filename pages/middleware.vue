<template>
  <div>not render</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  middleware: ['redirect'],
});
</script>
