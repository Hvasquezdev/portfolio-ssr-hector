<template>
  <section
    id="contact"
    v-lazy:background-image="'/images/contact-bg-min.jpg'"
    class="contact-info relative"
  >
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
</template>

<style scoped>
#home .contact-info {
  padding: 55px 30px;
  /* background-image: url('~assets/images/contact-bg-min.jpg'); */
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
  font-size: 16px;
  max-width: 535px;
  margin-bottom: 30px;
}
#home .contact-info .contact-info__content .contact__email {
  padding: 14px 40px;
  font-size: 16px;
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
@screen md {
  #home .contact-info .contact-info__content p {
    font-size: 20px;
  }
  #home .contact-info .contact-info__content .contact__email {
    padding: 14px 55px;
    font-size: 18px;
  }
}
</style>
