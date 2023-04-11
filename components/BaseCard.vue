<template>
  <div class="card bg-dark-primary">
    <p class="card__review font-nunito text-white-primary">
      <slot></slot>
    </p>
    <div class="card__author flex items-center">
      <img
        v-if="imageName"
        v-lazy="getImage(imageName)"
        :alt="authorName"
        :data-src="getPlaceholderImage"
        class="card__author__image has-image"
      />
      <div v-else class="card__author__image">
        {{ authorName[0] }}
      </div>
      <div class="card__author__info">
        <h4 class="font-poppins font-medium text-white-primary capitalize">
          {{ authorName || '--' }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      default: ''
    },
    authorName: {
      type: String,
      default: ''
    }
  },
  methods: {
    getImage(name) {
      return `/images/${name}`;
    },
    getPlaceholderImage() {
      return '/images/placeholder-image-min.jpg';
    }
  }
};
</script>

<style lang="css" scoped>
.card {
  padding: 31px 31px 35px 31px;
  box-shadow: 0 0 30px rgba(172, 172, 172, 0.16);
  max-width: 450px;
  border-radius: 8px;
}
.card__review {
  font-size: 14px;
  line-height: 19px;
  padding-bottom: 23px;
  text-align: justify;
}
.card__author__image {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: theme('colors.white.primary');
  color: theme('colors.dark.primary');
  font-family: theme('fontFamily.nunito');
  border: 1px solid theme('colors.white.primary');
  border-radius: 100%;
  padding: 2px;
}

.card__author__image.has-image {
  background-color: transparent;
}
</style>
