<template>
  <footer
    class="footer text-center w-full flex flex-col justify-center items-center"
  >
    <div class="footer__info w-full">
      <div class="px-8 flex gap-5 flex-wrap justify-between">
        <div class="footer__info__item">
          <span class="icon text-white">
            <client-only>
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </client-only>
          </span>
          <div class="text font-nunito">
            <strong class="font-nunito">
              Phone:
            </strong>
            Whatsapp: (+58) 412-8580282
          </div>
        </div>
        <div class="footer__info__item">
          <span class="icon text-white">
            <client-only>
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </client-only>
          </span>
          <div class="text font-nunito">
            <strong class="font-nunito">
              Phone:
            </strong>
            (+54) 011 51029271
          </div>
        </div>
        <div class="footer__info__item">
          <span class="icon text-white">
            <client-only>
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </client-only>
          </span>
          <div class="text font-nunito">
            <strong class="font-nunito">
              Email:
            </strong>
            hvasquezdev@gmail.com
          </div>
        </div>
        <div class="footer__info__item">
          <span class="icon text-white">
            <client-only>
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
            </client-only>
          </span>
          <div class="text font-nunito">
            <strong class="font-nunito">
              My Address:
            </strong>
            <address>
              Buenos Aires, Argentina
            </address>
          </div>
        </div>
      </div>
    </div>
    <p class="font-nunito text-white-primary">
      Made with &#60;3 by Hector Vasquez
    </p>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  padding: 48px 30px;
  background: theme('colors.dark.primary');
}
.footer__info {
  max-width: 1170px;
  padding-bottom: 28px;
  border-bottom: 1px solid theme('colors.white.primary');
  margin-bottom: 48px;
}
.footer__info__item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.footer__info__item .icon {
  min-width: 38px;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 50%;
  border: 1px solid theme('colors.white.primary');
  color: theme('colors.white.primary');
  margin-right: 13px;
}
.footer__info__item .icon svg {
  width: 14px;
}
.footer__info__item .text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: theme('colors.white.primary');
  font-size: 14px;
}
.footer__info__item .text address {
  font-style: normal;
}
.footer__info__item .text:not(:last-child) {
  margin-right: 20px;
}
.footer p {
  font-size: 20px;
}
.footer p svg {
  width: 20px;
}
@screen md {
  .footer__info {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
}
@screen lg {
  .footer__info__item {
    justify-content: center;
  }
}
</style>
