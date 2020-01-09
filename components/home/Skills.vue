<template>
  <section id="skills" class="skills flex flex-col justify-center items-center">
    <h2 class="font-poppins font-bold text-dark-primary text-center capitalize">
      My Skills
    </h2>
    <p class="font-nunito text-center text-dark-secondary">
      As a Front End developer I learned and still learning the best
      technologies to made the best and full responsive (mobile first) and with
      a great performant Web Apps
    </p>

    <progress-skills />
  </section>
</template>

<script>
export default {
  components: {
    ProgressSkills: () => import('@/components/ProgressSkills.vue')
  }
};
</script>

<style scoped>
#home .skills {
  padding: 70px 30px;
}
#home .skills h2 {
  font-size: 30px;
}
#home .skills p {
  padding-top: 20px;
  font-size: 14px;
  line-height: 27px;
  padding-bottom: 70px;
  max-width: 535px;
}
</style>
