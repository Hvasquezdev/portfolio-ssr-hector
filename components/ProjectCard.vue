<template>
  <div class="masonry__card relative">
    <div class="masonry__card__overlay absolute w-full h-full"></div>
    <client-only>
      <img v-lazy="imageUrl" :alt="alt" :data-src="imagePlaceholder" />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    imagePlaceholder: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.masonry__card {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(172, 172, 172, 0.16);
}
.masonry__card__overlay {
  background: theme('colors.grey.primary');
  background: -webkit-linear-gradient(
    to bottom,
    theme('colors.transparent'),
    theme('colors.dark.secondary')
  );
  background: linear-gradient(
    to bottom,
    theme('colors.transparent'),
    theme('colors.dark.secondary')
  );
  /* opacity: 0.30; */
  opacity: 0;
}
.masonry__card img {
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
