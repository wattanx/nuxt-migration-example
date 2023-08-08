<template>
  <Flex
    class="h-[15px] w-[15px] items-center justify-center rounded-full border-[1px] border-[#1A7F37] bg-white"
  >
    <div class="h-[5px] w-[5px] rounded-full bg-[#1A7F37]"></div>
  </Flex>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Flex from '~/components/Flex.vue';

export default defineComponent({
  components: { Flex },
  setup() {},
});
</script>
