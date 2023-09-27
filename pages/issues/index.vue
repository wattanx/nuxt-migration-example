<script setup lang="ts">
import {
  useRoute,
  useLazyAsyncData,
  ref,
  watch,
  computed,
  useNuxtApp,
} from '#imports';
import { getIssues } from '~/composables/github';
import IssuesListCell from '~/components/IssuesListCell.vue';
import Pager from '~/components/Pager/Pager.vue';
import type { IssueType } from '~/types/IssueType';

const route = useRoute();

const { $client } = useNuxtApp();

const pageQueryNumber = computed<number>(() => {
  return Number(route.query.page) || 1;
});

const issues = ref<IssueType[]>([]);
const current = ref(0);
const last = ref(0);
const next = ref(0);
const prev = ref(0);

const { refresh } = useLazyAsyncData('issues_list', async () => {
  const pageNumber = route.query.page ?? '1';
  const perPage = route.query.per_page ?? '10';
  const res = await getIssues($client, pageNumber as string, perPage as string);
  issues.value = res.issues;
  last.value = res.lastPage;
  current.value = res.currentPage;
  next.value = res.nextPage;
  prev.value = res.prevPage;
});

watch(pageQueryNumber, () => {
  refresh();
});
</script>
<template>
  <div class="max-w-[1280px] m-auto p-5">
    <NuxtLink to="/issues/history" class="pb-2 flex text-blue-500 underline"
      >Go to history</NuxtLink
    >
    <div
      class="rounded-lg border-x-[1px] border-t-[1px] border-b-none border-[#e2e2e2] min-h-[540px]"
    >
      <div class="flex flex-col space-y-0" v-if="issues.length !== 0">
        <IssuesListCell
          v-for="issue in issues"
          :key="issue.issueNumber"
          :issueNumber="issue.issueNumber"
          :title="issue.title"
        />
      </div>
    </div>
    <div class="flex mt-3 items-center justify-center">
      <Pager
        :current="current"
        :first="1"
        :last="last"
        :next="next"
        :prev="prev"
      />
    </div>
  </div>
</template>
