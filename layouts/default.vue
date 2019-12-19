<template>
  <div class="relative flex flex-col items-center justify-center">
    <TheNavbar />
    <nuxt />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  components: {
    TheNavbar
  }
};
</script>
