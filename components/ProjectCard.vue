<template>
  <div class="masonry__card relative">
    <client-only>
      <img v-lazy="imgObj" :alt="alt" />
    </client-only>
    <div class="masonry__card__overlay w-full flex flex-col bg-yellow-primary">
      <strong v-if="alt" class="font-poppins text-white-primary">
        {{ alt }}
      </strong>
      <div v-if="technologies.length" class="tags w-full flex mt-4">
        <template v-for="(tech, index) in technologies">
          <strong
            :key="index"
            class="tags__tag font-nunito inline-block bg-yellow-primary rounded-full px-3 py-1 text-sm text-dark-primary mr-2 mb-2"
          >
            #{{ tech }}
          </strong>
        </template>

        <a
          v-if="link"
          :href="link"
          target="_blank"
          rel="noopener"
          class="tags__tag font-nunito inline-block bg-green-primary rounded-full px-3 py-1 text-sm text-white-primary mr-2 mb-2"
        >
          #Link
        </a>
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
    },
    link: {
      type: String,
      default: ''
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
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(172, 172, 172, 0.16);
}
.masonry__card__overlay {
  background: theme('colors.dark.primary');
  bottom: 0;
  height: auto;
  padding: 20px;
  border-radius: 0 0 8px 8px;
}
.masonry__card img {
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}
.masonry__card .tags {
  flex-wrap: wrap;
}
.masonry__card .tags .tag {
  flex-wrap: wrap;
}
</style>
