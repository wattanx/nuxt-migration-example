<script setup lang="ts">
import { ref, useLazyAsyncData, useRoute, useNuxtApp, useHead } from '#imports';
import { getIssue } from '~/composables/github';
import { useTargetRepository } from '~/composables/use-target-repository';

const { $client, $store: store } = useNuxtApp();

const route = useRoute();

const repo = useTargetRepository();

const { data, pending } = useLazyAsyncData('issues_id', async () => {
  const res = await getIssue($client, {
    issueNumber: route.params.id,
    repo,
  });

  store.dispatch('issues/history/setIssue', {
    title: res.title,
    issueNumber: res.issueNumber,
  });

  return res;
});

const title = computed(() => data.value?.title);
const body = computed(() => data.value?.body);
const issueNumber = computed(() => data.value?.issueNumber ?? 0);

useHead(() => ({
  title: `#${issueNumber.value}`,
}));
</script>
<template>
  <div v-if="!pending" class="max-w-[1280px] m-auto p-5">
    <div class="border-b-[1px] border-b-[#e2e2e2]">
      <div class="flex flex-row items-center">
        <h2>
          {{ title }}
          <span class="ml-2 font-normal text-[#b9b9b9]">
            #{{ issueNumber }}
          </span>
        </h2>
      </div>
    </div>
    <div class="mt-3 rounded-md border-[1px] border-solid border-[#e2e2e2] p-2">
      <div class="border-b-solid border-b-[1px] border-b-[#e2e2e2] p-1"></div>
      <!-- eslint-disable -->
      <div class="markdown-body mt-3" v-html="body"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IssueDetailPage',
};
</script>
