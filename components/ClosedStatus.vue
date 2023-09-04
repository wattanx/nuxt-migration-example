<template>
  <div
    class="flex h-[15px] w-[15px] items-center justify-center rounded border-[1px] border-[#cf222e] bg-white"
  >
    <CheckIcon class="h-2 w-2 text-[#cf222e]"></CheckIcon>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CheckIcon from '~/components//icons/CheckIcon.vue';

export default defineComponent({
  components: { CheckIcon },
  setup() {},
});
</script>
