<template>
  <div class="relative flex flex-col items-center justify-center">
    <VNavbar />
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {
    VNavbar: () => import('@/components/Navbar.vue')
  }
};
</script>
