<template>
  <section
    id="services"
    class="services ml-auto mr-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between"
  >
    <div
      class="my-services text-center flex flex-col items-center justify-center lg:text-left lg:items-start"
    >
      <h2 class="capitalize font-bold font-poppins text-dark-primary">
        About Me
      </h2>

      <img
        class="is-mobile"
        src="/images/profile-image.jpeg"
        alt="Hector Vasquez"
        load="lazy"
      />

      <p class="font-nunito text-dark-secondary">
        I'm Hector Vasquez, and this is a short history of how I ended up loving
        to code.
        <br /><br />
        It all started when I was 15 years old. I was a video games lover and
        then some day I was thinking “How are these things made?“. I started to
        search for an answer and that's when I arrived at a video tutorial of
        C++. The first time was a bit scary to see all those strange words 😅
        but with time I started to see that I liked to do this. Since then I
        can't get enough. I learned a few things about gameplay programming and
        then started in Front-end development, I love both of those worlds and
        right now I could say that Front-end is what I love to do the most.
        <br /><br />
        I love all the things related to Front-end, making websites responsive
        and then watch those websites in my phone or desktop screen and see how
        they work and look is amazing.
        <br /><br />
        I started in the professional world as a freelancer by collaborating
        with some people and companies. Then I started to work for some startups
        as a Front-end developer, some times as the only Front-end developer and
        some times as a member of small teams with great people. I am currently
        working for a <strong>YC start-up</strong> as a front-end developer.
        <br /><br />
        My technical strengths are based on front-end development with modern
        JavaScript. They include responsive design and mobile first, design
        patterns, problem solving, web optimization like SEO, performance and
        accessibility. I consider myself a quick learner and love playing around
        3D web with Three.js, still learning and playing a lot with it.
        <br /><br />
        I speak <strong>Spanish</strong> as a native language and
        <strong>English</strong> at an intermediate level.
      </p>

      <base-button v-scroll-to="'#contact'" animated color="yellow">
        Hire Me
      </base-button>
    </div>
    <div class="services__right">
      <img src="/images/profile-image.jpeg" alt="Hector Vasquez" load="lazy" />
    </div>
  </section>
</template>

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
#home .services .my-services img {
  width: 190px;
  border-radius: 8px;
  overflow: hidden;
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
  display: none;
}
@screen md {
  #home .services {
    align-items: flex-start;
  }
  #home .services .my-services {
    max-width: 600px;
  }
  #home .services .my-services img {
    display: none;
  }
  #home .services .services__right {
    display: block;
    margin-left: 130px;
    max-width: 360px;
  }
  #home .services .services__right img {
    border-radius: 8px;
  }
}
@screen lg {
  #home .services .services__right {
    margin-left: 30px;
    margin-top: 0;
  }
}
</style>
