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
              Frontend Developer with
              <strong class="text-yellow-primary">JavaScript</strong>
              and
              <strong class="text-yellow-primary">Vue.Js</strong>
            </h2>
          </div>
          <base-button v-scroll-to="'#contact'" animated color="yellow">
            Contact Me
          </base-button>
        </div>
        <div v-if="false" class="banner-content__right">
          <desktop-screen width="400" height="319" />
        </div>
      </div>

      <social-buttons />
    </section>

    <!-- INFORMATION -->
    <div class="page-info bg-yellow-primary pt-5 pb-5">
      <h3 class="font-poppins font-bold text-center w-full text-dark-primary">
        Mobile version of this page is in development
      </h3>
    </div>

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
          Hello, I'm Hector Vasquez a Front End developer, workin with
          JavaScript and Vue.Js for almost 2 years. Writing code daily in
          personal projects and profresional projects. Learning new things every
          day about web development to improve my acknowledge. Writing code
          since I was 17 years old.
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
            HTML5 and Css with Flexbox and Grid are the first skills that I
            learn in this world of web development, creating mobile-first web
            interfaces since 2 years ago
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

    <!-- CONTACT -->
    <section id="contact" class="contact-info relative">
      <div class="overlay absolute"></div>
      <div
        class="contact-info__content relative z-10 text-center flex flex-col items-center justify-center"
      >
        <h2 class="font-poppins font-bold text-white-primary uppercase">
          Contact Me
        </h2>
        <p class="font-nunito font-normal text-white-primary text-center">
          Do you want to talk with me about a project?
          <br />
          Remote - Full Time - Part Time - Freelance
          <br />
          Do you have a job offer?
          <br />
          Send me an email
        </p>
        <div class="contact__email">
          Hvasquezdev@gmail.com
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section
      id="skills"
      class="skills flex flex-col justify-center items-center"
    >
      <h2
        class="font-poppins font-bold text-dark-primary text-center capitalize"
      >
        My Skills
      </h2>
      <p class="font-nunito text-center text-dark-secondary">
        As a Front End developer I learned and still learning the best
        technologies to made the best and full responsive (mobile first) and
        with a great performant Web Apps
      </p>

      <progress-skills />
    </section>

    <!-- PROJECTS -->
    <section
      id="projects"
      class="projects flex flex-col justify-center items-center bg-white-secondary"
    >
      <h2
        class="font-poppins font-bold text-dark-primary text-center capitalize"
      >
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

    <!-- REVIEWS -->
    <section
      id="reviews"
      class="reviews flex flex-col justify-center items-center"
    >
      <h2
        class="font-poppins font-bold text-dark-primary text-center capitalize"
      >
        What My Clients Say
      </h2>
      <p class="font-nunito text-center text-dark-secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
        laudantium molestiae adipisci sequi aliquam placeat!
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
        <base-card author-name="Charl2lie">
          <template>
            We had the chance to work with Hector on a web-app - and the
            communication was fluid, the product very much in line with our need
            - and the collaboration on par with the highest standards. He is a
            great collaborator - and we recommend warmly his services.
          </template>
        </base-card>
        <base-card author-name="Zipidy">
          <template>
            This seller is amazing. He wanted to assure that he can complete my
            request before putting the order in. I am truly amazed and will be
            ordering again.
          </template>
        </base-card>
      </div>
    </section>

    <!-- WORK STATUS -->
    <section
      class="work-status bg-white-secondary flex justify-center items-center"
    >
      <div
        class="work-status__wrapper flex justify-between items-center ml-auto mr-auto w-full"
      >
        <h3 class="font-nunito font-bold text-dark-primary">
          I will be available for new contracts soon. Want to talk with me?
        </h3>
        <base-button v-scroll-to="'#contact'" animated color="yellow">
          Contact Me
        </base-button>
      </div>
    </section>
  </div>
</template>

<script>
const url = 'https://www.hectorvasquez.me/';
const title = 'Hector Vasquez | Portfolio';
const description =
  'Hello, I am Hector Vasquez a Front End developer, workin with JavaScript and VueJs for almost 2 years. Writing code daily in personal and profresional projects';

export default {
  name: 'Home',
  head() {
    return {
      title: title,
      meta: [
        {
          hid: 'home-description',
          name: 'description',
          content:
            'Hello, I am Hector Vasquez a Front End developer, workin with JavaScript and VueJs for almost 2 years. Writing code daily in personal and profresional projects'
        },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@HecTorVasquez97'
        },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    };
  },
  components: {
    DesktopScreen: () => import('@/components/DesktopScreen.vue'),
    SocialButtons: () => import('@/components/SocialButtons.vue'),
    BaseButton: () => import('@/components/BaseButton.vue'),
    ServiceCard: () => import('@/components/ServiceCard.vue'),
    ProgressSkills: () => import('@/components/ProgressSkills.vue'),
    ProjectsList: () => import('@/components/ProjectsList.vue'),
    BaseCard: () => import('@/components/BaseCard.vue')
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
  margin-left: 30px;
}
#home .services .services__right .service-card:first-child {
  margin-right: 120px;
}
#home .services .services__right .service-card:not(:last-child) {
  margin-bottom: 30px;
}
#home .services .services__right .service-card:last-child {
  align-self: flex-end;
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
#home .contact-info .contact-info__content .contact__email {
  padding: 14px 55px;
  font-size: 18px;
  line-height: 27px;
  border: 2px solid theme('colors.white.primary');
  color: theme('colors.white.primary');
  background-color: transparent;
  transition: all 0.3s;
  border-radius: 4px;
}
#home .contact-info .contact-info__content .contact__email:hover {
  background-color: theme('colors.white.primary');
  color: theme('colors.dark.primary');
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
#home .work-status {
  padding: 106px 30px;
}
#home .work-status__wrapper {
  max-width: 1170px;
}
#home .work-status__wrapper h3 {
  font-size: 30px;
  margin-right: 30px;
}
#home .work-status__wrapper .button {
  padding: 20px 71px;
  font-size: 18px;
  font-weight: 600;
}
</style>
