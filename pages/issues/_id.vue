<script setup lang="ts">
import {
  ref,
  useFetch,
  useRoute,
  computed,
  watch,
  useContext,
} from '@nuxtjs/composition-api';
import ContentWrapper from '~/components/ContentWrapper.vue';
import { getIssue } from '~/composables/github';
import { useTargetRepository } from '~/composables/use-target-repository';
import Stack from '~/components/Stack.vue';

const { $client, store } = useContext();

const title = ref<string>('');
const body = ref<string>('');
const issueNumber = ref<number>(0);
const route = useRoute();

const repo = useTargetRepository();

useFetch(async () => {
  const res = await getIssue($client, {
    issueNumber: route.value.params.id,
    repo,
  });
  title.value = res.title;
  body.value = res.body;
  issueNumber.value = res.issueNumber;

  store.dispatch('issues/history/setIssue', {
    title: res.title,
    issueNumber: res.issueNumber,
  });
});
</script>
<template>
  <ContentWrapper>
    <div class="border-b-[1px] border-b-[#e2e2e2]">
      <Stack class="flex-row items-center">
        <h2>
          {{ title }}
          <span class="ml-2 font-normal text-[#b9b9b9]">
            #{{ issueNumber }}
          </span>
        </h2>
      </Stack>
    </div>
    <div class="mt-3 rounded-md border-[1px] border-solid border-[#e2e2e2] p-2">
      <div class="border-b-solid border-b-[1px] border-b-[#e2e2e2] p-1"></div>
      <!-- eslint-disable -->
      <div class="markdown-body mt-3" v-html="body"></div>
    </div>
  </ContentWrapper>
</template>

<script lang="ts">
export default {
  name: 'IssueDetailPage',
};
</script>
