<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
    viewBox="0 0 35 27.993"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="1"
        y1="0.5"
        x2="0"
        y2="0.5"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#FFFFFF" />
        <stop offset="1" stop-color="#FAFAFF" />
      </linearGradient>
    </defs>
    <path
      id="Union_4"
      data-name="Union 4"
      d="M17.5,33.126c-.32.005-4.668.062-5.129,0-.479-.065,0-.448.606-.894a1.711,1.711,0,0,0,.67-1.117l.228-1.454h7.25l.228,1.454a1.713,1.713,0,0,0,.67,1.116c.6.447,1.084.829.606.894-.16.022-.792.029-1.56.029C19.629,33.155,17.709,33.13,17.5,33.126ZM1.4,28.263a1.4,1.4,0,0,1-1.4-1.4V6.563a1.4,1.4,0,0,1,1.4-1.4H33.6a1.4,1.4,0,0,1,1.4,1.4v20.3a1.4,1.4,0,0,1-1.4,1.4Zm.7-4.2H32.9V7.263H2.1Z"
      transform="translate(0 -5.162)"
      fill="url(#linear-gradient)"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: '35'
    },
    height: {
      type: [Number, String],
      default: '27.993'
    }
  }
};
</script>

<style scoped></style>
