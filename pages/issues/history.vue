<script setup lang="ts">
import { useNuxtApp, computed, useHead } from '#imports';
import type { IssueType } from '~/types';

const { $store: store } = useNuxtApp();

useHead({
  title: 'History',
});

const issues = computed<Pick<IssueType, 'title' | 'issueNumber'>[]>(
  () => store.getters['issues/history/getIssues']
);
</script>

<template>
  <div>
    <h2 class="p-4 text-lg">History</h2>
    <ul class="space-y-4 p-4">
      <li
        class="border-b-2 border-gray-200"
        v-for="(issue, index) in issues"
        :key="`${issue.issueNumber}_${index}`"
      >
        #{{ issue.issueNumber }}: {{ issue.title }}
      </li>
    </ul>
  </div>
</template>
