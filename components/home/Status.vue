<template>
  <section
    class="work-status bg-white-secondary flex justify-center items-center"
  >
    <div
      class="work-status__wrapper flex flex-col justify-center items-center ml-auto mr-auto w-full text-center lg:flex-row lg:justify-between"
    >
      <h3 class="font-nunito font-bold text-dark-primary">
        I am available to talk about new contracts
      </h3>
      <base-button v-scroll-to="'#contact'" animated color="yellow">
        Hire Me
      </base-button>
    </div>
  </section>
</template>

<style scoped>
#home .work-status {
  padding: 70px 30px;
}
#home .work-status__wrapper {
  max-width: 1170px;
}
#home .work-status__wrapper h3 {
  font-size: 20px;
  margin-bottom: 30px;
  max-width: 500px;
}
#home .work-status__wrapper .button {
  padding: 15px 41px;
  font-size: 16px;
  font-weight: 600;
}
@screen md {
  #home .work-status {
    padding: 106px 30px;
  }
  #home .work-status__wrapper h3 {
    font-size: 30px;
  }
  #home .work-status__wrapper .button {
    padding: 20px 71px;
    font-size: 18px;
  }
}
@screen lg {
  #home .work-status__wrapper h3 {
    margin-bottom: 0;
    margin-right: 30px;
    max-width: 100%;
  }
}
</style>
