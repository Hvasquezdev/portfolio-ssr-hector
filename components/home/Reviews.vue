<template>
  <section
    id="reviews"
    class="reviews flex flex-col justify-center items-center"
  >
    <h2 class="font-poppins font-bold text-dark-primary text-center capitalize">
      What My Clients Say
    </h2>
    <p class="font-nunito text-center text-dark-secondary">
      Reviews of some of the projects in which I have collaborated these last 2
      years as a Freelance Front End Developer
    </p>
    <div class="reviews__cards w-full ml-auto mr-auto justify-center">
      <base-card author-name="Gautambakshi">
        <template>
          We enjoyed working with Hector. He was hard working and quick to
          respond to issues and very professional. He also made valuable
          suggestions on how to improve our workflow with UI developers. We
          would definitely work with Hector again.
        </template>
      </base-card>
      <base-card author-name="Charlie">
        <template>
          We had the chance to work with Hector on a web-app - and the
          communication was fluid, the product very much in line with our need -
          and the collaboration on par with the highest standards. He is a great
          collaborator - and we recommend warmly his services.
        </template>
      </base-card>
      <base-card author-name="Magnusli">
        <template>
          Really solid and excellent developer, highly recommend. I will be sure
          to hire him again!
        </template>
      </base-card>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    BaseCard: () => import('@/components/BaseCard.vue')
  }
};
</script>

<style scoped>
#home .reviews {
  padding: 70px 30px 90px 30px;
}
#home .reviews h2 {
  font-size: 30px;
}
#home .reviews p {
  padding-top: 20px;
  font-size: 14px;
  line-height: 27px;
  padding-bottom: 45px;
  max-width: 535px;
}
#home .reviews__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 370px));
  column-gap: 30px;
  row-gap: 30px;
  max-width: 1170px;
}
#home .reviews__cards .card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
