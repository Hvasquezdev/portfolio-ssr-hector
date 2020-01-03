<template>
  <div id="home" class="w-full">
    <!-- BANNER -->
    <section class="banner relative flex flex-col items-center justify-center">
      <div class="banner-bg absolute top-0 left-0 w-full h-full"></div>
      <div class="banner-content relative z-20 flex justify-between">
        <div class="banner-content__left">
          <div class="banner-title text-white-primary">
            <span class="secondary-title font-normal font-nunito">
              Hello, I am
            </span>
            <h1 class="primary-title font-poppins font-semibold">
              Hector Vasquez
            </h1>
            <h2 class="secondary-title">
              Frontend Developer with Vue.Js
            </h2>
          </div>
          <base-button rounded animated color="yellow">
            Contact Me
          </base-button>
        </div>
        <div class="banner-content__right">
          <desktop-screen width="400" height="319" />
        </div>
      </div>

      <social-buttons />
    </section>

    <!-- SERVICES -->
    <section
      id="services"
      class="services ml-auto mr-auto flex justify-between"
    >
      <div
        class="my-services text-left flex flex-col items-start justify-center"
      >
        <h2 class="capitalize font-bold font-poppins text-dark-primary">
          My services
        </h2>
        <p class="font-nunito text-dark-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          perferendis officia nihil quasi quia praesentium obcaecati reiciendis
          ut dolore fugit magni blanditiis possimus, ab explicabo. Illum
          expedita nulla cumque est quas aut cupiditate laudantium dignissimos
          fuga sequi animi laboriosam, sed iure. Blanditiis rerum eum cupiditate
          sed quia. Fuga, velit assumenda.
        </p>
        <base-button rounded animated color="yellow">
          Hire Me
        </base-button>
      </div>
      <div class="services__right">
        <service-card bordered>
          <template v-slot:media>
            <img
              src="~/assets/svg/screen-gradient.svg"
              alt="Web HTML5 and Css3"
            />
          </template>
          <template v-slot:title>
            HTML5 &amp; Css3
          </template>
          <template v-slot:description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ad.
          </template>
        </service-card>

        <service-card bordered>
          <template v-slot:media>
            <img
              src="~/assets/svg/web-gradient.svg"
              alt="JavaScript - Vue.Js - Front-End"
            />
          </template>
          <template v-slot:title>
            JavaScript - Vue.Js
          </template>
          <template v-slot:description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ad.
          </template>
        </service-card>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact-info relative">
      <div class="overlay absolute"></div>
      <div
        class="contact-info__content relative z-10 text-center flex flex-col items-center justify-center"
      >
        <h2 class="font-poppins font-bold text-white-primary uppercase">
          Contact Me
        </h2>
        <p class="font-nunito font-normal text-white-primary text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          aliquam!
        </p>
        <base-button rounded bordered>
          Hvasquezdev@gmail.com
        </base-button>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="skills flex flex-col justify-center items-center">
      <h2
        class="font-poppins font-bold text-dark-primary text-center capitalize"
      >
        My Skills
      </h2>
      <p class="font-nunito text-center text-dark-secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
        laudantium molestiae adipisci sequi aliquam placeat!
      </p>

      <progress-skills />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  head() {
    return {
      title: 'Hector Vasquez | Portfolio',
      meta: [
        {
          hid: 'home-description',
          name: 'description',
          content: 'Portfolio description'
        }
      ]
    };
  },
  components: {
    DesktopScreen: () => import('@/components/DesktopScreen.vue'),
    SocialButtons: () => import('@/components/SocialButtons.vue'),
    BaseButton: () => import('@/components/BaseButton.vue'),
    ServiceCard: () => import('@/components/ServiceCard.vue'),
    ProgressSkills: () => import('@/components/ProgressSkills.vue')
  },
  methods: {
    prueba() {
      console.log('hola');
    }
  }
};
</script>

<style>
#home .banner {
  padding: 160px 30px;
  background-image: url('~assets/images/banner-bg-min.jpg');
  background-size: cover;
  background-position: center;
}
#home .banner .banner-bg {
  background: theme('colors.grey.primary');
  background: -webkit-linear-gradient(
    to top,
    theme('colors.dark.primary'),
    theme('colors.dark.secondary')
  );
  background: linear-gradient(
    to top,
    theme('colors.dark.primary'),
    theme('colors.dark.secondary')
  );
  opacity: 0.4;
}
#home .banner .banner-title .secondary-title {
  font-size: 25px;
}
#home .banner .banner-title .primary-title {
  font-size: 50px;
}
#home .banner .banner-content {
  width: 100%;
  max-width: 1170px;
}
#home .banner .banner-content .button {
  margin-top: 60px;
  padding: 12px 24px;
  font-size: 18px;
  line-height: 24px;
}
#home .banner .banner-content .banner-content__right {
  /* max-width: 300px; */
}
#home .services {
  padding: 70px 30px;
  max-width: 1170px;
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
#home .services .services__right .service-card:first-child {
  margin-left: -120px;
}
#home .services .services__right .service-card:not(:last-child) {
  margin-bottom: 30px;
}
#home .contact-info {
  padding: 55px 30px;
  background-image: url('~assets/images/contact-bg-min.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#home .contact-info .overlay {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: theme('colors.grey.primary');
  background: -webkit-linear-gradient(
    to top,
    theme('colors.dark.primary'),
    theme('colors.dark.secondary')
  );
  background: linear-gradient(
    to top,
    theme('colors.dark.primary'),
    theme('colors.dark.secondary')
  );
  opacity: 0.5;
}
#home .contact-info .contact-info__content h2 {
  font-size: 30px;
  margin-bottom: 19px;
}
#home .contact-info .contact-info__content p {
  font-size: 20px;
  max-width: 535px;
  margin-bottom: 30px;
}
#home .contact-info .contact-info__content .button {
  padding: 14px 55px;
  font-size: 18px;
  line-height: 27px;
}
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
