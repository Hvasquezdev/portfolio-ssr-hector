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
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    rounded: Boolean,
    animated: Boolean,
    bordered: Boolean,
    transparent: Boolean
  },
  computed: {
    className() {
      return {
        'button--rounded': this.rounded,
        'button--animated': this.animated,
        'button--yellow': this.color.toLowerCase() === 'yellow',
        'button--bordered': this.bordered,
        'button--transparent': this.transparent
      };
    }
  }
};
</script>

<style lang="css" scoped>
.button {
  background-color: theme('colors.green.primary');
  color: theme('colors.white.primary');
  border-radius: 4px;
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
.button--transparent {
  background-color: transparent;
  color: theme('colors.white.primary');
}
.button--bordered {
  border: 2px solid theme('colors.white.primary');
  color: theme('colors.white.primary');
  background-color: transparent;
}
.button--bordered:hover {
  background-color: theme('colors.white.primary');
  color: theme('colors.dark.primary');
}
</style>
