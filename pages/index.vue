<template>
  <Container height="100vh">
    <section class="pt-24 pb-20">
      <div class="text-center">
        <Hero />
      </div>
    </section>
    <CTA />
  </Container>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#imports';
import Container from '~/components/Container.vue';
import Hero from '~/components/Hero.vue';
import CTA from '~/components/CTA.vue';

export default defineNuxtComponent({
  components: { Container, Hero, CTA },
});
</script>
