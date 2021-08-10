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
        src="/images/profile-image.jpg"
        alt="Hector Vasquez"
        load="lazy"
      />

      <p class="font-nunito text-dark-secondary">
        I'm Hector Vasquez, and this is a short history of how I start and what
        I do actually.
        <br /><br />
        All start when I was 15 years old, I was a video games lover and then
        some day I was thinking "How are this things made?" I started to search
        about it and then I reach a video tutorial of C++ the first time was a
        bit scary to see all those strange words 😅 but with the time I started
        to see that I liked to do this, since then I can't get enough. I learned
        a few things about gameplay programming and then started in Front-end
        development, I love both of those worlds and right now I could say that
        Front-end is what I love to do.
        <br /><br />
        I love all the things related to Front-end, like make those websites
        responsive and then watch those websites in my phone or desktop screen
        and see that they works and looks amazing, is very satisfying to me.
        <br /><br />
        I started in the professional world as a freelancer by collaborating
        with some people and companies, then I started to work for some startups
        as a Front-end developer, some times as the only Front-end developer and
        also some times as a member of small teams with great people, currently
        working for a startup and participation as a Front-end developer in
        <strong>𝐘-𝐜𝐨𝐦𝐛𝐢𝐧𝐚𝐭𝐨𝐫</strong>. <br /><br />
        My strong points and skills are based on Front-end development with
        modern JavaScript and it also includes responsive design and mobile
        first, design patterns, problem solving, web optimization like SEO,
        performance and accessibility, a few things about 3D web with Three.js
        (Still learning and playing a lot with it) and also I consider myself a
        quick learner and I love to learn new things related to this tech work.
        <br /><br />
        <strong class="uppercase">Lenguajes that I speak:</strong>
        <br />
        Spanish - <strong>Native</strong>
        <br />
        English [Intermediate] - <strong>Learning</strong>
      </p>

      <base-button v-scroll-to="'#contact'" animated color="yellow">
        Hire Me
      </base-button>
    </div>
    <div class="services__right">
      <img src="/images/profile-image.jpg" alt="Hector Vasquez" load="lazy" />
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
