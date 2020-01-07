<template>
  <div class="progress-skills">
    <base-progress
      label="HTML5"
      percent="84"
      gradient
      gradient-initial="#F5317F"
      gradient-end="#FF7C6E"
    ></base-progress>
    <base-progress
      label="CSS3: Flex - Grid"
      percent="81"
      gradient
      gradient-initial="#1270E3"
      gradient-end="#59C2FF"
    ></base-progress>
    <base-progress
      label="Bulma Css"
      percent="75"
      gradient
      gradient-initial="#00d1b2"
      gradient-end="#00d1b2"
    ></base-progress>
    <base-progress
      label="JavaScript"
      percent="83"
      gradient
      gradient-initial="#FF8359"
      gradient-end="#FFDF40"
    ></base-progress>
    <base-progress
      label="Node.Js"
      percent="71"
      gradient
      gradient-initial="#23d160"
      gradient-end="#46EEAA"
    ></base-progress>
    <base-progress
      label="Vue.Js"
      percent="79"
      gradient
      gradient-initial="#4fc08d"
      gradient-end="#35495e"
    ></base-progress>
    <base-progress
      label="Git - Github"
      percent="81"
      gradient
      gradient-initial="#f56e56"
      gradient-end="#f14e32"
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
