<script setup lang="ts">
import {
  useRoute,
  useFetch,
  ref,
  watch,
  computed,
  useContext,
} from '@nuxtjs/composition-api';
import { getIssues } from '~/composables/github';
import ContentWrapper from '~/components/ContentWrapper.vue';
import Stack from '~/components/Stack.vue';
import IssuesListCell from '~/components/IssuesListCell.vue';
import Flex from '~/components/Flex.vue';
import Pager from '~/components/Pager/Pager.vue';
import type { IssueType } from '~/types/IssueType';

const route = useRoute();

const { $client } = useContext();

const pageQueryNumber = computed<number>(() => {
  return Number(route.value.query.page) || 1;
});

const issues = ref<IssueType[]>([]);
const current = ref(0);
const last = ref(0);
const next = ref(0);
const prev = ref(0);

const { fetch: refresh } = useFetch(async () => {
  const pageNumber = route.value.query.page ?? '1';
  const perPage = route.value.query.per_page ?? '10';
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
  <ContentWrapper>
    <div
      class="rounded-lg border-x-[1px] border-t-[1px] border-b-none border-[#e2e2e2] min-h-[540px]"
    >
      <Stack class="flex-col space-y-0" v-if="issues.length !== 0">
        <IssuesListCell
          v-for="issue in issues"
          :key="issue.issueNumber"
          :issueNumber="issue.issueNumber"
          :title="issue.title"
        />
      </Stack>
    </div>
    <Flex class="mt-3 items-center justify-center">
      <Pager
        :current="current"
        :first="1"
        :last="last"
        :next="next"
        :prev="prev"
      />
    </Flex>
  </ContentWrapper>
</template>
