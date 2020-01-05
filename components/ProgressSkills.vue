<template>
  <div class="progress-skills">
    <base-progress
      label="HTML5"
      percent="86"
      gradient
      gradient-initial="#F5317F"
      gradient-end="#FF7C6E"
    ></base-progress>
    <base-progress
      label="CSS3"
      percent="86"
      gradient
      gradient-initial="#1270E3"
      gradient-end="#59C2FF"
    ></base-progress>
    <base-progress
      label="JavaScript"
      percent="86"
      gradient
      gradient-initial="#FF8359"
      gradient-end="#FFDF40"
    ></base-progress>
    <base-progress
      label="Vue.Js"
      percent="86"
      gradient
      gradient-initial="#2CBFC7"
      gradient-end="#46EEAA"
    ></base-progress>
    <base-progress
      label="HTML5"
      percent="86"
      gradient
      gradient-initial="#F5317F"
      gradient-end="#FF7C6E"
    ></base-progress>
    <base-progress
      label="CSS3"
      percent="86"
      gradient
      gradient-initial="#1270E3"
      gradient-end="#59C2FF"
    ></base-progress>
    <base-progress
      label="JavaScript"
      percent="86"
      gradient
      gradient-initial="#FF8359"
      gradient-end="#FFDF40"
    ></base-progress>
    <base-progress
      label="Vue.Js"
      percent="86"
      gradient
      gradient-initial="#2CBFC7"
      gradient-end="#46EEAA"
    ></base-progress>
  </div>
</template>

<script>
export default {
  components: {
    BaseProgress: () => import('@/components/BaseProgress.vue')
  }
};
</script>

<style scoped>
.progress-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 170px));
  column-gap: 80px;
  row-gap: 80px;
  max-width: 1070px;
  justify-content: center;
}
</style>
