<template>
  <div class="progress text-center" :style="{ 'max-width': width }">
    <div class="progress__ring relative">
      <svg
        class="progress__ring__percent"
        :class="className"
        :width="width"
        :height="height"
      >
        <defs>
          <linearGradient :id="gradientId" y1="0" y2="1">
            <stop :stop-color="gradientInitial" offset="0" />
            <stop :stop-color="gradientEnd" offset="1" />
          </linearGradient>
        </defs>
        <g>
          <circle cx="70" cy="70" r="70" stroke-width="10" stroke="#F8F8F8" />
          <circle
            cx="70"
            cy="70"
            r="70"
            stroke-width="10"
            :style="{
              'stroke-dashoffset': `calc(440 - (440 * ${percent}) / 100)`,
              stroke: `url(#${gradientId})`
            }"
          />
        </g>
      </svg>
      <div
        class="progress__ring__number absolute flex justify-center items-center"
      >
        <h3 class="font-poppins font-bold text-dark-tertiary">
          {{ percent }}<span>%</span>
        </h3>
      </div>
    </div>
    <div class="progress__label">
      <h3 class="font-poppins font-medium text-dark-primary">
        {{ label }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 150
    },
    height: {
      type: [String, Number],
      default: 150
    },
    label: {
      type: String,
      default: ''
    },
    percent: {
      type: [Number, String],
      default: 10
    },
    gradientInitial: {
      type: String,
      default: ''
    },
    gradientEnd: {
      type: String,
      default: ''
    },
    gradient: Boolean
  },
  computed: {
    className() {
      return {
        'progress__ring__percent--gradient': this.gradient
      };
    },
    gradientId() {
      const label = this.label.split(' ').join('');
      return `gradient--${label}`;
    }
  }
};
</script>

<style scoped>
.progress__ring {
  border: 10px solid theme('colors.white.primary');
  box-shadow: 0 0 20px rgba(170, 170, 170, 0.16);
  border-radius: 50%;
}
.progress__ring__percent {
  transform: rotate(270deg);
}
.progress__ring__percent circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-linecap: round;
  transform: translate(5px, 5px);
  transition: all 0.3s;
}
.progress__ring__percent circle:last-child {
  stroke: theme('colors.green.primary');
  stroke-dasharray: 440;
}
.progress__ring__number {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 34px;
}
.progress__label {
  font-size: 16px;
  margin-top: 19px;
}
</style>
