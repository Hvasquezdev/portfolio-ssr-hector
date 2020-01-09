<template>
  <section
    id="projects"
    class="projects flex flex-col justify-center items-center bg-white-secondary"
  >
    <h2 class="font-poppins font-bold text-dark-primary text-center capitalize">
      My Portfolio
    </h2>
    <p class="font-nunito text-center text-dark-secondary">
      Here are some of the works that I made as a Front End developer and in
      some working as a FullStack
    </p>
    <h3 class="font-poppins font-medium text-green-primary relative">
      Web Development
    </h3>
    <projects-list />
  </section>
</template>

<script>
export default {
  components: {
    ProjectsList: () => import('@/components/ProjectsList.vue')
  }
};
</script>

<style scoped>
#home .projects {
  padding: 70px 30px;
}
#home .projects h2 {
  font-size: 30px;
}
#home .projects p {
  padding-top: 20px;
  font-size: 14px;
  line-height: 27px;
  padding-bottom: 45px;
  max-width: 535px;
}
#home .projects h3 {
  margin-bottom: 90px;
  font-size: 16px;
  line-height: 27px;
  cursor: pointer;
}
#home .projects h3::after {
  content: '';
  background-color: theme('colors.green.primary');
  height: 1px;
  width: 45%;
  position: absolute;
  bottom: -3.5px;
  left: 0;
  transition: all 0.3s;
}
</style>
