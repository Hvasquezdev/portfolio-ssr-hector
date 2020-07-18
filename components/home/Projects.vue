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

    <div class="tabs">
      <button
        :class="{ 'is-active': activeTab === 'projects' }"
        class="tab-btn font-poppins font-light text-grey-secondary relative"
        @click="activeTab = 'projects'"
      >
        Web Development
      </button>
      <button
        :class="{ 'is-active': activeTab === 'certifications' }"
        class="tab-btn font-poppins text-grey-secondary font-light relative"
        @click="activeTab = 'certifications'"
      >
        Certifications
      </button>
    </div>
    <keep-alive>
      <projects-list v-if="activeTab === 'projects'" />
      <certification-list v-if="activeTab === 'certifications'" />
    </keep-alive>
  </section>
</template>

<script>
export default {
  components: {
    ProjectsList: () => import('@/components/ProjectsList.vue'),
    CertificationList: () => import('@/components/CertificationList.vue')
  },

  data() {
    return {
      activeTab: 'projects'
    };
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
#home .projects .tabs {
  margin-bottom: 90px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 20px;
  column-gap: 30px;
}
#home .projects .tabs .tab-btn {
  font-size: 16px;
  line-height: 27px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
}
#home .projects .tabs .tab-btn:active,
#home .projects .tabs .tab-btn:focus {
  outline: none;
}
#home .projects .tabs .tab-btn.is-active {
  font-weight: 500;
  color: theme('colors.green.primary');
}
#home .projects .tabs .tab-btn::after {
  content: '';
  background-color: theme('colors.green.primary');
  height: 1px;
  width: 0px;
  position: absolute;
  bottom: -3.5px;
  left: 0;
  transition: all 0.3s;
}
#home .projects .tabs .tab-btn.is-active::after {
  width: 45%;
}
</style>
