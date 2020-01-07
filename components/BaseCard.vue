<template>
  <div class="card bg-white-primary">
    <p class="card__review font-nunito text-dark-secondary">
      <slot></slot>
    </p>
    <div class="card__author flex items-center">
      <img
        v-if="imageName"
        :src="require(`~/assets/images/${imageName}`)"
        :alt="authorName"
        class="card__author__image"
      />
      <div v-else class="card__author__image">
        {{ authorName[0] }}
      </div>
      <div class="card__author__info">
        <h4 class="font-poppins font-medium text-dark-primary capitalize">
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
  }
};
</script>

<style lang="css" scoped>
.card {
  padding: 31px 31px 35px 31px;
  box-shadow: 0 0 30px rgba(172, 172, 172, 0.16);
  max-width: 450px;
  border-radius: 4px;
}
.card__review {
  font-size: 14px;
  line-height: 19px;
  padding-bottom: 23px;
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
  background-color: theme('colors.yellow.primary');
  color: theme('colors.white.primary');
  font-family: theme('fontFamily.nunito');
}
</style>
