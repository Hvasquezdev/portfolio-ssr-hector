<template>
  <div class="service-card flex" :class="className">
    <div class="service-card__media flex items-start">
      <slot name="media"></slot>
    </div>
    <div class="service-card__content">
      <h3 class="service-card__content__title font-poppins text-dark-primary">
        <slot name="title"></slot>
      </h3>
      <p
        class="service-card__content__description font-nunito text-dark-secondary"
      >
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    bordered: Boolean
  },
  computed: {
    className() {
      return {
        'service-card--bordered': this.bordered
      };
    }
  }
};
</script>

<style lang="css" scoped>
.service-card {
  padding: 34px 30px;
  box-shadow: 0 0 30px rgba(172, 172, 172, 0.16);
  border-radius: 14px;
  max-width: 360px;
}
.service-card--bordered {
  border: 1px solid theme('colors.yellow.primary');
}
.service-card__media {
  font-size: 35px;
  margin-right: 20px;
  min-width: 35px;
}
.service-card__content__title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
}
.service-card__content__description {
  font-size: 14px;
  line-height: 23px;
  text-align: justify;
}
</style>
