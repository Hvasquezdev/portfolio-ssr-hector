<template>
  <section
    id="services"
    class="services ml-auto mr-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between"
  >
    <div
      class="my-services text-center flex flex-col items-center justify-center lg:text-justify lg:items-start"
    >
      <h2 class="capitalize font-bold font-poppins text-dark-primary">
        My services
      </h2>
      <p class="font-nunito text-dark-secondary">
        Hello, I'm Hector Vasquez a Front End developer, workin with JavaScript
        and Vue.Js for almost 2 years. Writing code daily in personal projects
        and profresional projects. Learning new things every day about web
        development to improve my acknowledge. Writing code since I was 17 years
        old.
        <br />
        My work is entirely based around web development focused in Front End
        with modern JavaScript and Vue.Js.
        <br /><br />
        <strong class="uppercase">Lenguajes that I speak:</strong>
        <br />
        Spanish - <strong>Native</strong>
        <br />
        English - <strong>Learning</strong>
      </p>
      <base-button v-scroll-to="'#contact'" animated color="yellow">
        Hire Me
      </base-button>
    </div>
    <div class="services__right">
      <service-card>
        <template v-slot:media>
          <img src="~/assets/svg/web-gradient.svg" alt="Web HTML5 and Css3" />
        </template>
        <template v-slot:title>
          HTML5 &amp; Css3
        </template>
        <template v-slot:description>
          HTML5 and Css with Flexbox and Grid are the first skills that I learn
          in this world of web development, creating mobile-first web interfaces
          since 2 years ago
        </template>
      </service-card>

      <service-card>
        <template v-slot:media>
          <img
            src="~/assets/svg/screen-gradient.svg"
            alt="JavaScript - Vue.Js - Front-End"
          />
        </template>
        <template v-slot:title>
          JavaScript - Vue.Js
        </template>
        <template v-slot:description>
          JavaScript the programing lenguaje of the web.
          <br />
          I started with JavaScript creating my firsts dynamic pages from
          scratch, I'm now working with Vue.Js to create the best web apps.
        </template>
      </service-card>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ServiceCard: () => import('@/components/ServiceCard.vue')
  }
};
</script>

<style scoped>
#home .services {
  padding: 70px 30px;
  max-width: 1230px;
}
#home .services .my-services {
  max-width: 500px;
}
#home .services .my-services h2 {
  font-size: 30px;
}
#home .services .my-services p {
  font-size: 14px;
  line-height: 27px;
  padding-top: 20px;
  padding-bottom: 40px;
}
#home .services .my-services button {
  font-size: 18px;
  line-height: 27px;
  padding: 14px 55px;
}
#home .services .services__right {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}
#home .services .services__right .service-card:not(:last-child) {
  margin-bottom: 30px;
}
@screen md {
  #home .services .services__right .service-card:first-child {
    margin-right: 120px;
  }
  #home .services .services__right .service-card:last-child {
    align-self: flex-end;
  }
}
@screen lg {
  #home .services .services__right {
    margin-left: 30px;
    margin-top: 0;
  }
}
</style>
