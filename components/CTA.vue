<template>
  <Container class="w-full max-w-[48rem] py-3">
    <div class="flex mt-10 justify-center space-x-4">
      <NuxtLink
        class="inline-flex h-16 min-w-[4rem] items-center justify-center rounded-md bg-green-200 px-10 text-base font-bold"
        to="/issues"
        >Get Started <ArrowForward class="ml-1"
      /></NuxtLink>

      <a
        class="inline-flex h-16 min-w-[4rem] items-center justify-center rounded-md bg-gray-200 px-10 text-base font-bold"
        href="https://github.com/wattanx/nuxt-migration-example"
        target="__blank"
      >
        GitHub<GitHubIcon class="ml-1" />
      </a>
    </div>
  </Container>
</template>
<script lang="ts">
import { defineComponent } from '#imports';
import Container from '~/components/Container.vue';
import ArrowForward from '~/components//icons/ArrowForward.vue';
import GitHubIcon from '~/components//icons/GitHubIcon.vue';

export default defineComponent({
  components: { Container, ArrowForward, GitHubIcon },
  setup() {},
});
</script>
