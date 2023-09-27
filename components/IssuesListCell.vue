<template>
  <div
    class="flex border-b-[1px] last:rounded-lg border-t-[#e2e2e2] first:border-t-transparent"
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
  </div>
</template>
<script lang="ts">
import { defineComponent } from '#imports';
import ClosedStatus from '~/components/ClosedStatus.vue';
import OpenStatus from '~/components/OpenStatus.vue';

export default defineComponent({
  components: {
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
