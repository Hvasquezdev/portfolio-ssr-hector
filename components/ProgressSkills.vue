<template>
  <div class="progress-skills">
    <base-progress
      v-for="(skill, key) in skills"
      :key="key"
      :label="skill.label"
      :percent="skill.percent"
      :gradient="skill.gradient"
      :gradient-initial="skill.gradientInitial"
      :gradient-end="skill.gradientEnd"
    ></base-progress>
  </div>
</template>

<script>
export default {
  components: {
    BaseProgress: () => import('@/components/BaseProgress.vue')
  },

  data() {
    return {
      skills: [
        {
          label: 'HTML5',
          percent: '83',
          gradient: true,
          gradientInitial: '#F5317F',
          gradientEnd: '#FF7C6E'
        },
        {
          label: 'CSS3: Flex - Grid',
          percent: '80',
          gradient: true,
          gradientInitial: '#1270E3',
          gradientEnd: '#59C2FF'
        },
        {
          label: 'Tailwind Css',
          percent: '78',
          gradient: true,
          gradientInitial: '#00d1b2',
          gradientEnd: '#00d1b2'
        },
        {
          label: 'JavaScript',
          percent: '86',
          gradient: true,
          gradientInitial: '#FF8359',
          gradientEnd: '#FFDF40'
        },
        {
          label: 'Node.Js',
          percent: '70',
          gradient: true,
          gradientInitial: '#23d160',
          gradientEnd: '#46EEAA'
        },
        {
          label: 'Vue.Js',
          percent: '83',
          gradient: true,
          gradientInitial: '#4fc08d',
          gradientEnd: '#35495e'
        },
        {
          label: 'Nuxt.Js',
          percent: '80',
          gradient: true,
          gradientInitial: '#35495e',
          gradientEnd: '#4fc08d'
        },
        {
          label: 'React.Js',
          percent: '73',
          gradient: true,
          gradientInitial: '#1486c4',
          gradientEnd: '#4db7f1'
        },
        {
          label: 'Three.Js',
          percent: '70',
          gradient: true,
          gradientInitial: '#433f81',
          gradientEnd: '#140f2e'
        },
        {
          label: 'Git - Github',
          percent: '81',
          gradient: true,
          gradientInitial: '#f56e56',
          gradientEnd: '#f14e32'
        }
      ]
    };
  }
};
</script>

<style scoped>
.progress-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 170px));
  column-gap: 80px;
  row-gap: 80px;
  max-width: 320px;
  justify-content: center;
}
@screen md {
  .progress-skills {
    max-width: 450px;
  }
}
@screen lg {
  .progress-skills {
    max-width: 1070px;
  }
}
</style>
