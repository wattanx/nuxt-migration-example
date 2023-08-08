<template>
  <Flex
    class="border-b-[1px] last:rounded-lg border-t-[#e2e2e2] first:border-t-transparent"
  >
    <div v-show="state === 'open'" class="pt-3 pl-3">
      <OpenStatus />
    </div>
    <div v-show="state === 'closed'" class="pt-3 pl-3">
      <ClosedStatus />
    </div>
    <div class="p-2">
      <NuxtLink :to="`/issues/${issueNumber}`">
        <a>
          <p>{{ title }}</p>
        </a>
      </NuxtLink>
      <p class="text-sm">#{{ issueNumber }}</p>
    </div>
  </Flex>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Flex from '~/components/Flex.vue';
import ClosedStatus from '~/components/ClosedStatus.vue';
import OpenStatus from '~/components/OpenStatus.vue';

export default defineComponent({
  components: {
    Flex,
    ClosedStatus,
    OpenStatus,
  },
  props: {
    state: {
      type: String,
      default: 'open',
    },
    title: {
      type: String,
      required: true,
    },
    issueNumber: {
      type: Number,
      required: true,
    },
  },
});
</script>
