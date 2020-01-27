<template>
  <div class="masonry__card relative">
    <client-only>
      <img v-lazy="imgObj" :alt="alt" />
    </client-only>
    <div class="masonry__card__overlay w-full flex flex-col bg-yellow-primary">
      <strong class="font-poppins text-dark-primary mb-4">
        {{ alt }}
      </strong>
      <div class="tags w-full flex">
        <template v-for="(tech, index) in technologies">
          <strong
            :key="index"
            class="tags__tag font-nunito inline-block bg-yellow-primary rounded-full px-3 py-1 text-sm text-dark-primary mr-2 mb-2"
          >
            #{{ tech }}
          </strong>
        </template>
      </div>
    </div>
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
    },
    technologies: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      imgObj: {
        src: this.imageUrl,
        error: require('~/assets/svg/error.svg'),
        loading: require('~/assets/svg/spinner.svg')
      }
    };
  }
};
</script>

<style scoped>
.masonry__card {
  border-radius: 4px;
}
.masonry__card__overlay {
  background: theme('colors.white.primary');
  bottom: 0;
  height: auto;
  padding: 20px 12px 12px 20px;
  box-shadow: 0 0 30px rgba(172, 172, 172, 0.16);
  border-top: 1px solid theme('colors.yellow.primary');
  border-radius: 4px;
}
.masonry__card img {
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 30px rgba(172, 172, 172, 0.16);
  margin-bottom: 15px;
  border-radius: 4px;
}
.masonry__card .tags {
  flex-wrap: wrap;
}
.masonry__card .tags .tag {
  flex-wrap: wrap;
}
</style>
