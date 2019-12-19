<template>
  <button
    class="button font-nunito py-2 px-4 shadow active:shadow-none"
    :class="className"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    color: {
      type: String,
      default: ''
    },
    rounded: Boolean,
    animated: Boolean
  },
  computed: {
    className() {
      return {
        'button--rounded': this.rounded,
        'button--animated': this.animated,
        'button--yellow': this.color.toLowerCase() === 'yellow'
      };
    }
  }
};
</script>

<style lang="css" scoped>
.button {
  background-color: theme('colors.green.primary');
  color: theme('colors.white.primary');
  border-radius: 14px;
  transition: all 0.3s;
}
.button--animated:hover {
  transform: scale(1.1);
}
.button--animated:active {
  transform: scale(0.95);
}
.button--rounded {
  border-radius: 15101997px;
}
.button--yellow {
  background-color: theme('colors.yellow.primary');
  color: theme('colors.dark.primary');
}
</style>
