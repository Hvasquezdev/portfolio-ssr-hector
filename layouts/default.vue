<template>
  <div class="relative flex flex-col items-center justify-center">
    <the-navbar />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import { launchConfetti } from '@/plugins/confetti';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheNavbar,
    TheFooter
  },

  mounted() {
    launchConfetti();
  }
};
</script>
