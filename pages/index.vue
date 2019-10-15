<template>
  <div id="home" class="w-full">
    <section class="banner relative flex items-center justify-center">
      <div class="banner-bg absolute top-0 left-0 w-full h-full" />
      <div class="banner-content relative z-20">
        <div class="banner-title text-white-primary">
          <span class="secondary-title font-normal font-nunito">
            Hello, I am
          </span>
          <h1 class="primary-title font-poppins font-semibold">
            Hector Vasquez
          </h1>
          <span class="secondary-title">
            Frontend Developer with Vue.Js
          </span>
        </div>
        <button
          class="button font-nunito bg-green-primary text-white-primary font-semibold py-2 px-4 rounded shadow hover:shadow-none"
        >
          Contact Me
        </button>
      </div>
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
  }
};
</script>

<style>
#home .banner {
  height: 900px;
}
#home .banner .banner-bg {
  background: #1270e3;
  background: -webkit-linear-gradient(to right, #1270e3, #59c2ff);
  background: linear-gradient(to right, #1270e3, #59c2ff);
  transform: skewY(-8deg);
  transform-origin: top left;
}
#home .banner .banner-title .secondary-title {
  font-size: 25px;
}
#home .banner .banner-title .primary-title {
  font-size: 50px;
}
#home .banner .banner-content .button {
  margin-top: 60px;
  width: 170px;
  height: 55px;
  font-size: 20px;
}
</style>
