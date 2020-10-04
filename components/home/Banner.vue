<template>
  <section class="banner relative flex flex-col items-center justify-center">
    <div class="banner-bg absolute top-0 left-0 w-full h-full"></div>
    <div class="banner-content relative z-20 flex justify-center">
      <div class="banner-content__left text-center">
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
        <base-button animated color="yellow" @click="openCV">
          Download CV
        </base-button>
      </div>
    </div>

    <social-buttons />
  </section>
</template>

<script>
export default {
  components: {
    SocialButtons: () => import('@/components/SocialButtons.vue')
  },

  methods: {
    openCV() {
      window.open('/documents/cv-hector.pdf');
    }
  }
};
</script>

<style scoped>
#home .banner {
  padding: 160px 30px;
  background-image: url('/images/banner-bg-min.jpg');
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
  font-size: 35px;
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
@screen md {
  #home .banner .banner-title .primary-title {
    font-size: 50px;
  }
}
</style>
