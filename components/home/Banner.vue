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
            Software Developer |
            <strong class="text-yellow-primary">Front-end</strong>
            with modern
            <strong class="text-yellow-primary">
              JavaScript
            </strong>
          </h2>
        </div>
        <base-button animated color="yellow" @click="openCV">
          Download CV
        </base-button>
      </div>
    </div>

    <social-buttons />

    <wave-shape class="banner-shape" />
  </section>
</template>

<script>
export default {
  components: {
    SocialButtons: () => import('@/components/SocialButtons.vue'),
    WaveShape: () => import('@/components/WaveShape.vue')
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
  margin-bottom: 30px;
}
#home .banner .banner-bg {
  background: theme('colors.grey.primary');
  background: -webkit-linear-gradient(
    to top,
    theme('colors.dark.transparent.primary'),
    theme('colors.dark.transparent.secondary')
  );
  background: linear-gradient(
    to top,
    theme('colors.dark.transparent.primary'),
    theme('colors.dark.transparent.secondary')
  );
  /* opacity: 0.4; */
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
#home .banner .banner-shape {
  /* height: 130px; */
  /* bottom: -130px; */
  height: 90px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -79px;
  fill: #414141;
  width: 100%;
}
@screen md {
  #home .banner {
    margin-bottom: 90px;
  }
  #home .banner .banner-title .primary-title {
    font-size: 50px;
  }
  #home .banner .banner-shape {
    height: 130px;
    bottom: -128px;
  }
}
@screen xl {
  #home .banner {
    margin-bottom: 170px;
  }
  #home .banner .banner-shape {
    height: 200px;
    bottom: -198px;
  }
}
</style>
